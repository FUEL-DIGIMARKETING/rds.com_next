# 🚀 VPS Deployment Guide - Hostinger

## ✅ Your Setup Will Work!

Your Hostinger VPS supports file uploads perfectly:
- **Full filesystem access** ✅
- **400GB storage** ✅  
- **Root access** ✅
- **Ubuntu 24.04** ✅

## 📁 File Storage Workflow

### Development:
```
Upload → public/uploads/blogs/2025/11/image.webp
Access → http://localhost:3000/uploads/blogs/2025/11/image.webp
```

### Production (VPS):
```
Upload → /var/www/your-app/public/uploads/blogs/2025/11/image.webp
Access → https://yourdomain.com/uploads/blogs/2025/11/image.webp
```

## 🛠️ Deployment Steps

1. **Upload your Next.js app to VPS**
2. **Install dependencies**: `npm install`
3. **Build**: `npm run build`
4. **Start**: `npm start` or use PM2
5. **Configure nginx** to serve static files from `/uploads/`

## 📂 Directory Structure on VPS
```
/var/www/riverdayspa/
├── public/
│   └── uploads/
│       └── blogs/
│           └── 2025/
│               └── 11/
│                   └── your-images.webp
├── .next/
└── package.json
```

## 🔧 Nginx Configuration
Add to your nginx config:
```nginx
location /uploads/ {
    alias /var/www/riverdayspa/public/uploads/;
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## ⚡ Performance Tips
- Images automatically converted to WebP ✅
- Clean URLs without timestamps ✅
- Proper caching headers ✅
- 400GB storage available ✅

Your current workflow will work perfectly on VPS!