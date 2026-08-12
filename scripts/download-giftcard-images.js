const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Gift card images data
const giftCardImages = [
  {
    url: "https://www.riverdayspa.com/asset/birthday-gift-card.webp",
    filename: "birthday-gift-card.webp",
    alt: "Birthday Gift Card - River Day Spa"
  },
  {
    url: "https://www.riverdayspa.com/asset/congratulations-gift-card.webp",
    filename: "congratulations-gift-card.webp",
    alt: "Congratulations Gift Card - River Day Spa"
  },
  {
    url: "https://www.riverdayspa.com/asset/anniversary-gift-card.webp",
    filename: "anniversary-gift-card.webp",
    alt: "Anniversary Gift Card - River Day Spa"
  },
  {
    url: "https://www.riverdayspa.com/asset/festival-gift-card.webp",
    filename: "festival-gift-card.webp",
    alt: "Festival Gift Card - River Day Spa"
  },
  {
    url: "https://www.riverdayspa.com/asset/surprise-gift-card.webp",
    filename: "surprise-gift-card.webp",
    alt: "Surprise Gift Card - River Day Spa"
  }
];

// Create directories
const createDirectories = () => {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'giftcards');

  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
    console.log('📁 Created giftcards images directory');
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
const downloadGiftCardImages = async () => {
  console.log('🚀 Starting Gift Card images download...');
  createDirectories();

  let totalImages = giftCardImages.length;
  let downloadedImages = 0;
  let failedImages = 0;

  for (const imageData of giftCardImages) {
    try {
      const filepath = path.join(
        __dirname, '..', 'public', 'images', 'giftcards',
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
  const imageDataCode = `// Gift card image data with local paths
export const giftCardImageData = [
  {
    id: 1,
    name: "Birthday Gift Card",
    image: "/images/giftcards/birthday-gift-card.webp",
    alt: "Birthday Gift Card - River Day Spa"
  },
  {
    id: 2,
    name: "Congratulations Gift Card",
    image: "/images/giftcards/congratulations-gift-card.webp",
    alt: "Congratulations Gift Card - River Day Spa"
  },
  {
    id: 3,
    name: "Anniversary Gift Card",
    image: "/images/giftcards/anniversary-gift-card.webp",
    alt: "Anniversary Gift Card - River Day Spa"
  },
  {
    id: 4,
    name: "Festival Gift Card",
    image: "/images/giftcards/festival-gift-card.webp",
    alt: "Festival Gift Card - River Day Spa"
  },
  {
    id: 5,
    name: "Surprise Gift Card",
    image: "/images/giftcards/surprise-gift-card.webp",
    alt: "Surprise Gift Card - River Day Spa"
  }
];`;

  const outputPath = path.join(__dirname, '..', 'src', 'data', 'giftCardImageData.ts');
  
  // Create data directory if it doesn't exist
  const dataDir = path.dirname(outputPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, imageDataCode);
  console.log('📝 Generated giftCardImageData.ts');
};

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'download':
    downloadGiftCardImages();
    break;
  default:
    console.log('Usage:');
    console.log('  node download-giftcard-images.js download - Download all Gift Card images');
}