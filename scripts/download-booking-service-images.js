const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Create directories
const createDirectories = () => {
  const dirs = [
    'public/images/services',
    'public/images/services/body-massage',
    'public/images/services/partial-massage',
    'public/images/services/body-scrub',
    'public/images/services/body-wrap',
    'public/images/services/packages',
    'public/images/services/gift-cards'
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

// Get category folder name
const getCategoryFolder = (categoryName) => {
  if (categoryName.includes('Body massage')) return 'body-massage';
  if (categoryName.includes('Partial massage')) return 'partial-massage';
  if (categoryName.includes('Body Scrub')) return 'body-scrub';
  if (categoryName.includes('Body wrap')) return 'body-wrap';
  if (categoryName.toLowerCase().includes('package')) return 'packages';
  if (categoryName.toLowerCase().includes('gift')) return 'gift-cards';
  return 'services';
};

// Common service images that are likely to be used
const commonServiceImages = [
  // Body Massage Services
  {
    name: "Swedish Massage",
    image: "https://www.riverdayspa.com/services/best-head-massage-chennai.jpg",
    category: "Body massage - 60 Minutes"
  },
  {
    name: "Deep Tissue Massage",
    image: "https://www.riverdayspa.com/asset/deep-tissue-massage-chennai.jpg",
    category: "Body massage - 60 Minutes"
  },
  {
    name: "Balinese Massage",
    image: "https://www.riverdayspa.com/asset/balinese-massage-bangalore.jpg",
    category: "Body massage - 60 Minutes"
  },
  {
    name: "Thai Massage",
    image: "https://www.riverdayspa.com/asset/best-thai-massage-in-chennai.jpeg",
    category: "Body massage - 60 Minutes"
  },
  {
    name: "Moroccan Bath Massage",
    image: "https://www.riverdayspa.com/assets/best-moroccan-bath-massage-in-vellore.jpeg",
    category: "Body massage - 60 Minutes"
  },
  {
    name: "Head to Toe Aroma Massage",
    image: "https://www.riverdayspa.com/asset/head-massage-chennai.jpg",
    category: "Body massage - 60 Minutes"
  },
  {
    name: "Sense of Siam Massage",
    image: "https://www.riverdayspa.com/asset/bali-spa-in-trichy.jpg",
    category: "Body massage - 60 Minutes"
  },
  {
    name: "Detoxifying Massage",
    image: "https://www.riverdayspa.com/asset/best-thai-massage-in-chennai.jpg",
    category: "Body massage - 60 Minutes"
  },
  {
    name: "Sports Massage",
    image: "https://www.riverdayspa.com/asset/sports-massage-in-chennai.jpg",
    category: "Body massage - 60 Minutes"
  },
  {
    name: "Abhyanga Ayurvedic Massage",
    image: "https://www.riverdayspa.com/asset/oil-massage-centre-coimbatore.jpg",
    category: "Body massage - 60 Minutes"
  },
  {
    name: "Synchronized Massage",
    image: "https://www.riverdayspa.com/asset/best-massage-spa-in-tirupur.jpg",
    category: "Body massage - 60 Minutes"
  },
  {
    name: "Foot Reflexology Massage",
    image: "https://www.riverdayspa.com/asset/foot-reflexology-in-coimbatore.jpg",
    category: "Body massage - 60 Minutes"
  },

  // Partial Massage Services
  {
    name: "Head Massage",
    image: "https://www.riverdayspa.com/services/best-head-massage-chennai.jpg",
    category: "Partial massage"
  },
  {
    name: "Back Massage",
    image: "https://www.riverdayspa.com/asset/back-massage-chennai.jpg",
    category: "Partial massage"
  },
  {
    name: "Foot Massage",
    image: "https://www.riverdayspa.com/asset/foot-reflexology-in-coimbatore.jpg",
    category: "Partial massage"
  },

  // Body Scrub Services
  {
    name: "Chocolate Scrub",
    image: "https://www.riverdayspa.com/asset/best-chocolate-body-scrub-massage-chennai.jpg",
    category: "Body Scrub - 50 Minutes"
  },
  {
    name: "Coffee Scrub",
    image: "https://www.riverdayspa.com/asset/best-coffee-body-scrub-massage-bangalore.jpg",
    category: "Body Scrub - 50 Minutes"
  },
  {
    name: "Fruit Scrub",
    image: "https://www.riverdayspa.com/asset/best-fruit-body-scrub-massage.jpeg",
    category: "Body Scrub - 50 Minutes"
  },
  {
    name: "Lemon Grass Scrub",
    image: "https://www.riverdayspa.com/asset/best-lemongrass-body-scrub-massage.jpg",
    category: "Body Scrub - 50 Minutes"
  },
  {
    name: "Sea Salt Scrub",
    image: "https://www.riverdayspa.com/asset/best-sea-salt-body-scrub-massage.jpg",
    category: "Body Scrub - 50 Minutes"
  },

  // Body Wrap Services
  {
    name: "Chocolate Wrap",
    image: "https://www.riverdayspa.com/asset/best-chocolate-body-scrub-massage-chennai.jpg",
    category: "Body wrap - 50 Minutes"
  },
  {
    name: "Coffee Wrap",
    image: "https://www.riverdayspa.com/asset/coffee-wrap-body-massage-in-bangalore.jpg",
    category: "Body wrap - 50 Minutes"
  },
  {
    name: "Mango Wrap",
    image: "https://www.riverdayspa.com/assets/best-mango-wrap-massage.webp",
    category: "Body wrap - 50 Minutes"
  },
  {
    name: "Papaya Wrap",
    image: "https://www.riverdayspa.com/asset/best-papaya-wrap-massage-chennai.jpg",
    category: "Body wrap - 50 Minutes"
  },
  {
    name: "Raspberry Wrap",
    image: "https://www.riverdayspa.com/asset/best-raspberry-massage-centre-in-chennai.webp",
    category: "Body wrap - 50 Minutes"
  }
];

// Main function
const downloadBookingServiceImages = async () => {
  console.log('Starting booking service images download...');
  
  createDirectories();
  
  const imageMapping = {};
  
  for (const service of commonServiceImages) {
    try {
      const filename = generateFilename(service.name);
      const categoryFolder = getCategoryFolder(service.category);
      const localPath = `/images/services/${categoryFolder}/${filename}`;
      const fullPath = path.join('public', localPath.substring(1));
      
      // Download image
      await downloadImage(service.image, fullPath);
      
      // Store mapping
      if (!imageMapping[service.category]) {
        imageMapping[service.category] = [];
      }
      
      imageMapping[service.category].push({
        name: service.name,
        originalUrl: service.image,
        localPath: localPath,
        filename: filename
      });
      
      // Add delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.error(`Error downloading ${service.name}:`, error.message);
    }
  }
  
  // Generate image mapping file
  const mappingContent = `// Service image mappings for BookSpaServicePage
export interface ServiceImageMapping {
  name: string;
  originalUrl: string;
  localPath: string;
  filename: string;
}

export const serviceImageMappings: Record<string, ServiceImageMapping[]> = ${JSON.stringify(imageMapping, null, 2)};

// Helper function to get local image path by service name and category
export const getServiceImagePath = (serviceName: string, category: string): string => {
  const categoryMappings = serviceImageMappings[category];
  if (!categoryMappings) return '/images/services/default-service.jpg';
  
  const mapping = categoryMappings.find(m => m.name === serviceName);
  return mapping ? mapping.localPath : '/images/services/default-service.jpg';
};

// Helper function to replace remote URLs with local paths
export const replaceServiceImageUrl = (originalUrl: string): string => {
  for (const categoryMappings of Object.values(serviceImageMappings)) {
    const mapping = categoryMappings.find(m => m.originalUrl === originalUrl);
    if (mapping) return mapping.localPath;
  }
  return originalUrl; // Return original if no mapping found
};

export default serviceImageMappings;
`;
  
  // Create data directory if it doesn't exist
  if (!fs.existsSync('src/data')) {
    fs.mkdirSync('src/data', { recursive: true });
  }
  
  fs.writeFileSync('src/data/serviceImageMappings.ts', mappingContent);
  console.log('Generated service image mappings file');
  
  const totalImages = Object.values(imageMapping).reduce((sum, arr) => sum + arr.length, 0);
  console.log(`\nDownload completed! Downloaded ${totalImages} service images.`);
  console.log('\nImages organized by category:');
  Object.entries(imageMapping).forEach(([category, images]) => {
    console.log(`  ${category}: ${images.length} images`);
  });
  
  console.log('\nNext steps:');
  console.log('1. Update BookSpaServicePage.tsx to use local image paths');
  console.log('2. Import and use the replaceServiceImageUrl helper function');
  console.log('3. Test the booking page to ensure images load correctly');
};

// Run the script
downloadBookingServiceImages().catch(console.error);