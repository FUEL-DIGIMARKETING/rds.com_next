# Blog Workflow Test Checklist

## Pre-Production Testing Steps

### 1. Test Image Upload in Blog Creation
- [ ] Go to `/admin-dashboard/blog/create`
- [ ] Upload a featured image (test with different formats: JPG, PNG, WebP)
- [ ] Add images in TinyMCE content using the image button
- [ ] Save as draft and verify images display correctly
- [ ] Publish and check if images still work

### 2. Test Image Upload in Blog Editing
- [ ] Edit an existing blog post
- [ ] Change featured image
- [ ] Add/modify images in content
- [ ] Save and verify all images display

### 3. Test Image URLs and Paths
- [ ] Check browser Network tab during upload
- [ ] Verify URLs are clean (no timestamps)
- [ ] Check if images load directly via URL
- [ ] Test image URLs in incognito mode

### 4. Test File System Structure
- [ ] Check `public/uploads/blogs/YYYY/MM/` directory exists
- [ ] Verify files are saved with clean names
- [ ] Confirm WebP conversion is working

### 5. Test Blog Display
- [ ] View published blog on frontend
- [ ] Check if all images display correctly
- [ ] Test on different devices/browsers
- [ ] Verify image alt text and SEO

### 6. Test Error Scenarios
- [ ] Try uploading without authentication
- [ ] Upload oversized files
- [ ] Upload invalid file types
- [ ] Test with slow internet connection

## Production Readiness Indicators
✅ All images upload successfully
✅ Clean URLs generated
✅ Images display on frontend
✅ File system structure correct
✅ Error handling works
✅ Performance is acceptable