const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Image data extracted from old scrub files with proper alt tags
const remainingScrubImageData = {
  lemongrass: {
    hero: {
      url: 'https://www.riverdayspa.com/asset/best-lemongrass-body-scrub-massage.jpg',
      filename: 'best-lemongrass-body-scrub-massage.jpg',
      alt: 'best-lemongrass-body-scrub-massage'
    },
    content: {
      url: 'https://www.riverdayspa.com/asset/lemongrass-body-scrub-massage-in-bangalore.jpg',
      filename: 'lemongrass-body-scrub-massage-in-bangalore.jpg',
      alt: 'lemongrass-body-scrub-massage-in-bangalore'
    },
    background: {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      filename: 'body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur'
    }
  },
  seasalt: {
    hero: {
      url: 'https://www.riverdayspa.com/asset/best-sea-salt-body-scrub-massage.jpg',
      filename: 'best-sea-salt-body-scrub-massage.jpg',
      alt: 'best-sea-salt-body-scrub-massage'
    },
    content: {
      url: 'https://www.riverdayspa.com/assets/best-body-salt-scrub-massage-in-coimbatore.jpg',
      filename: 'best-body-salt-scrub-massage-in-coimbatore.jpg',
      alt: 'best-body-salt-scrub-massage-in-coimbatore'
    },
    background: {
      url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
      filename: 'body-spa-in-tirupur.webp',
      alt: 'body-spa-in-tirupur'
    }
  },
  bodyscrub: {
    hero: {
      url: 'https://www.riverdayspa.com/asset/body-scrub-massage-in-chennai.webp',
      filename: 'body-scrub-massage-in-chennai.webp',
      alt: 'body-scrub-massage-in-chennai'
    },
    content: {
      url: 'https://www.riverdayspa.com/assets/best-body-scrub-massage.jpg',
      filename: 'best-body-scrub-massage.jpg',
      alt: 'best-body-scrub-massage'
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
    'public/images/scrubs/lemongrass',
    'public/images/scrubs/seasalt',
    'public/images/scrubs/bodyscrub'
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
  
  for (const [scrubType, images] of Object.entries(remainingScrubImageData)) {
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
  
  // Lemongrass scrub data
  const lemongrassData = `// Lemongrass scrub image data with local paths
export const lemongrassScrubImageData = {
  hero: {
    src: "/images/scrubs/lemongrass/best-lemongrass-body-scrub-massage.jpg",
    alt: "best-lemongrass-body-scrub-massage"
  },
  content: {
    src: "/images/scrubs/lemongrass/lemongrass-body-scrub-massage-in-bangalore.jpg",
    alt: "lemongrass-body-scrub-massage-in-bangalore"
  },
  background: {
    src: "/images/scrubs/lemongrass/body-spa-in-tirupur.webp",
    alt: "body-spa-in-tirupur"
  }
};
`;

  // Sea salt scrub data
  const seasaltData = `// Sea salt scrub image data with local paths
export const seasaltScrubImageData = {
  hero: {
    src: "/images/scrubs/seasalt/best-sea-salt-body-scrub-massage.jpg",
    alt: "best-sea-salt-body-scrub-massage"
  },
  content: {
    src: "/images/scrubs/seasalt/best-body-salt-scrub-massage-in-coimbatore.jpg",
    alt: "best-body-salt-scrub-massage-in-coimbatore"
  },
  background: {
    src: "/images/scrubs/seasalt/body-spa-in-tirupur.webp",
    alt: "body-spa-in-tirupur"
  }
};
`;

  // Body scrub data
  const bodyscrubData = `// Body scrub image data with local paths
export const bodyScrubImageData = {
  hero: {
    src: "/images/scrubs/bodyscrub/body-scrub-massage-in-chennai.webp",
    alt: "body-scrub-massage-in-chennai"
  },
  content: {
    src: "/images/scrubs/bodyscrub/best-body-scrub-massage.jpg",
    alt: "best-body-scrub-massage"
  },
  background: {
    src: "/images/scrubs/bodyscrub/body-spa-in-tirupur.webp",
    alt: "body-spa-in-tirupur"
  }
};
`;

  // Write data files
  fs.writeFileSync('src/data/lemongrassScrubImageData.ts', lemongrassData);
  fs.writeFileSync('src/data/seasaltScrubImageData.ts', seasaltData);
  fs.writeFileSync('src/data/bodyScrubImageData.ts', bodyscrubData);
  
  console.log('Generated data files:');
  console.log('- src/data/lemongrassScrubImageData.ts');
  console.log('- src/data/seasaltScrubImageData.ts');
  console.log('- src/data/bodyScrubImageData.ts');
};

// Main execution
const main = async () => {
  try {
    createDirectories();
    await downloadAllImages();
    generateDataFiles();
    console.log('\n✅ All remaining scrub images downloaded and data files generated successfully!');
    console.log('\nNext steps:');
    console.log('1. Update LemongrassScrubPage.tsx to use local images');
    console.log('2. Update SeaSaltScrubPage.tsx to use local images');
    console.log('3. Update BodyScrubCenterPage.tsx to use local images');
  } catch (error) {
    console.error('Error:', error);
  }
};

main();