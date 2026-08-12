const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// About page images data
const aboutImages = [
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
];

// Create directories
const createDirectories = () => {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'about');

  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
    console.log('📁 Created about images directory');
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
const downloadAboutImages = async () => {
  console.log('🚀 Starting About page image download...');
  createDirectories();

  let totalImages = aboutImages.length;
  let downloadedImages = 0;
  let failedImages = 0;

  for (const imageData of aboutImages) {
    try {
      const filepath = path.join(
        __dirname, '..', 'public', 'images', 'about',
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

  console.log('\n📊 Download Summary:');
  console.log(`Total images: ${totalImages}`);
  console.log(`Downloaded: ${downloadedImages}`);
  console.log(`Failed: ${failedImages}`);
  console.log(`Success rate: ${((downloadedImages / totalImages) * 100).toFixed(1)}%`);

  // Generate updated image data for the component
  generateImageData();
};

// Generate updated image data
const generateImageData = () => {
  const imageDataCode = `// Updated About page image data with local paths
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

  const outputPath = path.join(__dirname, '..', 'src', 'data', 'aboutImageData.ts');
  
  // Create data directory if it doesn't exist
  const dataDir = path.dirname(outputPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, imageDataCode);
  console.log('📝 Generated aboutImageData.ts');
};

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'download':
    downloadAboutImages();
    break;
  default:
    console.log('Usage:');
    console.log('  node download-about-images.js download - Download all About page images');
}