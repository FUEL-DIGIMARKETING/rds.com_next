# 🚀 Quick Cloudinary Setup for Production

## 1. Create Free Cloudinary Account
- Go to https://cloudinary.com/
- Sign up for free account
- Get your credentials from dashboard

## 2. Add Environment Variables
```bash
# Add to .env.local
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key  
CLOUDINARY_API_SECRET=your_api_secret
```

## 3. Create Upload Preset
- Go to Cloudinary Dashboard → Settings → Upload
- Create new upload preset named: `blog_images`
- Set to "Unsigned" for easier setup

## 4. Deploy
- Your images will now work in production!
- Images stored on Cloudinary CDN (fast & reliable)

## Alternative: Use Existing Backend
If you want to keep using your existing backend at api.riverdayspa.com:
- Upload images to your backend server
- Store files in backend's file system
- Return full URLs from backend