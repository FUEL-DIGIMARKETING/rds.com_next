const fs = require('fs');
const path = require('path');
const https = require('https');

// Image mappings for the last 4 massage pages
const massageImages = {
  ayurvedic: [
    {
      url: 'https://www.riverdayspa.com/asset/ayurvedic-massage-centres-in-bangalore.jpg',
      alt: 'ayurvedic-massage-centres-in-bangalore',
      filename: 'ayurvedic-massage-centres-in-bangalore.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/asset/best-ayurvedic-massage-in-chennai.jpg',
      alt: 'best-ayurvedic-massage-in-chennai',
      filename: 'best-ayurvedic-massage-in-chennai.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur',
      filename: 'body-spa-in-tirupur.webp'
    }
  ],
  couple: [
    {
      url: 'https://www.riverdayspa.com/asset/couple-massage-bangalore.jpg',
      alt: 'couple-massage-bangalore',
      filename: 'couple-massage-bangalore.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/asset/couple-massage-spa-bangalore.jpg',
      alt: 'couple-massage-spa-bangalore',
      filename: 'couple-massage-spa-bangalore.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur',
      filename: 'body-spa-in-tirupur.webp'
    }
  ],
  partial: [
    {
      url: 'https://www.riverdayspa.com/asset/massage-center-in-trichy.jpg',
      alt: 'massage-center-in-trichy',
      filename: 'massage-center-in-trichy.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/asset/best-luxury-spa-in-chennai.jpg',
      alt: 'best-luxury-spa-in-chennai',
      filename: 'best-luxury-spa-in-chennai.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur',
      filename: 'body-spa-in-tirupur.webp'
    }
  ],
  bodyMassageCenter: [
    {
      url: 'https://www.riverdayspa.com/assets/best-body-massage-center-in-chennai.webp',
      alt: 'best-body-massage-center-in-chennai',
      filename: 'best-body-massage-center-in-chennai.webp'
    },
    {
      url: 'https://www.riverdayspa.com/asset/top-spa-in-bangalore.webp',
      alt: 'top-spa-in-bangalore',
      filename: 'top-spa-in-bangalore.webp'
    },
    {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur',
      filename: 'body-spa-in-tirupur.webp'
    }
  ]
};

// Function to download image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file async
      reject(err);
    });
  });
}

// Function to create directories
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Function to generate data file
function generateDataFile(massageType, images) {
  const dataContent = `// ${massageType.charAt(0).toUpperCase() + massageType.slice(1)} massage image data with local paths
export const ${massageType}MassageImageData = {
  hero: {
    src: "/images/massage/${massageType}/${images[0].filename}",
    alt: "${images[0].alt}"
  },
  content: {
    src: "/images/massage/${massageType}/${images[1].filename}",
    alt: "${images[1].alt}"
  },
  background: {
    src: "/images/massage/${massageType}/${images[2].filename}",
    alt: "${images[2].alt}"
  }
};
`;

  const dataDir = path.join(__dirname, '..', 'src', 'data');
  ensureDirectoryExists(dataDir);
  
  const dataFilePath = path.join(dataDir, `${massageType}MassageImageData.ts`);
  fs.writeFileSync(dataFilePath, dataContent);
  console.log(`Generated data file: ${dataFilePath}`);
}

// Main function
async function downloadAllMassageImages() {
  console.log('Starting download of last massage images...');
  
  // Create base directories
  const baseImageDir = path.join(__dirname, '..', 'public', 'images', 'massage');
  ensureDirectoryExists(baseImageDir);
  
  for (const [massageType, images] of Object.entries(massageImages)) {
    console.log(`\nProcessing ${massageType} massage images...`);
    
    // Create massage type directory
    const massageDir = path.join(baseImageDir, massageType);
    ensureDirectoryExists(massageDir);
    
    // Download images
    for (const image of images) {
      const filepath = path.join(massageDir, image.filename);
      
      // Skip if file already exists
      if (fs.existsSync(filepath)) {
        console.log(`Skipped (already exists): ${filepath}`);
        continue;
      }
      
      try {
        await downloadImage(image.url, filepath);
      } catch (error) {
        console.error(`Failed to download ${image.url}:`, error.message);
      }
    }
    
    // Generate data file
    generateDataFile(massageType, images);
  }
  
  console.log('\nAll last massage images downloaded and data files generated!');
}

// Run the script
downloadAllMassageImages().catch(console.error);