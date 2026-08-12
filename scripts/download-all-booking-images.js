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
const generateFilename = (productName, productId) => {
  const cleanName = productName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
  
  const extension = '.jpg';
  return `${cleanName}-${productId}${extension}`;
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

// Fetch categories from API (you'll need to run this on your server)
const fetchCategoriesFromAPI = async () => {
  // This is a placeholder - you'll need to implement actual API call
  // For now, return the sample data
  console.log('Note: This script uses sample data. To use real API data:');
  console.log('1. Run this script on your server where the API is accessible');
  console.log('2. Replace this function with actual API call to /api/categories');
  console.log('3. Or manually update the sampleCategories array below with your real data');
  
  return [
    {
      name: 'Body massage - 60 Minutes',
      products: [
        { id: '1', name: 'Swedish Massage', image: 'https://www.riverdayspa.com/assets/chennai/swedish-massage-chennai.jpeg' },
        { id: '2', name: 'Deep Tissue Massage', image: 'https://www.riverdayspa.com/assets/chennai/deep-tissue-massage-in-chennai.jpeg' },
        { id: '3', name: 'Thai Massage', image: 'https://www.riverdayspa.com/assets/chennai/thai-spa-in-chennai.jpeg' },
        { id: '4', name: 'Ayurvedic Massage', image: 'https://www.riverdayspa.com/assets/chennai/ayurvedic-massage-chennai.jpeg' },
        { id: '5', name: 'Hot Stone Massage', image: 'https://www.riverdayspa.com/assets/chennai/best-oil-massage-in-chennai.jpeg' }
      ]
    },
    {
      name: 'Body massage - 90 Minutes',
      products: [
        { id: '6', name: 'Swedish Massage 90 Min', image: 'https://www.riverdayspa.com/assets/chennai/best-body-spa-in-chennai.jpeg' },
        { id: '7', name: 'Deep Tissue Massage 90 Min', image: 'https://www.riverdayspa.com/assets/chennai/body-massage-centre-in-chennai.jpeg' }
      ]
    },
    {
      name: 'Partial massage',
      products: [
        { id: '8', name: 'Head Massage', image: 'https://www.riverdayspa.com/assets/chennai/head-massage-center-in-chennai.jpeg' },
        { id: '9', name: 'Foot Massage', image: 'https://www.riverdayspa.com/assets/chennai/best-foot-massage-center- chennai.jpeg' }
      ]
    },
    {
      name: 'Body Scrub - 50 Minutes',
      products: [
        { id: '10', name: 'Coffee Scrub', image: 'https://www.riverdayspa.com/assets/chennai/body-scrub- massage-in-chennai.jpeg' },
        { id: '11', name: 'Sea Salt Scrub', image: 'https://www.riverdayspa.com/assets/chennai/best-body-scrub-massage-in-chennai.jpeg' }
      ]
    },
    {
      name: 'Body wrap - 50 Minutes',
      products: [
        { id: '12', name: 'Herbal Body Wrap', image: 'https://www.riverdayspa.com/assets/chennai/couple-spa-in-chennai.jpeg' }
      ]
    },
    {
      name: 'Spa Packages',
      products: [
        { id: '13', name: 'Couple Spa Package', image: 'https://www.riverdayspa.com/assets/chennai/best-couple-spa-in-chennai.jpeg' },
        { id: '14', name: 'Bridal Package', image: 'https://www.riverdayspa.com/assets/chennai/couple-massage-spa-chennai.jpeg' }
      ]
    }
  ];
};

// Main function
const downloadAllBookingImages = async () => {
  console.log('Starting comprehensive booking images download...');
  
  createDirectories();
  
  try {
    const categories = await fetchCategoriesFromAPI();
    const imageData = [];
    
    for (const category of categories) {
      for (const product of category.products) {
        try {
          const categoryFolder = getCategoryFolder(category.name);
          const filename = generateFilename(product.name, product.id);
          const localPath = `/images/booking/${categoryFolder}/${filename}`;
          const fullPath = path.join('public', localPath.substring(1));
          
          // Download image
          await downloadImage(product.image, fullPath);
          
          // Store mapping
          imageData.push({
            id: product.id,
            name: product.name,
            category: category.name,
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
    }
    
    // Generate data file
    const dataFileContent = `// Booking page image data - Auto-generated
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

// Helper function to get fallback image path
export const getBookingImagePath = (productId: string, fallbackUrl: string): string => {
  const bookingImage = getBookingImage(productId);
  return bookingImage ? bookingImage.localPath : fallbackUrl;
};

export default bookingImageData;
`;
    
    fs.writeFileSync('src/data/bookingImageData.ts', dataFileContent);
    console.log('Generated booking image data file: src/data/bookingImageData.ts');
    
    console.log(`\\nDownload completed! Downloaded ${imageData.length} images.`);
    console.log('\\nImages organized by category:');
    
    const categoryCounts = {};
    imageData.forEach(img => {
      const folder = getCategoryFolder(img.category);
      categoryCounts[folder] = (categoryCounts[folder] || 0) + 1;
    });
    
    Object.entries(categoryCounts).forEach(([folder, count]) => {
      console.log(`  ${folder}: ${count} images`);
    });
    
    console.log('\\nNext steps:');
    console.log('1. BookSpaServicePage.tsx has been updated to use CustomImage');
    console.log('2. All images now use local paths with clean URLs');
    console.log('3. Test the booking page to ensure all images load correctly');
    console.log('4. Update the script with real API data if needed');
    
  } catch (error) {
    console.error('Error in main function:', error);
  }
};

// Run the script
downloadAllBookingImages().catch(console.error);