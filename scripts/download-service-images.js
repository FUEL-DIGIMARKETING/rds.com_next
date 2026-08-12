const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Create directories
const createDirectories = () => {
  const dirs = [
    'public/images/services',
    'public/images/services/body-wrap',
    'public/images/services/body-scrub', 
    'public/images/services/body-massage'
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
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

// Generate SEO-friendly filename
const generateFilename = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim() + '.jpg';
};

// Service data from the three pages
const serviceData = {
  bodyWrap: [
    {
      title: "Chocolate Wrap",
      image: "https://www.riverdayspa.com/asset/best-chocolate-body-scrub-massage-chennai.jpg"
    },
    {
      title: "Coffee Wrap", 
      image: "https://www.riverdayspa.com/asset/coffee-wrap-body-massage-in-bangalore.jpg"
    },
    {
      title: "Mango Wrap",
      image: "https://www.riverdayspa.com/assets/best-mango-wrap-massage.webp"
    },
    {
      title: "Papaya Wrap",
      image: "https://www.riverdayspa.com/asset/best-papaya-wrap-massage-chennai.jpg"
    },
    {
      title: "Raspberry Wrap",
      image: "https://www.riverdayspa.com/asset/best-raspberry-massage-centre-in-chennai.webp"
    }
  ],
  bodyScrub: [
    {
      title: "Chocolate Scrub",
      image: "https://www.riverdayspa.com/asset/best-chocolate-body-scrub-massage-chennai.jpg"
    },
    {
      title: "Coffee Scrub",
      image: "https://www.riverdayspa.com/asset/best-coffee-body-scrub-massage-bangalore.jpg"
    },
    {
      title: "Fruit Scrub",
      image: "https://www.riverdayspa.com/asset/best-fruit-body-scrub-massage.jpeg"
    },
    {
      title: "Lemon Grass Scrub",
      image: "https://www.riverdayspa.com/asset/best-lemongrass-body-scrub-massage.jpg"
    },
    {
      title: "Sea Salt Scrub",
      image: "https://www.riverdayspa.com/asset/best-sea-salt-body-scrub-massage.jpg"
    }
  ],
  bodyMassage: [
    {
      title: "Moroccan Bath Massage",
      image: "https://www.riverdayspa.com/assets/best-moroccan-bath-massage-in-vellore.jpeg"
    },
    {
      title: "Swedish Massage",
      image: "https://www.riverdayspa.com/assets/swedish-massage-in-coimbatore.jpg"
    },
    {
      title: "Balinese Massage",
      image: "https://www.riverdayspa.com/asset/balinese-massage-bangalore.jpg"
    },
    {
      title: "Head to Toe Aroma Massage",
      image: "https://www.riverdayspa.com/asset/head-massage-chennai.jpg"
    },
    {
      title: "Deep Tissue Massage",
      image: "https://www.riverdayspa.com/asset/deep-tissue-massage-chennai.jpg"
    },
    {
      title: "Sense of Siam Massage",
      image: "https://www.riverdayspa.com/asset/bali-spa-in-trichy.jpg"
    },
    {
      title: "Detoxifying Massage",
      image: "https://www.riverdayspa.com/asset/best-thai-massage-in-chennai.jpg"
    },
    {
      title: "Sports Massage",
      image: "https://www.riverdayspa.com/asset/sports-massage-in-chennai.jpg"
    },
    {
      title: "Abhyanga Ayurvedic Massage",
      image: "https://www.riverdayspa.com/asset/oil-massage-centre-coimbatore.jpg"
    },
    {
      title: "Synchronized Massage",
      image: "https://www.riverdayspa.com/asset/best-massage-spa-in-tirupur.jpg"
    },
    {
      title: "Foot Reflexology Massage",
      image: "https://www.riverdayspa.com/asset/foot-reflexology-in-coimbatore.jpg"
    },
    {
      title: "Thai Massage",
      image: "https://www.riverdayspa.com/asset/best-thai-massage-in-chennai.jpeg"
    }
  ]
};

// Main function
const downloadServiceImages = async () => {
  console.log('Starting service images download...');
  
  createDirectories();
  
  const allImageData = {
    bodyWrap: [],
    bodyScrub: [],
    bodyMassage: []
  };
  
  for (const [category, services] of Object.entries(serviceData)) {
    console.log(`\\nDownloading ${category} images...`);
    
    for (const service of services) {
      try {
        const filename = generateFilename(service.title);
        const localPath = `/images/services/${category.replace(/([A-Z])/g, '-$1').toLowerCase()}/${filename}`;
        const fullPath = path.join('public', localPath.substring(1));
        
        // Download image
        await downloadImage(service.image, fullPath);
        
        // Store mapping
        allImageData[category].push({
          title: service.title,
          originalUrl: service.image,
          localPath: localPath,
          alt: service.title.toLowerCase().replace(/\s+/g, '-')
        });
        
        // Add delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 500));
        
      } catch (error) {
        console.error(`Error downloading ${service.title}:`, error.message);
      }
    }
  }
  
  // Generate data files for each category
  Object.entries(allImageData).forEach(([category, images]) => {
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    const dataFileContent = `// ${categoryName} service images data
export interface ${categoryName}ServiceImage {
  title: string;
  localPath: string;
  alt: string;
}

export const ${category}ServiceImages: ${categoryName}ServiceImage[] = ${JSON.stringify(images, null, 2)};

// Helper function to get image by title
export const get${categoryName}ServiceImage = (title: string): ${categoryName}ServiceImage | undefined => {
  return ${category}ServiceImages.find(img => img.title === title);
};

export default ${category}ServiceImages;
`;
    
    fs.writeFileSync(`src/data/${category}ServiceImages.ts`, dataFileContent);
    console.log(`Generated ${category} service images data file`);
  });
  
  const totalImages = Object.values(allImageData).reduce((sum, arr) => sum + arr.length, 0);
  console.log(`\\nDownload completed! Downloaded ${totalImages} service images.`);
  console.log('\\nImages organized by category:');
  Object.entries(allImageData).forEach(([category, images]) => {
    console.log(`  ${category}: ${images.length} images`);
  });
  
  console.log('\\nNext steps:');
  console.log('1. Update BodyWrapCenterPage.tsx to use CustomImage with local paths');
  console.log('2. Update BodyScrubCenterPage.tsx to use CustomImage with local paths');
  console.log('3. Update MassagePage.tsx to use CustomImage with local paths');
  console.log('4. Test all three pages to ensure images load correctly');
};

// Run the script
downloadServiceImages().catch(console.error);