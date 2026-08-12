const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Page-specific image configurations
const pageConfigs = {
  about: {
    folder: 'about',
    images: [
      {
        url: "https://www.riverdayspa.com/asset/head-massage-in-chennai.webp",
        filename: "head-massage-in-chennai.webp",
        alt: "Head massage in Chennai - River Day Spa"
      },
      {
        url: "https://www.riverdayspa.com/assets/bangalore-spa-center.webp",
        filename: "bangalore-spa-center.webp",
        alt: "Best massage spa in Chennai - River Day Spa facilities"
      },
      {
        url: "https://www.riverdayspa.com/assets/best-hair-cut-saloon-for-ladies-in-chennai.jpg",
        filename: "best-hair-cut-saloon-for-ladies-in-chennai.jpg",
        alt: "best-hair-cut-saloon-for-ladies-in-chennai"
      },
      {
        url: "https://www.riverdayspa.com/assets/vellore-massage-centre-katpadi.jpg",
        filename: "vellore-massage-centre-katpadi.jpg",
        alt: "vellore-massage-centre-katpadi"
      },
      {
        url: "https://www.riverdayspa.com/assets/massage-spa-gift-card.jpg",
        filename: "massage-spa-gift-card.jpg",
        alt: "massage-spa-gift-card"
      },
      {
        url: "https://www.riverdayspa.com/assets/couple-massage-spa-chennai.jpg",
        filename: "couple-massage-spa-chennai.jpg",
        alt: "couple-massage-spa-chennai"
      },
      {
        url: "https://www.riverdayspa.com/asset/spa-center-in-vellore.webp",
        filename: "spa-center-in-vellore.webp",
        alt: "Spa center in Vellore - River Day Spa"
      }
    ]
  },

  home: {
    folder: 'home',
    images: [



    ]
  },
  services: {
    folder: 'services',
    images: [


    ]
  }
};


const createDirectories = (pageName) => {
  const baseDir = path.join(__dirname, '..', 'public', 'images', pageName);

  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
    console.log(`📁 Created ${pageName} images directory`);
  }
};

// Download image function
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;

    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);

        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Downloaded: ${path.basename(filepath)}`);
          resolve(filepath);
        });

        fileStream.on('error', (err) => {
          fs.unlink(filepath, () => { }); // Delete partial file
          reject(err);
        });
      } else {
        reject(new Error(`HTTP ${response.statusCode}: ${url}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

// Main download function
const downloadPageImages = async (pageName) => {
  const config = pageConfigs[pageName];

  if (!config) {
    console.error(`❌ Page configuration not found for: ${pageName}`);
    console.log('Available pages:', Object.keys(pageConfigs).join(', '));
    return;
  }

  console.log(`🚀 Starting ${pageName} page image download...`);
  createDirectories(config.folder);

  let totalImages = config.images.length;
  let downloadedImages = 0;
  let failedImages = 0;

  for (const imageData of config.images) {
    try {
      const filepath = path.join(
        __dirname, '..', 'public', 'images', config.folder,
        imageData.filename
      );

      // Skip if file already exists
      if (fs.existsSync(filepath)) {
        console.log(`⏭️  Skipped (exists): ${imageData.filename}`);
        continue;
      }

      await downloadImage(imageData.url, filepath);
      downloadedImages++;

      // Add small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 100));

    } catch (error) {
      console.error(`❌ Failed to download ${imageData.url}: ${error.message}`);
      failedImages++;
    }
  }

  console.log(`\n📊 ${pageName} Download Summary:`);
  console.log(`Total images: ${totalImages}`);
  console.log(`Downloaded: ${downloadedImages}`);
  console.log(`Failed: ${failedImages}`);
  console.log(`Success rate: ${((downloadedImages / totalImages) * 100).toFixed(1)}%`);

  // Generate updated image data for the component
  generateImageData(pageName, config);
};

// Generate updated image data
const generateImageData = (pageName, config) => {
  let imageDataCode = '';

  if (pageName === 'about') {
    imageDataCode = `// About page image data with local paths
export const aboutImageData = {
  heroImage: {
    src: "/images/about/head-massage-in-chennai.webp",
    alt: "Head massage in Chennai - River Day Spa"
  },
  mainImage: {
    src: "/images/about/bangalore-spa-center.webp", 
    alt: "Best massage spa in Chennai - River Day Spa facilities"
  },
  ctaImage: {
    src: "/images/about/spa-center-in-vellore.webp",
    alt: "Spa center in Vellore - River Day Spa"
  },
  galleryItems: [
    {
      title: "Hair Care",
      description: "We here at River Day Spa know the importance of your precious locks and understand that the health of your hair is linked closely to scalp health.",
      image: "/images/about/best-hair-cut-saloon-for-ladies-in-chennai.jpg",
      alt: "best-hair-cut-saloon-for-ladies-in-chennai",
      link: ""
    },
    {
      title: "Massages", 
      description: "We ensure that we offer you a wide range of head-to-toe massage spa therapies that fosters total relaxation of the body and mind.",
      image: "/images/about/vellore-massage-centre-katpadi.jpg",
      alt: "vellore-massage-centre-katpadi",
      link: "/massages"
    },
    {
      title: "Gifts",
      description: "Choose our spa's beautifully designed gift vouchers that define various occasions.",
      image: "/images/about/massage-spa-gift-card.jpg", 
      alt: "massage-spa-gift-card",
      link: "/gifts"
    },
    {
      title: "Relax & Revive",
      description: "Our body wraps not only renew your skin lost radiance but also relax your muscles.",
      image: "/images/about/couple-massage-spa-chennai.jpg",
      alt: "couple-massage-spa-chennai", 
      link: "/relax-revive"
    }
  ]
};`;
  } else {
    // Generic template for other pages
    const imageList = config.images.map(img => `    {
      src: "/images/${config.folder}/${img.filename}",
      alt: "${img.alt}"
    }`).join(',\n');

    imageDataCode = `// ${pageName} page image data with local paths
export const ${pageName}ImageData = {
  images: [
${imageList}
  ]
};`;
  }

  const outputPath = path.join(__dirname, '..', 'src', 'data', `${pageName}ImageData.ts`);

  // Create data directory if it doesn't exist
  const dataDir = path.dirname(outputPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, imageDataCode);
  console.log(`📝 Generated ${pageName}ImageData.ts`);
};

// Download all pages
const downloadAllPages = async () => {
  console.log('🚀 Starting download for all pages...');

  for (const pageName of Object.keys(pageConfigs)) {
    if (pageConfigs[pageName].images.length > 0) {
      await downloadPageImages(pageName);
      console.log(''); // Add spacing between pages
    }
  }

  console.log('✅ All pages processed!');
};

// CLI interface
const command = process.argv[2];
const pageName = process.argv[3];

switch (command) {
  case 'download':
    if (pageName) {
      downloadPageImages(pageName);
    } else {
      downloadAllPages();
    }
    break;
  case 'list':
    console.log('Available pages:');
    Object.keys(pageConfigs).forEach(page => {
      const imageCount = pageConfigs[page].images.length;
      console.log(`  - ${page} (${imageCount} images)`);
    });
    break;
  default:
    console.log('Usage:');
    console.log('  node download-page-images.js download [page]  - Download images for specific page or all pages');
    console.log('  node download-page-images.js list             - List available pages');
    console.log('');
    console.log('Available pages:', Object.keys(pageConfigs).join(', '));
}