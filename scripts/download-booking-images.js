const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Create directories
const createDirectories = () => {
  const dirs = [
    'public/images/booking',
    'public/images/booking/body-massage',
    'public/images/booking/partial-massage',
    'public/images/booking/body-scrub',
    'public/images/booking/body-wrap',
    'public/images/booking/packages',
    'public/images/booking/gift-cards',
    'public/images/booking/others'
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
const generateFilename = (productName, category) => {
  const cleanName = productName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
  
  const extension = '.jpg'; // Default extension
  return `${cleanName}${extension}`;
};

// Get category folder
const getCategoryFolder = (categoryName) => {
  const name = categoryName.toLowerCase();
  if (name.includes('body massage')) return 'body-massage';
  if (name.includes('partial massage')) return 'partial-massage';
  if (name.includes('body scrub')) return 'body-scrub';
  if (name.includes('body wrap')) return 'body-wrap';
  if (name.includes('package')) return 'packages';
  if (name.includes('gift')) return 'gift-cards';
  return 'others';
};

// Sample product data - you'll need to replace this with actual API data
const sampleProducts = [
  // Body Massage - 60 Minutes
  {
    id: '1',
    name: 'Swedish Massage',
    category: 'Body massage - 60 Minutes',
    image: 'https://www.riverdayspa.com/assets/chennai/swedish-massage-chennai.jpeg'
  },
  {
    id: '2',
    name: 'Deep Tissue Massage',
    category: 'Body massage - 60 Minutes',
    image: 'https://www.riverdayspa.com/assets/chennai/deep-tissue-massage-in-chennai.jpeg'
  },
  {
    id: '3',
    name: 'Thai Massage',
    category: 'Body massage - 60 Minutes',
    image: 'https://www.riverdayspa.com/assets/chennai/thai-spa-in-chennai.jpeg'
  },
  {
    id: '4',
    name: 'Ayurvedic Massage',
    category: 'Body massage - 60 Minutes',
    image: 'https://www.riverdayspa.com/assets/chennai/ayurvedic-massage-chennai.jpeg'
  },
  {
    id: '5',
    name: 'Hot Stone Massage',
    category: 'Body massage - 60 Minutes',
    image: 'https://www.riverdayspa.com/assets/chennai/best-oil-massage-in-chennai.jpeg'
  },
  // Body Massage - 90 Minutes
  {
    id: '6',
    name: 'Swedish Massage 90 Min',
    category: 'Body massage - 90 Minutes',
    image: 'https://www.riverdayspa.com/assets/chennai/best-body-spa-in-chennai.jpeg'
  },
  {
    id: '7',
    name: 'Deep Tissue Massage 90 Min',
    category: 'Body massage - 90 Minutes',
    image: 'https://www.riverdayspa.com/assets/chennai/body-massage-centre-in-chennai.jpeg'
  },
  // Partial Massage
  {
    id: '8',
    name: 'Head Massage',
    category: 'Partial massage',
    image: 'https://www.riverdayspa.com/assets/chennai/head-massage-center-in-chennai.jpeg'
  },
  {
    id: '9',
    name: 'Foot Massage',
    category: 'Partial massage',
    image: 'https://www.riverdayspa.com/assets/chennai/best-foot-massage-center- chennai.jpeg'
  },
  // Body Scrub
  {
    id: '10',
    name: 'Coffee Scrub',
    category: 'Body Scrub - 50 Minutes',
    image: 'https://www.riverdayspa.com/assets/chennai/body-scrub- massage-in-chennai.jpeg'
  },
  {
    id: '11',
    name: 'Sea Salt Scrub',
    category: 'Body Scrub - 50 Minutes',
    image: 'https://www.riverdayspa.com/assets/chennai/best-body-scrub-massage-in-chennai.jpeg'
  },
  // Body Wrap
  {
    id: '12',
    name: 'Herbal Body Wrap',
    category: 'Body wrap - 50 Minutes',
    image: 'https://www.riverdayspa.com/assets/chennai/couple-spa-in-chennai.jpeg'
  },
  // Packages
  {
    id: '13',
    name: 'Couple Spa Package',
    category: 'Spa Packages',
    image: 'https://www.riverdayspa.com/assets/chennai/best-couple-spa-in-chennai.jpeg'
  },
  {
    id: '14',
    name: 'Bridal Package',
    category: 'Spa Packages',
    image: 'https://www.riverdayspa.com/assets/chennai/couple-massage-spa-chennai.jpeg'
  }
];

// Main function
const downloadBookingImages = async () => {
  console.log('Starting booking images download...');
  
  createDirectories();
  
  const imageData = [];
  
  for (const product of sampleProducts) {
    try {
      const categoryFolder = getCategoryFolder(product.category);
      const filename = generateFilename(product.name, product.category);
      const localPath = `/images/booking/${categoryFolder}/${filename}`;
      const fullPath = path.join('public', localPath.substring(1));
      
      // Download image
      await downloadImage(product.image, fullPath);
      
      // Store mapping
      imageData.push({
        id: product.id,
        name: product.name,
        category: product.category,
        originalUrl: product.image,
        localPath: localPath,
        alt: product.name.toLowerCase().replace(/\s+/g, '-')
      });
      
      // Add delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.error(`Error downloading ${product.name}:`, error.message);
    }
  }
  
  // Generate data file
  const dataFileContent = `// Booking page image data
export interface BookingImageData {
  id: string;
  name: string;
  category: string;
  localPath: string;
  alt: string;
}

export const bookingImageData: BookingImageData[] = ${JSON.stringify(imageData, null, 2)};

// Helper function to get image by product ID
export const getBookingImage = (productId: string): BookingImageData | undefined => {
  return bookingImageData.find(img => img.id === productId);
};

// Helper function to get images by category
export const getBookingImagesByCategory = (category: string): BookingImageData[] => {
  return bookingImageData.filter(img => img.category === category);
};

export default bookingImageData;
`;
  
  fs.writeFileSync('src/data/bookingImageData.ts', dataFileContent);
  console.log('Generated booking image data file: src/data/bookingImageData.ts');
  
  console.log(`\\nDownload completed! Downloaded ${imageData.length} images.`);
  console.log('\\nNext steps:');
  console.log('1. Update BookSpaServicePage.tsx to use CustomImage component');
  console.log('2. Replace product.image with local paths from bookingImageData');
  console.log('3. Test the booking page to ensure images load correctly');
};

// Run the script
downloadBookingImages().catch(console.error);