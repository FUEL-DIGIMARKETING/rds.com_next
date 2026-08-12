const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Gallery data with all image URLs
const galleryData = [
  {
    city: "Chennai",
    folder: "chennai",
    images: [
      "https://www.riverdayspa.com/assets/chennai/ayurvedic-massage-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/best-body-scrub-massage-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/best-body-spa-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/best-couple-spa-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/best-foot-massage-center- chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/best-oil-massage-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/best-Spa-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/best-thai-spa-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/body-massage-centre-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/body-scrub- massage-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/body-spa-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/body-spa-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/chennai-body- massage-centre.jpeg",
      "https://www.riverdayspa.com/assets/chennai/chennai-massage-centre.jpeg",
      "https://www.riverdayspa.com/assets/chennai/chennai-spa-centre.jpeg",
      "https://www.riverdayspa.com/assets/chennai/chennai-spa-massage-centre.jpeg",
      "https://www.riverdayspa.com/assets/chennai/couple-massage-spa-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/couple-spa-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/deep-tissue-massage-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/head-massage-center-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/kerala-ayurvedic-massage-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/massage-centre-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/massage-centre-egmore.jpeg",
      "https://www.riverdayspa.com/assets/chennai/massage-centre-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/couple-massage-spa-in-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/spa-in-chennai-egmore.jpeg",
      "https://www.riverdayspa.com/assets/chennai/swedish-massage-chennai.jpeg",
      "https://www.riverdayspa.com/assets/chennai/thai-spa-in-chennai.jpeg"
    ]
  },
  {
    city: "Coimbatore - RS Puram, Elite",
    folder: "coimbatore-elite",
    images: [
      "https://www.riverdayspa.com/asset/coimbatore/beauty-parlor-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/best-balinese-massage-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/best-beauty-parlour-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/best-body-massage-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/best-couple-spa-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/best-hair-salon-in-coimbatore-for-ladies.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/best-massage-center-in-coimbatore-river-day-spa2.jpg",
      "https://www.riverdayspa.com/asset/coimbatore/best-massage-centre-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/best-parlour-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/best-spa-in-coimbatore-river-day-spa7.jpg",
      "https://www.riverdayspa.com/asset/coimbatore/best-spas-in-coimbatore-river-day-spa7.jpg",
      "https://www.riverdayspa.com/asset/coimbatore/body-massage-coimbatore-river-day-spa4.jpg",
      "https://www.riverdayspa.com/asset/coimbatore/body-massage-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/coimbatore-spa-river-day-spa-2.webp",
      "https://www.riverdayspa.com/asset/coimbatore/couple-massage-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/couple-massage-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/couple-massage-spa-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/couple-spa-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/couple-spas-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/hair-salon-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/massage-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/parlour-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/salon-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/spa-center-in-coimbatore-river-day-spa2.jpg",
      "https://www.riverdayspa.com/asset/coimbatore/spas-in-coimbatore.jpeg",
      "https://www.riverdayspa.com/asset/coimbatore/best-rs-puram-couple-spa-coimbatore.webp",
      "https://www.riverdayspa.com/asset/coimbatore/couple-spa-coimbatore.webp",
      "https://www.riverdayspa.com/asset/coimbatore/rs-puram-couple-massage-coimbatore.jpg",
      "https://www.riverdayspa.com/asset/coimbatore/rs-puram-couple-spa-coimbatore.webp",
      "https://www.riverdayspa.com/asset/coimbatore/rs-puram-couple-spa-in-coimbatore.jpg"
    ]
  },
  {
    city: "Coimbatore - RS Puram",
    folder: "coimbatore-rspuram",
    images: [
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/bali-massage-coimbatore.webp",
      "https://www.riverdayspa.com/asset/coimbatore/massage-center-in-coimbatore-river-day-spa2.jpg",
      "https://www.riverdayspa.com/asset/coimbatore/massage-in-coimbatore-river-day-spa5.jpg",
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/best-bali-massage-coimbatore.jpg",
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/best-coimbatore-massage-spa.webp",
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/best-massage-center-in-coimbatore-rs-puram.jpg",
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/best-massage-coimbatore.webp",
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/best-spa-in-coimbatore-female-to-male.webp",
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/best-spa-in-rs-puram.webp",
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/best-spas-in-coimbatore-river-day-spa7.jpg",
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/body-massage-coimbatore-in-rs-puram.jpg",
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/coimbatore-best-massage-spa.jpg",
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/massage-spa-in-rs-puram.jpg",
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/rs-puram-coimbatore-massage-spa.webp",
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/spa-center-in-coimbatore-rs-puram.jpg",
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/spa-in-coimbatore-female-to-male.jpg",
      "https://www.riverdayspa.com/asset/coimbatore-rspuram/spa-in-rs-puram.webp"
    ]
  },
  {
    city: "Bangalore",
    folder: "bangalore",
    images: [
      "https://www.riverdayspa.com/asset/spas-in-indiranagar.jpeg",
      "https://www.riverdayspa.com/asset/best-spa-in-indiranagar.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/abhyanga-massage-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/bangalore-best-couples-massage.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-abhyanga-massage-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-balinese-massage-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-balinese-massage-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-bangalore-couples-massage.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-bangalore-massage-centre.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-body-massage-bangalore-indiranagar.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-body-massage-indiranagar.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-couple-massage-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-couple-massage-spa-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-couple-spa-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-luxury-spa-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-massage-spa-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-massage-spa-packages-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-spa-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-spas-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/best-sports-massage-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/body-massage-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/body-massage-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/body-spa-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/couple-massage-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/couple-massage-centre-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/couple-massage-spa-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/couple-spa-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/couple-spa-packages-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/massage-spa-centre-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/massage-spa-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/spa-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/spa-services-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/swedish-massage-in-bangalore.jpeg",
      "https://www.riverdayspa.com/asset/bangalore/top-spa-in-bangalore.jpeg"
    ]
  },
  {
    city: "Vellore-Tollgate",
    folder: "vellore-tollgate",
    images: [
      "https://www.riverdayspa.com/assets/vellore/best-body-massage-in-vellore-min.jpg",
      "https://www.riverdayspa.com/assets/vellore/best-massage-center-in-vellore-min.jpg",
      "https://www.riverdayspa.com/assets/vellore/best-massage-centre-in-vellore-min.jpg",
      "https://www.riverdayspa.com/assets/vellore/best-massage-in-vellore-min.jpg",
      "https://www.riverdayspa.com/assets/vellore/best-massage-spa-centre-in-vellore-min.jpg",
      "https://www.riverdayspa.com/assets/vellore/best-massage-spa-in-vellore-min.jpeg",
      "https://www.riverdayspa.com/assets/vellore/best-massage-spa-vellore-min.jpeg",
      "https://www.riverdayspa.com/assets/vellore/body-massage-in-vellore-min.jpg",
      "https://www.riverdayspa.com/assets/vellore/massage-center-in-vellore-min.jpg",
      "https://www.riverdayspa.com/assets/vellore/massage-centre-vellore-min.jpg",
      "https://www.riverdayspa.com/assets/vellore/massage-in-vellore-min.jpg",
      "https://www.riverdayspa.com/assets/vellore/vellore-best-body-massage-centre-min.jpeg",
      "https://www.riverdayspa.com/assets/vellore/spa-massage-in-vellore-min.jpeg"
    ]
  },
  {
    city: "Vellore-Katpadi",
    folder: "vellore-katpadi",
    images: [
      "https://www.riverdayspa.com/assets/katpadi/ayurvedic-massage-in-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/best-couple-massage-centre-katpadi.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/best-couple-massage-in-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/best-couple-massage-spa-in-katpadi.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/best-couple-massage-spa-in-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/best-couple-massage-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/best-couple-spa-in-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/best-kerala-ayurvedic-massage-in-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/best-oil-massage-in-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/best-spa-massage-in-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/best-thai-massage-in-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/best-vellore-massage-centre-katpadi.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/best-vellore-spa-centre.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/best-vellore-body-massage-spa.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/body-massage-centre-in-katpadi.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/body-massage-spa-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/couple-massage-centre-katpadi.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/couple-massage-in-katpadi.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/couple-massage-in-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/couple-massage-spa-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/couple-massage-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/couple-spa-in-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/kerala-ayurvedic-massage-in-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/oil-massage-in-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/spa-massage-in-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/thai-massage-in-vellore.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/vellore-body-massage-spa.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/vellore-massage-centre-in-katpadi.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/vellore-massage-centre-katpadi.jpeg",
      "https://www.riverdayspa.com/assets/katpadi/vellore-spa-centre.jpeg"
    ]
  },
  {
    city: "Vellore-Bypass",
    folder: "vellore-bypass",
    images: [
      "https://www.riverdayspa.com/asset/vellore-bypass/ayurveda-body-massage-centre-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/ayurvedic-massage-in-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/best-ayurveda-body-massage-centre-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/best-ayurvedic-massage-in-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/best-luxury-spa-in-vellore.png",
      "https://www.riverdayspa.com/asset/vellore-bypass/best-massage-at-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/best-massage-center-in-vellore.png",
      "https://www.riverdayspa.com/asset/vellore-bypass/best-massage-spa-in-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/best-massage-spa-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/best-spa-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/best-swedish-massage-in-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/best-thai-massage-spa-in-vellore.png",
      "https://www.riverdayspa.com/asset/vellore-bypass/best-vellore-massage-spa.png",
      "https://www.riverdayspa.com/asset/vellore-bypass/best-vellore-massage-spa-center.png",
      "https://www.riverdayspa.com/asset/vellore-bypass/best-vellore-massage-spa-centre-in-bypass.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/couple-massage-in-vellore.png",
      "https://www.riverdayspa.com/asset/vellore-bypass/couple-massage-spa-centre-in-Vellore.png",
      "https://www.riverdayspa.com/asset/vellore-bypass/couple-spa-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/foot-massage-in-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/luxury-spa-in-vellore.png",
      "https://www.riverdayspa.com/asset/vellore-bypass/massage-at-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/massage-center-in-vellore.png",
      "https://www.riverdayspa.com/asset/vellore-bypass/moroccan-bath-massage-spa-in-vellore.png",
      "https://www.riverdayspa.com/asset/vellore-bypass/moroccan-bath-massage-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/moroccan-massage-spa-vellore.png",
      "https://www.riverdayspa.com/asset/vellore-bypass/swedish-massage-in-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/thai-massage-spa-in-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/top-spa-in-vellore.jpg",
      "https://www.riverdayspa.com/asset/vellore-bypass/vellore-massage-spa-centre.png"
    ]
  },
  {
    city: "Tirupur",
    folder: "Tirupur",
    images: [
      "https://www.riverdayspa.com/asset/Tirupur/bali-spa-in-tirupur.jpeg",
      "https://www.riverdayspa.com/asset/Tirupur/best-couple-massage-in-Tirupur.jpeg",
      "https://www.riverdayspa.com/asset/Tirupur/best-couple-massage-spa-in-Tirupur.jpeg",
      "https://www.riverdayspa.com/asset/Tirupur/best-luxury-spa-in-tirupur.jpeg",
      "https://www.riverdayspa.com/asset/Tirupur/couple-massage-centre-in-Tirupur.jpeg",
      "https://www.riverdayspa.com/asset/Tirupur/couple-massage-in-Tirupur.jpeg",
      "https://www.riverdayspa.com/asset/Tirupur/couple-spa-in-Tirupur.jpeg",
      "https://www.riverdayspa.com/asset/Tirupur/female-to-male-spa-in-tirupur.jpeg",
      "https://www.riverdayspa.com/asset/Tirupur/luxury-spa-in-tirupur.jpeg",
      "https://www.riverdayspa.com/asset/Tirupur/massage-centre-in-Tirupur.jpeg",
      "https://www.riverdayspa.com/asset/Tirupur/best-massage-spa-in-tirupur.jpeg"
    ]
  },
  {
    city: "Trichy",
    folder: "trichy",
    images: [
      "https://www.riverdayspa.com/asset/trichy/ayurveda-massage-in-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/ayurveda-massage-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/best-ayurveda-massage-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/best-body-massage-spa-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/best-body-spa-in-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/best-deep-tissue-massage-in-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/best-female-to-male-spa-in-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/best-foot-reflexology-in-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/best-massage-center-in-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/best-spa-center-in-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/body-spa-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/deep-tissue-massage-in-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/female-to-male-spa-in-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/foot-reflexology-in-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/massage-center-in-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/massage-center-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/spa-center-in-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/spa-center-trichy.jpeg",
      "https://www.riverdayspa.com/asset/trichy/trichy-spa-centre.jpeg"
    ]
  }
];

// Create directories
const createDirectories = () => {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'locations');

  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  galleryData.forEach(location => {
    const locationDir = path.join(baseDir, location.folder);
    if (!fs.existsSync(locationDir)) {
      fs.mkdirSync(locationDir, { recursive: true });
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
          console.log(`✅ Downloaded: ${path.basename(filepath)}`);
          resolve(filepath);
        });

        fileStream.on('error', (err) => {
          fs.unlink(filepath, () => { }); // Delete partial file
          reject(err);
        });
      } else {
        reject(new Error(`HTTP ${response.statusCode}: ${url}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

// Main download function
const downloadAllImages = async () => {
  console.log('🚀 Starting image download...');
  createDirectories();

  let totalImages = 0;
  let downloadedImages = 0;
  let failedImages = 0;

  for (const location of galleryData) {
    console.log(`\n📁 Processing ${location.city}...`);

    for (const imageUrl of location.images) {
      totalImages++;

      try {
        const filename = path.basename(imageUrl);
        const filepath = path.join(
          __dirname, '..', 'public', 'images', 'locations',
          location.folder, filename
        );

        // Skip if file already exists
        if (fs.existsSync(filepath)) {
          console.log(`⏭️  Skipped (exists): ${filename}`);
          continue;
        }

        await downloadImage(imageUrl, filepath);
        downloadedImages++;

        // Add small delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 100));

      } catch (error) {
        console.error(`❌ Failed to download ${imageUrl}: ${error.message}`);
        failedImages++;
      }
    }
  }

  console.log('\n📊 Download Summary:');
  console.log(`Total images: ${totalImages}`);
  console.log(`Downloaded: ${downloadedImages}`);
  console.log(`Failed: ${failedImages}`);
  console.log(`Success rate: ${((downloadedImages / totalImages) * 100).toFixed(1)}%`);
};

// Check image availability
const checkImageAvailability = async () => {
  console.log('🔍 Checking image availability...');

  const results = [];

  for (const location of galleryData) {
    for (const imageUrl of location.images) {
      try {
        const protocol = imageUrl.startsWith('https:') ? https : http;

        await new Promise((resolve, reject) => {
          const req = protocol.request(imageUrl, { method: 'HEAD' }, (res) => {
            results.push({
              url: imageUrl,
              status: res.statusCode,
              available: res.statusCode === 200,
              location: location.city
            });
            resolve();
          });

          req.on('error', (err) => {
            results.push({
              url: imageUrl,
              status: 0,
              available: false,
              error: err.message,
              location: location.city
            });
            resolve();
          });

          req.setTimeout(5000, () => {
            req.destroy();
            results.push({
              url: imageUrl,
              status: 0,
              available: false,
              error: 'Timeout',
              location: location.city
            });
            resolve();
          });

          req.end();
        });
      } catch (error) {
        results.push({
          url: imageUrl,
          status: 0,
          available: false,
          error: error.message,
          location: location.city
        });
      }
    }
  }

  // Generate report
  const availableImages = results.filter(r => r.available).length;
  const totalImages = results.length;

  console.log(`\n📊 Availability Report:`);
  console.log(`Available: ${availableImages}/${totalImages} (${((availableImages / totalImages) * 100).toFixed(1)}%)`);

  // Show failed images by location
  const failedByLocation = {};
  results.filter(r => !r.available).forEach(r => {
    if (!failedByLocation[r.location]) {
      failedByLocation[r.location] = [];
    }
    failedByLocation[r.location].push(r);
  });

  Object.keys(failedByLocation).forEach(location => {
    console.log(`\n❌ ${location}: ${failedByLocation[location].length} failed images`);
    failedByLocation[location].forEach(img => {
      console.log(`   - ${img.url} (${img.error || img.status})`);
    });
  });

  return results;
};

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'check':
    checkImageAvailability();
    break;
  case 'download':
    downloadAllImages();
    break;
  default:
    console.log('Usage:');
    console.log('  node download-images.js check    - Check image availability');
    console.log('  node download-images.js download - Download all images');
}