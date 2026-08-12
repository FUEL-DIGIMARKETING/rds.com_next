const fs = require('fs');
const path = require('path');
const https = require('https');

// Image mappings for the 4 final massage pages
const massageImages = {
  deepTissue: [
    {
      url: 'https://www.riverdayspa.com/asset/deep-tissue-massage-chennai.jpg',
      alt: 'deep-tissue-massage-chennai',
      filename: 'deep-tissue-massage-chennai.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/asset/deep-tissue-massage-in-coimbatore.jpg',
      alt: 'deep-tissue-massage-in-coimbatore',
      filename: 'deep-tissue-massage-in-coimbatore.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur',
      filename: 'body-spa-in-tirupur.webp'
    }
  ],
  headToToeAroma: [
    {
      url: 'https://www.riverdayspa.com/asset/head-massage-chennai.jpg',
      alt: 'head-massage-chennai',
      filename: 'head-massage-chennai.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/asset/head-massage-in-coimbatore.jpg',
      alt: 'head-massage-in-coimbatore',
      filename: 'head-massage-in-coimbatore.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur',
      filename: 'body-spa-in-tirupur.webp'
    }
  ],
  senseOfSiam: [
    {
      url: 'https://www.riverdayspa.com/asset/bali-spa-in-trichy.jpg',
      alt: 'bali-spa-in-trichy',
      filename: 'bali-spa-in-trichy.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/asset/luxury-spa-tirupur.jpg',
      alt: 'luxury-spa-tirupur',
      filename: 'luxury-spa-tirupur.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur',
      filename: 'body-spa-in-tirupur.webp'
    }
  ],
  abhyanga: [
    {
      url: 'https://www.riverdayspa.com/asset/oil-massage-centre-coimbatore.jpg',
      alt: 'oil-massage-centre-coimbatore',
      filename: 'oil-massage-centre-coimbatore.jpg'
    },
    {
      url: 'https://www.riverdayspa.com/assets/chennai-oil-massage.jpg',
      alt: 'chennai-oil-massage',
      filename: 'chennai-oil-massage.jpg'
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
  console.log('Starting download of final massage images...');
  
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
  
  console.log('\nAll final massage images downloaded and data files generated!');
  console.log('\nNext steps:');
  console.log('1. Update massage page components to use CustomImage with local images');
  console.log('2. Import the generated data files in each component');
  console.log('3. Replace external URLs with local image data');
}

// Run the script
downloadAllMassageImages().catch(console.error);