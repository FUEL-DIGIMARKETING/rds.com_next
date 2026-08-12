const fs = require('fs');
const path = require('path');
const https = require('https');

// Image mappings for the 4 remaining massage pages
const massageImages = {
  thai: [
    {
      url: 'https://www.riverdayspa.com/asset/best-thai-massage-in-chennai.jpeg',
      alt: 'best-thai-massage-in-chennai',
      filename: 'best-thai-massage-in-chennai.jpeg'
    },
    {
      url: 'https://www.riverdayspa.com/asset/thai-massage-in-coimbatore.jpeg',
      alt: 'thai-massage-in-coimbatore',
      filename: 'thai-massage-in-coimbatore.jpeg'
    },
    {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur',
      filename: 'body-spa-in-tirupur.webp'
    }
  ],
  synchronized: [
    {
      url: 'https://www.riverdayspa.com/asset/best-massage-spa-in-tirupur.jpg',
      alt: 'best-massage-spa-in-tirupur',
      filename: 'best-massage-spa-in-tirupur.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/asset/spa-in-bangalore.jpeg',
      alt: 'spa-in-bangalore',
      filename: 'spa-in-bangalore.jpeg'
    },
    {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur',
      filename: 'body-spa-in-tirupur.webp'
    },
    {
      url: 'https://www.riverdayspa.com/assets/massage/best-Synchronized-full-body-massage-spa-center-chennai-river-day-spa.webp',
      alt: 'best-Synchronized-full-body-massage-spa-center-chennai-river-day-spa',
      filename: 'best-synchronized-full-body-massage-spa-center-chennai-river-day-spa.webp'
    }
  ],
  sports: [
    {
      url: 'https://www.riverdayspa.com/asset/sports-massage-in-chennai.jpg',
      alt: 'sports-massage-in-chennai',
      filename: 'sports-massage-in-chennai.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/asset/sports-massage-bangalore.jpg',
      alt: 'sports-massage-bangalore',
      filename: 'sports-massage-bangalore.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur',
      filename: 'body-spa-in-tirupur.webp'
    },
    {
      url: 'https://www.riverdayspa.com/assets/best-moroccan-bath-massage-in-vellore.jpeg',
      alt: 'best-moroccan-bath-massage-in-vellore',
      filename: 'best-moroccan-bath-massage-in-vellore.jpeg'
    }
  ],
  detoxifying: [
    {
      url: 'https://www.riverdayspa.com/asset/best-thai-massage-in-chennai.jpg',
      alt: 'best-thai-massage-in-chennai',
      filename: 'best-thai-massage-in-chennai.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/asset/kerala-ayurvedic-massage-in-chennai.jpg',
      alt: 'kerala-ayurvedic-massage-in-chennai',
      filename: 'kerala-ayurvedic-massage-in-chennai.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur',
      filename: 'body-spa-in-tirupur.webp'
    },
    {
      url: 'https://www.riverdayspa.com/assets/massage/best-detoxifying-full-body-spa-massage-center-chennai.webp',
      alt: 'best-detoxifying-full-body-spa-massage-center-chennai',
      filename: 'best-detoxifying-full-body-spa-massage-center-chennai.webp'
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
  }${images[3] ? `,
  cta: {
    src: "/images/massage/${massageType}/${images[3].filename}",
    alt: "${images[3].alt}"
  }` : ''}
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
  console.log('Starting download of remaining massage images...');
  
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
  
  console.log('\nAll massage images downloaded and data files generated!');
  console.log('\nNext steps:');
  console.log('1. Update massage page components to use CustomImage with local images');
  console.log('2. Import the generated data files in each component');
  console.log('3. Replace external URLs with local image data');
}

// Run the script
downloadAllMassageImages().catch(console.error);