const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Image data taken from legacy wrap files (front1809/src/wraps/*_wrap.jsx)
const wrapImageData = {
    chocolate: {
        hero: {
            url: 'https://www.riverdayspa.com/assets/best-chocolate-wrap-massage.jpg',
            filename: 'best-chocolate-wrap-massage.jpg',
            alt: 'best-chocolate-wrap-massage'
        },
        content: {
            url: 'https://www.riverdayspa.com/assets/chocolate-wrap-massage-in-chennai.jpg',
            filename: 'chocolate-wrap-massage-in-chennai.jpg',
            alt: 'chocolate-wrap-massage-in-chennai'
        },
        background: {
            url: 'https://www.riverdayspa.com//assets/body-spa-in-tirupur.webp',
            filename: 'body-spa-in-tirupur.webp',
            alt: 'body-spa-in-tirupur'
        }
    },
    coffee: {
        hero: {
            url: 'https://www.riverdayspa.com/asset/coffee-wrap-body-massage-in-bangalore.jpg',
            filename: 'coffee-wrap-body-massage-in-bangalore.jpg',
            alt: 'coffee-wrap-body-massage-in-bangalore'
        },
        content: {
            url: 'https://www.riverdayspa.com/asset/best-body-wrap-massage-coimbatore.jpg',
            filename: 'best-body-wrap-massage-coimbatore.jpg',
            alt: 'best-body-wrap-massage-coimbatore'
        },
        background: {
            url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
            filename: 'body-spa-in-tirupur.webp',
            alt: 'body-spa-in-tirupur'
        }
    },
    mango: {
        hero: {
            url: 'https://www.riverdayspa.com/assets/best-mango-wrap-massage.webp',
            filename: 'best-mango-wrap-massage.webp',
            alt: 'best-mango-wrap-massage'
        },
        content: {
            url: 'https://www.riverdayspa.com/asset/mango-wrap-massage-in-coimbatore.webp',
            filename: 'mango-wrap-massage-in-coimbatore.webp',
            alt: 'mango-wrap-massage-in-coimbatore'
        },
        background: {
            url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
            filename: 'body-spa-in-tirupur.webp',
            alt: 'body-spa-in-tirupur'
        }
    },
    papaya: {
        hero: {
            url: 'https://www.riverdayspa.com/asset/best-papaya-wrap-massage-chennai.jpg',
            filename: 'best-papaya-wrap-massage-chennai.jpg',
            alt: 'best-papaya-wrap-massage-chennai'
        },
        content: {
            url: 'https://www.riverdayspa.com/asset/papaya-wrap-massage-in-bangalore.jpg',
            filename: 'papaya-wrap-massage-in-bangalore.jpg',
            alt: 'papaya-wrap-massage-in-bangalore'
        },
        background: {
            url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
            filename: 'body-spa-in-tirupur.webp',
            alt: 'body-spa-in-tirupur'
        }
    }
    ,
    raspberry: {
        hero: {
            url: 'https://www.riverdayspa.com/asset/best-raspberry-massage-centre-in-chennai.webp',
            filename: 'best-raspberry-massage-centre-in-chennai.webp',
            alt: 'best-raspberry-massage-centre-in-chennai'
        },
        content: {
            url: 'https://www.riverdayspa.com/asset/raspberry-body-massage-in-coimbatore.jpg',
            filename: 'raspberry-body-massage-in-coimbatore.jpg',
            alt: 'raspberry-body-massage-in-coimbatore'
        },
        background: {
            url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
            filename: 'body-spa-in-tirupur.webp',
            alt: 'body-spa-in-tirupur'
        }
    },
    body: {
        hero: {
            url: 'https://www.riverdayspa.com/asset/body-wrap-massage-in-chennai.jpg',
            filename: 'body-wrap-massage-in-chennai.jpg',
            alt: 'body-wrap-massage-in-chennai'
        },
        content: {
            url: 'https://www.riverdayspa.com/asset/body-wrap-massage-in-bangalore.jpg',
            filename: 'body-wrap-massage-in-bangalore.jpg',
            alt: 'body-wrap-massage-in-bangalore'
        },
        background: {
            url: 'https://www.riverdayspa.com/assets/body-spa-in-tirupur.webp',
            filename: 'body-spa-in-tirupur.webp',
            alt: 'body-spa-in-tirupur'
        }
    }
};

// Root folder (project root)
const ROOT = path.join(__dirname, '..');

// Create base directory at project root
const createDirectories = () => {
    const baseDir = path.join(ROOT, 'public', 'images', 'wraps');
    if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir, { recursive: true });
        console.log(`Created directory: ${path.relative(ROOT, baseDir)}`);
    }
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
                    fs.unlink(filepath, () => { });
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

// Download all images for wraps
const downloadAllImages = async () => {
    console.log('Starting wrap image downloads...');
    createDirectories();

    for (const [wrapType, images] of Object.entries(wrapImageData)) {
        const wrapDir = path.join(ROOT, 'public', 'images', 'wraps', wrapType);
        if (!fs.existsSync(wrapDir)) {
            fs.mkdirSync(wrapDir, { recursive: true });
            console.log(`Created directory: ${path.relative(ROOT, wrapDir)}`);
        }

        console.log(`\nDownloading ${wrapType} wrap images...`);

        for (const [imageType, imageData] of Object.entries(images)) {
            const filepath = path.join(wrapDir, imageData.filename);

            try {
                // skip if exists
                if (fs.existsSync(filepath)) {
                    console.log(`Skipped (exists): ${path.relative(ROOT, filepath)}`);
                    continue;
                }

                await downloadImage(imageData.url, filepath);
                // small delay
                await new Promise(res => setTimeout(res, 100));
            } catch (error) {
                console.error(`Error downloading ${imageData.url}:`, error.message);
            }
        }
    }
};

// Generate data files for each wrap type at src/data/<wrap>WrapImageData.ts
const generateDataFiles = () => {
    console.log('\nGenerating wrap data files...');

    const dataDir = path.join(ROOT, 'src', 'data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
        console.log(`Created directory: ${path.relative(ROOT, dataDir)}`);
    }

    for (const [wrapType, images] of Object.entries(wrapImageData)) {
        const varName = `${wrapType}WrapImageData`;
        const content = `// ${wrapType} wrap image data with local paths\nexport const ${varName} = {\n    hero: {\n        src: "/images/wraps/${wrapType}/${images.hero.filename}",\n        alt: "${images.hero.alt}"\n    },\n    content: {\n        src: "/images/wraps/${wrapType}/${images.content.filename}",\n        alt: "${images.content.alt}"\n    },\n    background: {\n        src: "/images/wraps/${wrapType}/${images.background.filename}",\n        alt: "${images.background.alt}"\n    }\n};\n`;

        const dataFilePath = path.join(dataDir, `${wrapType}WrapImageData.ts`);
        fs.writeFileSync(dataFilePath, content);
        console.log(`Generated data file: ${path.relative(ROOT, dataFilePath)}`);
    }
};

// Main
const main = async () => {
    try {
        await downloadAllImages();
        generateDataFiles();
        console.log('\n✅ Wrap images downloaded and data files generated successfully!');
        console.log('\nNext steps:');
        console.log('1. Update Coffee/Mango/Papaya wrap pages to import the generated data files and use CustomImage (similar to ChocolateBodyWrapPage).');
    } catch (error) {
        console.error('Error:', error);
    }
};

main();
