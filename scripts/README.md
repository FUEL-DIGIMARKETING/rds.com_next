# Image Download Scripts

This directory contains scripts to download and organize images for different pages of the River Day Spa website.

## Available Scripts

### 1. `download-about-images.js`
Downloads images specifically for the About page.

```bash
# Download About page images
node scripts/download-about-images.js download
```

### 2. `download-page-images.js`
Universal script that can handle multiple pages.

```bash
# Download images for a specific page
node scripts/download-page-images.js download about

# Download images for all pages
node scripts/download-page-images.js download

# List available pages
node scripts/download-page-images.js list
```

### 3. `download-images.js`
Downloads gallery images organized by location.

```bash
# Check image availability
node scripts/download-images.js check

# Download all gallery images
node scripts/download-images.js download
```

## Directory Structure

After running the scripts, images will be organized as follows:

```
public/
├── images/
│   ├── about/
│   │   ├── head-massage-in-chennai.webp
│   │   ├── bangalore-spa-center.webp
│   │   └── ...
│   ├── locations/
│   │   ├── chennai/
│   │   ├── bangalore/
│   │   ├── coimbatore-elite/
│   │   └── ...
│   └── [other-pages]/
```

## Image URL Handling

### Problem
Next.js optimized images show URLs like:
```
http://localhost:3000/_next/image?url=https%3A%2F%2Fwww.riverdayspa.com%2Fassets%2Fbangalore-spa-center.webp&w=1200&q=75
```

### Solution
Using local images with the `CustomImage` component provides clean URLs:
```
https://www.riverdayspa.com/images/about/bangalore-spa-center.webp
```

## Usage in Components

### 1. Import the image data
```typescript
import { aboutImageData } from '../data/aboutImageData'
```

### 2. Use CustomImage component
```tsx
import CustomImage from './CustomImage'

<CustomImage
  src={aboutImageData.mainImage.src}
  alt={aboutImageData.mainImage.alt}
  width={600}
  height={400}
  className="rounded-3xl shadow-xl"
  priority
/>
```

## Adding New Pages

To add a new page to the download system:

1. **Update `download-page-images.js`**:
   ```javascript
   const pageConfigs = {
     // ... existing configs
     newpage: {
       folder: 'newpage',
       images: [
         {
           url: "https://www.riverdayspa.com/assets/image.jpg",
           filename: "image.jpg",
           alt: "Image description"
         }
       ]
     }
   }
   ```

2. **Run the download script**:
   ```bash
   node scripts/download-page-images.js download newpage
   ```

3. **Update your component**:
   ```tsx
   import { newpageImageData } from '../data/newpageImageData'
   import CustomImage from './CustomImage'
   
   <CustomImage
     src={newpageImageData.images[0].src}
     alt={newpageImageData.images[0].alt}
     width={600}
     height={400}
   />
   ```

## Benefits

1. **Performance**: Local images load faster
2. **SEO**: Clean, readable URLs
3. **Control**: Full control over image optimization
4. **Reliability**: No dependency on external image availability
5. **Caching**: Better browser caching for local images

## Notes

- Images are downloaded only if they don't already exist
- Failed downloads are logged with error details
- The script includes a small delay between downloads to avoid overwhelming the server
- All generated data files are TypeScript compatible
- The CustomImage component automatically handles local vs external images