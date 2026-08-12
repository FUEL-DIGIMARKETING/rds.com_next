const fs = require('fs');
const path = require('path');

// Generate gallery data with local paths
const generateLocalGalleryData = () => {
  const locationsDir = path.join(__dirname, '..', 'public', 'images', 'locations');
  const galleryData = [];

  const locationMappings = {
    'chennai': 'Chennai',
    'coimbatore-elite': 'Coimbatore - RS Puram, Elite',
    'coimbatore-rspuram': 'Coimbatore - RS Puram',
    'bangalore': 'Bangalore',
    'vellore-tollgate': 'Vellore-Tollgate',
    'vellore-katpadi': 'Vellore-Katpadi',
    'vellore-bypass': 'Vellore-Bypass',
    'Tirupur': 'Tirupur',
    'trichy': 'Trichy',
    'trichy-rayapuram': 'Trichy-Rayapuram'
  };

  // Read each location folder
  Object.keys(locationMappings).forEach(folder => {
    const folderPath = path.join(locationsDir, folder);

    if (fs.existsSync(folderPath)) {
      const files = fs.readdirSync(folderPath)
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .map(file => `/images/locations/${folder}/${file}`);

      if (files.length > 0) {
        galleryData.push({
          city: locationMappings[folder],
          images: files
        });
      }
    }
  });

  return galleryData;
};

// Generate TypeScript/JavaScript code
const generateGalleryCode = () => {
  const galleryData = generateLocalGalleryData();

  let code = 'const galleryData = [\n';

  galleryData.forEach((location, index) => {
    code += `  {\n`;
    code += `    city: "${location.city}",\n`;
    code += `    images: [\n`;

    location.images.forEach(image => {
      code += `      "${image}",\n`;
    });

    code += `    ],\n`;
    code += `  }`;

    if (index < galleryData.length - 1) {
      code += ',';
    }
    code += '\n';
  });

  code += '];\n\nexport default galleryData;';

  return code;
};

// Save to file
const saveGalleryData = () => {
  const code = generateGalleryCode();
  const outputPath = path.join(__dirname, '..', 'src', 'data', 'galleryData.ts');

  // Create data directory if it doesn't exist
  const dataDir = path.dirname(outputPath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, code);
  console.log('✅ Gallery data generated at:', outputPath);
  console.log('📊 Total locations:', generateLocalGalleryData().length);
};

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'generate':
    saveGalleryData();
    break;
  case 'preview':
    console.log(generateGalleryCode());
    break;
  default:
    console.log('Usage:');
    console.log('  node generate-local-gallery.js generate - Generate gallery data file');
    console.log('  node generate-local-gallery.js preview  - Preview generated code');
}