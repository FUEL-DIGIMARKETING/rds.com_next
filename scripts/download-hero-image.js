const fs = require('fs');
const https = require('https');

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
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

// Download hero image
const downloadHeroImage = async () => {
  try {
    await downloadImage(
      'https://www.riverdayspa.com/asset/best-spa-in-chennai-river-day-spa.webp',
      'public/images/booking/book-spa-appointment.jpg'
    );
    console.log('Hero image downloaded successfully!');
  } catch (error) {
    console.error('Error downloading hero image:', error.message);
  }
};

downloadHeroImage();