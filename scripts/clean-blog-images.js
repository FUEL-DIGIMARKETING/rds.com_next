const fs = require('fs');
const path = require('path');

// Function to clean existing blog images by removing timestamps
function cleanBlogImages() {
  const uploadsDir = path.join(__dirname, '..', 'public', 'uploads', 'blogs');
  
  function processDirectory(dirPath) {
    try {
      const items = fs.readdirSync(dirPath);
      
      items.forEach(item => {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          processDirectory(itemPath);
        } else if (stat.isFile()) {
          // Check if filename contains timestamp pattern (numbers followed by dash)
          const timestampPattern = /-\d{13,}/;
          if (timestampPattern.test(item)) {
            // Extract the clean filename
            const cleanName = item.replace(timestampPattern, '');
            const cleanPath = path.join(dirPath, cleanName);
            
            // Only rename if clean name doesn't already exist
            if (!fs.existsSync(cleanPath)) {
              fs.renameSync(itemPath, cleanPath);
              console.log(`Renamed: ${item} -> ${cleanName}`);
            } else {
              console.log(`Skipped: ${cleanName} already exists`);
            }
          }
        }
      });
    } catch (error) {
      console.error(`Error processing directory ${dirPath}:`, error.message);
    }
  }
  
  if (fs.existsSync(uploadsDir)) {
    console.log('Starting blog image cleanup...');
    processDirectory(uploadsDir);
    console.log('Blog image cleanup completed!');
  } else {
    console.log('Uploads directory not found:', uploadsDir);
  }
}

// Run the cleanup
cleanBlogImages();