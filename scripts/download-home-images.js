const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Home page images data with proper alt tags from old site
const homeImages = [
  // Hero/Background images
  {
    url: "https://www.riverdayspa.com/asset/best-massage-in-chennai.webp",
    filename: "best-massage-in-chennai.webp",
    alt: "best-massage-in-chennai"
  },
  // Video
  {
    url: "https://www.riverdayspa.com/assets/best-spa-services-youtube-video-BDEfZlEP.mp4",
    filename: "best-spa-services-youtube-video.mp4",
    alt: "Best spa services video"
  },
  // Moroccan Bath
  {
    url: "https://www.riverdayspa.com/asset/moroccan-bath-in-bangalore.webp",
    filename: "moroccan-bath-in-bangalore.webp",
    alt: "moroccan-bath-in-bangalore"
  },
  // Card Data Images
  {
    url: "https://www.riverdayspa.com/asset/spa-in-bangalore.webp",
    filename: "spa-in-bangalore.webp",
    alt: "spa-in-bangalore"
  },
  {
    url: "https://www.riverdayspa.com/asset/body-spa-trichy.webp",
    filename: "body-spa-trichy.webp",
    alt: "body-spa-trichy"
  },
  {
    url: "https://www.riverdayspa.com/asset/body-massage-in-coimbatore.jpg",
    filename: "body-massage-in-coimbatore.jpg",
    alt: "body-massage-in-coimbatore"
  },
  // Couple Massage
  {
    url: "https://www.riverdayspa.com/asset/couple-massage-in-coimbatore.jpg",
    filename: "couple-massage-in-coimbatore.jpg",
    alt: "couple-massage-in-coimbatore"
  },
  // Gallery Items
  {
    url: "https://www.riverdayspa.com/asset/coimbatore-images.webp",
    filename: "coimbatore-images.webp",
    alt: "Coimbatore spa location"
  },
  {
    url: "https://www.riverdayspa.com/asset/body-scrub-massage-in-chennai.jpeg",
    filename: "body-scrub-massage-in-chennai.jpeg",
    alt: "Chennai spa location"
  },
  {
    url: "https://www.riverdayspa.com/asset/bangalore.jpeg",
    filename: "bangalore.jpeg",
    alt: "Bangalore spa location"
  },
  {
    url: "https://www.riverdayspa.com/asset/massage-centres-in-tirupur.jpg",
    filename: "massage-centres-in-tirupur.jpg",
    alt: "Tirupur spa location"
  },
  {
    url: "https://www.riverdayspa.com/assets/spa-interior-vellore-DEGn_hdE.webp",
    filename: "spa-interior-vellore.webp",
    alt: "Trichy spa location"
  },
  {
    url: "https://www.riverdayspa.com/asset/vellore-image.webp",
    filename: "vellore-image.webp",
    alt: "Vellore spa location"
  },
  // Location/Background Images
  {
    url: "https://www.riverdayspa.com/asset/spa-center-in-vellore.webp",
    filename: "spa-center-in-vellore.webp",
    alt: "River Salon Day Spa"
  },
  {
    url: "https://www.riverdayspa.com/asset/massage-in-trichy.webp",
    filename: "massage-in-trichy.webp",
    alt: "Massage in Trichy background"
  }
];

// Create directories
const createDirectories = () => {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'home');

  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
    console.log('📁 Created home images directory');
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
const downloadHomeImages = async () => {
  console.log('🚀 Starting Home page image download...');
  createDirectories();

  let totalImages = homeImages.length;
  let downloadedImages = 0;
  let failedImages = 0;

  for (const imageData of homeImages) {
    try {
      const filepath = path.join(
        __dirname, '..', 'public', 'images', 'home',
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
  const imageDataCode = `// Home page image data with local paths
export const homeImageData = {
  heroImage: {
    src: "/images/home/best-massage-in-chennai.webp",
    alt: "best-massage-in-chennai"
  },
  video: {
    src: "/images/home/best-spa-services-youtube-video.mp4",
    alt: "Best spa services video"
  },
  moroccanBath: {
    src: "/images/home/moroccan-bath-in-bangalore.webp",
    alt: "moroccan-bath-in-bangalore"
  },
  cardData: [
    {
      img: "/images/home/spa-in-bangalore.webp",
      alt: "spa-in-bangalore",
      title: "Dedicated & Quality Therapists",
      text: "Our group consists of healers skilled in massage therapy and spa treatments. Our healers are understanding and amiable. Every customer has specific needs, and we adapt our services to meet the proper treatment for their needs."
    },
    {
      img: "/images/home/body-spa-trichy.webp",
      alt: "body-spa-trichy",
      title: "Pamper Yourself, Exceptional Service Awaits For You",
      text: 'We provide "Customer Service" that is unbeatable. Every client is unique, and they all arrive with different expectations; we provide our services in a cherished way.'
    },
    {
      img: "/images/home/body-massage-in-coimbatore.jpg",
      alt: "body-massage-in-coimbatore",
      title: "Aesthetic",
      text: "Our spa has a unique design that appeals to the senses. The way it's constructed encourages total sensory relaxation. In addition to using aromatic oils to promote relaxation."
    }
  ],
  coupleImage: {
    src: "/images/home/couple-massage-in-coimbatore.jpg",
    alt: "couple-massage-in-coimbatore"
  },
  galleryItems: [
    {
      id: 1,
      image: "/images/home/coimbatore-images.webp",
      title: "Coimbatore",
      alt: "Coimbatore spa location"
    },
    {
      id: 2,
      image: "/images/home/body-scrub-massage-in-chennai.jpeg",
      title: "Chennai",
      alt: "Chennai spa location"
    },
    {
      id: 3,
      image: "/images/home/bangalore.jpeg",
      title: "Bangalore",
      alt: "Bangalore spa location"
    },
    {
      id: 4,
      image: "/images/home/massage-centres-in-tirupur.jpg",
      title: "Tirupur",
      alt: "Tirupur spa location"
    },
    {
      id: 5,
      image: "/images/home/spa-interior-vellore.webp",
      title: "Trichy",
      alt: "Trichy spa location"
    },
    {
      id: 6,
      image: "/images/home/vellore-image.webp",
      title: "Vellore",
      alt: "Vellore spa location"
    }
  ],
  locationImage: {
    src: "/images/home/spa-center-in-vellore.webp",
    alt: "River Salon Day Spa"
  },
  reviewsBackground: {
    src: "/images/home/massage-in-trichy.webp",
    alt: "Massage in Trichy background"
  },
  ctaBackground: {
    src: "/images/home/spa-center-in-vellore.webp",
    alt: "River Salon Day Spa"
  }
};`;

  const outputPath = path.join(__dirname, '..', 'src', 'data', 'homeImageData.ts');
  
  // Create data directory if it doesn't exist
  const dataDir = path.dirname(outputPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, imageDataCode);
  console.log('📝 Generated homeImageData.ts');
};

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'download':
    downloadHomeImages();
    break;
  default:
    console.log('Usage:');
    console.log('  node download-home-images.js download - Download all Home page images');
}