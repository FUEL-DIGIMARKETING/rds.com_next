const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Image data extracted from old massage files with proper alt tags
const massageImageData = {
  moroccan: {
    hero: {
      url: 'https://www.riverdayspa.com/assets/best-moroccan-bath-massage-in-vellore.jpeg',
      filename: 'best-moroccan-bath-massage-in-vellore.jpeg',
      alt: 'best-moroccan-bath-massage-in-vellore'
    },
    content: {
      url: 'https://www.riverdayspa.com/assets/moroccan-bath-bangalore.jpeg',
      filename: 'moroccan-bath-bangalore.jpeg',
      alt: 'moroccan-bath-bangalore'
    },
    background: {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      filename: 'body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur'
    }
  },
  swedish: {
    hero: {
      url: 'https://www.riverdayspa.com/assets/swedish-massage-in-coimbatore.jpg',
      filename: 'swedish-massage-in-coimbatore.jpg',
      alt: 'swedish-massage-in-coimbatore'
    },
    content: {
      url: 'https://www.riverdayspa.com/asset/swedish-massage-bangalore.jpg',
      filename: 'swedish-massage-bangalore.jpg',
      alt: 'swedish-massage-bangalore'
    },
    background: {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      filename: 'body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur'
    }
  },
  balinese: {
    hero: {
      url: 'https://www.riverdayspa.com/asset/balinese-massage-bangalore.jpg',
      filename: 'balinese-massage-bangalore.jpg',
      alt: 'balinese-massage-bangalore'
    },
    content: {
      url: 'https://www.riverdayspa.com/assets/balinese-massage-in-coimbatore.jpg',
      filename: 'balinese-massage-in-coimbatore.jpg',
      alt: 'balinese-massage-in-coimbatore'
    },
    background: {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      filename: 'body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur'
    }
  },
  footreflexology: {
    hero: {
      url: 'https://www.riverdayspa.com/asset/foot-reflexology-in-coimbatore.jpg',
      filename: 'foot-reflexology-in-coimbatore.jpg',
      alt: 'foot-reflexology-in-coimbatore'
    },
    content: {
      url: 'https://www.riverdayspa.com/asset/foot-reflexology-in-trichy.jpg',
      filename: 'foot-reflexology-in-trichy.jpg',
      alt: 'foot-reflexology-in-trichy'
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
    'public/images/massages',
    'public/images/massages/moroccan',
    'public/images/massages/swedish',
    'public/images/massages/balinese',
    'public/images/massages/footreflexology'
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
  
  for (const [massageType, images] of Object.entries(massageImageData)) {
    console.log(`\nDownloading ${massageType} massage images...`);
    
    for (const [imageType, imageData] of Object.entries(images)) {
      const filepath = path.join('public', 'images', 'massages', massageType, imageData.filename);
      
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
  
  // Moroccan massage data
  const moroccanData = `// Moroccan massage image data with local paths
export const moroccanMassageImageData = {
  hero: {
    src: "/images/massages/moroccan/best-moroccan-bath-massage-in-vellore.jpeg",
    alt: "best-moroccan-bath-massage-in-vellore"
  },
  content: {
    src: "/images/massages/moroccan/moroccan-bath-bangalore.jpeg",
    alt: "moroccan-bath-bangalore"
  },
  background: {
    src: "/images/massages/moroccan/body-spa-in-tirupur.webp",
    alt: "body-spa-in-tirupur"
  }
};
`;

  // Swedish massage data
  const swedishData = `// Swedish massage image data with local paths
export const swedishMassageImageData = {
  hero: {
    src: "/images/massages/swedish/swedish-massage-in-coimbatore.jpg",
    alt: "swedish-massage-in-coimbatore"
  },
  content: {
    src: "/images/massages/swedish/swedish-massage-bangalore.jpg",
    alt: "swedish-massage-bangalore"
  },
  background: {
    src: "/images/massages/swedish/body-spa-in-tirupur.webp",
    alt: "body-spa-in-tirupur"
  }
};
`;

  // Balinese massage data
  const balineseData = `// Balinese massage image data with local paths
export const balineseMassageImageData = {
  hero: {
    src: "/images/massages/balinese/balinese-massage-bangalore.jpg",
    alt: "balinese-massage-bangalore"
  },
  content: {
    src: "/images/massages/balinese/balinese-massage-in-coimbatore.jpg",
    alt: "balinese-massage-in-coimbatore"
  },
  background: {
    src: "/images/massages/balinese/body-spa-in-tirupur.webp",
    alt: "body-spa-in-tirupur"
  }
};
`;

  // Foot reflexology data
  const footReflexologyData = `// Foot reflexology image data with local paths
export const footReflexologyImageData = {
  hero: {
    src: "/images/massages/footreflexology/foot-reflexology-in-coimbatore.jpg",
    alt: "foot-reflexology-in-coimbatore"
  },
  content: {
    src: "/images/massages/footreflexology/foot-reflexology-in-trichy.jpg",
    alt: "foot-reflexology-in-trichy"
  },
  background: {
    src: "/images/massages/footreflexology/body-spa-in-tirupur.webp",
    alt: "body-spa-in-tirupur"
  }
};
`;

  // Write data files
  fs.writeFileSync('src/data/moroccanMassageImageData.ts', moroccanData);
  fs.writeFileSync('src/data/swedishMassageImageData.ts', swedishData);
  fs.writeFileSync('src/data/balineseMassageImageData.ts', balineseData);
  fs.writeFileSync('src/data/footReflexologyImageData.ts', footReflexologyData);
  
  console.log('Generated data files:');
  console.log('- src/data/moroccanMassageImageData.ts');
  console.log('- src/data/swedishMassageImageData.ts');
  console.log('- src/data/balineseMassageImageData.ts');
  console.log('- src/data/footReflexologyImageData.ts');
};

// Main execution
const main = async () => {
  try {
    createDirectories();
    await downloadAllImages();
    generateDataFiles();
    console.log('\n✅ All massage images downloaded and data files generated successfully!');
    console.log('\nNext steps:');
    console.log('1. Update MoroccanBathPage.tsx to use local images');
    console.log('2. Update SwedishMassagePage.tsx to use local images');
    console.log('3. Update BalineseMassagePage.tsx to use local images');
    console.log('4. Update FootReflexologyPage.tsx to use local images');
  } catch (error) {
    console.error('Error:', error);
  }
};

main();