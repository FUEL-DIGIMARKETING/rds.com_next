// Image utility functions for better image management
export const getImageUrl = (imagePath: string): string => {
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }

  // For local images, ensure they start with /
  return imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
};

export const getFallbackImage = (): string => {
  return '/images/best-spa-in-chennai-river-day-spa.webp';
};

// Image preloader to check if image exists
export const preloadImage = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

// Enhanced error handler for images
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackUrl?: string
) => {
  const target = event.target as HTMLImageElement;
  const currentSrc = target.src;

  // If already using fallback, don't retry
  if (currentSrc === getFallbackImage()) {
    return;
  }

  // Try custom fallback first, then default
  target.src = fallbackUrl || getFallbackImage();
};

// Optimize image loading with Next.js Image component props
export const getImageProps = (src: string, alt: string) => ({
  src: getImageUrl(src),
  alt,
  loading: 'lazy' as const,
  quality: 85,
  placeholder: 'blur' as const,
  blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
});