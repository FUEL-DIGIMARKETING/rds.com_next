const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Image data extracted from old scrub files with proper alt tags
const scrubImageData = {
  chocolate: {
    hero: {
      url: 'https://www.riverdayspa.com/asset/best-chocolate-body-scrub-massage-chennai.jpg',
      filename: 'best-chocolate-body-scrub-massage-chennai.jpg',
      alt: 'best-chocolate-body-scrub-massage-chennai'
    },
    content: {
      url: 'https://www.riverdayspa.com/asset/body-scrub-massage-center-in-chennai.jpg',
      filename: 'body-scrub-massage-center-in-chennai.jpg',
      alt: 'body-scrub-massage-center-in-chennai'
    },
    background: {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      filename: 'body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur'
    }
  },
  coffee: {
    hero: {
      url: 'https://www.riverdayspa.com/asset/best-coffee-body-scrub-massage-bangalore.jpg',
      filename: 'best-coffee-body-scrub-massage-bangalore.jpg',
      alt: 'best-coffee-body-scrub-massage-bangalore'
    },
    content: {
      url: 'https://www.riverdayspa.com/asset/coffee-body-scrub-massage-spa.jpg',
      filename: 'coffee-body-scrub-massage-spa.jpg',
      alt: 'coffee-body-scrub-massage-spa'
    },
    background: {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      filename: 'body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur'
    }
  },
  fruit: {
    hero: {
      url: 'https://www.riverdayspa.com/asset/best-fruit-body-scrub-massage.jpeg',
      filename: 'best-fruit-body-scrub-massage.jpeg',
      alt: 'best-fruit-body-scrub-massage'
    },
    content: {
      url: 'https://www.riverdayspa.com/asset/fruit-massage-in-chennai.webp',
      filename: 'fruit-massage-in-chennai.webp',
      alt: 'fruit-massage-in-chennai'
    },
    background: {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      filename: 'body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur'
    }
  }
};

// Create directories
const createDirectories = () => {
  const dirs = [
    'public/images/scrubs',
    'public/images/scrubs/chocolate',
    'public/images/scrubs/coffee',
    'public/images/scrubs/fruit'
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
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
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
        
        fileStream.on('error', (err) => {
          fs.unlink(filepath, () => {});
          reject(err);
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

// Download all images
const downloadAllImages = async () => {
  console.log('Starting image downloads...');
  
  for (const [scrubType, images] of Object.entries(scrubImageData)) {
    console.log(`\nDownloading ${scrubType} scrub images...`);
    
    for (const [imageType, imageData] of Object.entries(images)) {
      const filepath = path.join('public', 'images', 'scrubs', scrubType, imageData.filename);
      
      try {
        await downloadImage(imageData.url, filepath);
      } catch (error) {
        console.error(`Error downloading ${imageData.url}:`, error.message);
      }
    }
  }
};

// Generate data files
const generateDataFiles = () => {
  console.log('\nGenerating data files...');
  
  // Chocolate scrub data
  const chocolateData = `// Chocolate scrub image data with local paths
export const chocolateScrubImageData = {
  hero: {
    src: "/images/scrubs/chocolate/best-chocolate-body-scrub-massage-chennai.jpg",
    alt: "best-chocolate-body-scrub-massage-chennai"
  },
  content: {
    src: "/images/scrubs/chocolate/body-scrub-massage-center-in-chennai.jpg",
    alt: "body-scrub-massage-center-in-chennai"
  },
  background: {
    src: "/images/scrubs/chocolate/body-spa-in-tirupur.webp",
    alt: "body-spa-in-tirupur"
  }
};
`;

  // Coffee scrub data
  const coffeeData = `// Coffee scrub image data with local paths
export const coffeeScrubImageData = {
  hero: {
    src: "/images/scrubs/coffee/best-coffee-body-scrub-massage-bangalore.jpg",
    alt: "best-coffee-body-scrub-massage-bangalore"
  },
  content: {
    src: "/images/scrubs/coffee/coffee-body-scrub-massage-spa.jpg",
    alt: "coffee-body-scrub-massage-spa"
  },
  background: {
    src: "/images/scrubs/coffee/body-spa-in-tirupur.webp",
    alt: "body-spa-in-tirupur"
  }
};
`;

  // Fruit scrub data
  const fruitData = `// Fruit scrub image data with local paths
export const fruitScrubImageData = {
  hero: {
    src: "/images/scrubs/fruit/best-fruit-body-scrub-massage.jpeg",
    alt: "best-fruit-body-scrub-massage"
  },
  content: {
    src: "/images/scrubs/fruit/fruit-massage-in-chennai.webp",
    alt: "fruit-massage-in-chennai"
  },
  background: {
    src: "/images/scrubs/fruit/body-spa-in-tirupur.webp",
    alt: "body-spa-in-tirupur"
  }
};
`;

  // Write data files
  fs.writeFileSync('src/data/chocolateScrubImageData.ts', chocolateData);
  fs.writeFileSync('src/data/coffeeScrubImageData.ts', coffeeData);
  fs.writeFileSync('src/data/fruitScrubImageData.ts', fruitData);
  
  console.log('Generated data files:');
  console.log('- src/data/chocolateScrubImageData.ts');
  console.log('- src/data/coffeeScrubImageData.ts');
  console.log('- src/data/fruitScrubImageData.ts');
};

// Main execution
const main = async () => {
  try {
    createDirectories();
    await downloadAllImages();
    generateDataFiles();
    console.log('\n✅ All scrub images downloaded and data files generated successfully!');
    console.log('\nNext steps:');
    console.log('1. Update ChocolateScrubPage.tsx to use local images');
    console.log('2. Update CoffeeScrubPage.tsx to use local images');
    console.log('3. Update FruitScrubPage.tsx to use local images');
  } catch (error) {
    console.error('Error:', error);
  }
};

main();