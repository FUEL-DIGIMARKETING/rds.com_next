// Image URL mapper for service images
export const getLocalImagePath = (remoteUrl: string): string => {
  // Return local path if it's already a local path
  if (remoteUrl.startsWith('/images/') || remoteUrl.startsWith('./images/')) {
    return remoteUrl;
  }

  // Map of remote URLs to local paths
  const imageMap: Record<string, string> = {
    // Body Massage Images
    'https://www.riverdayspa.com/services/best-head-massage-chennai.jpg': '/images/services/body-massage/swedish-massage.jpg',
    'https://www.riverdayspa.com/asset/deep-tissue-massage-chennai.jpg': '/images/services/body-massage/deep-tissue-massage.jpg',
    'https://www.riverdayspa.com/asset/balinese-massage-bangalore.jpg': '/images/services/body-massage/balinese-massage.jpg',
    'https://www.riverdayspa.com/asset/best-thai-massage-in-chennai.jpeg': '/images/services/body-massage/thai-massage.jpg',
    'https://www.riverdayspa.com/asset/best-thai-massage-in-chennai.jpg': '/images/services/body-massage/thai-massage.jpg',
    'https://www.riverdayspa.com/assets/best-moroccan-bath-massage-in-vellore.jpeg': '/images/services/body-massage/moroccan-bath-massage.jpg',
    'https://www.riverdayspa.com/asset/head-massage-chennai.jpg': '/images/services/body-massage/head-to-toe-aroma-massage.jpg',
    'https://www.riverdayspa.com/asset/bali-spa-in-trichy.jpg': '/images/services/body-massage/sense-of-siam-massage.jpg',
    'https://www.riverdayspa.com/asset/sports-massage-in-chennai.jpg': '/images/services/body-massage/sports-massage.jpg',
    'https://www.riverdayspa.com/asset/oil-massage-centre-coimbatore.jpg': '/images/services/body-massage/abhyanga-ayurvedic-massage.jpg',
    'https://www.riverdayspa.com/asset/best-massage-spa-in-tirupur.jpg': '/images/services/body-massage/synchronized-massage.jpg',
    'https://www.riverdayspa.com/asset/foot-reflexology-in-coimbatore.jpg': '/images/services/body-massage/foot-reflexology-massage.jpg',

    // Partial Massage Images
    'https://www.riverdayspa.com/services/head-massage-chennai.jpg': '/images/services/partial-massage/head-massage.jpg',
    'https://www.riverdayspa.com/asset/back-massage-chennai.jpg': '/images/services/partial-massage/back-massage.jpg',
    'https://www.riverdayspa.com/asset/foot-massage-chennai.jpg': '/images/services/partial-massage/foot-massage.jpg',

    // Body Scrub Images
    'https://www.riverdayspa.com/asset/best-chocolate-body-scrub-massage-chennai.jpg': '/images/services/body-scrub/chocolate-scrub.jpg',
    'https://www.riverdayspa.com/asset/best-coffee-body-scrub-massage-bangalore.jpg': '/images/services/body-scrub/coffee-scrub.jpg',
    'https://www.riverdayspa.com/asset/best-fruit-body-scrub-massage.jpeg': '/images/services/body-scrub/fruit-scrub.jpg',
    'https://www.riverdayspa.com/asset/best-lemongrass-body-scrub-massage.jpg': '/images/services/body-scrub/lemon-grass-scrub.jpg',
    'https://www.riverdayspa.com/asset/best-sea-salt-body-scrub-massage.jpg': '/images/services/body-scrub/sea-salt-scrub.jpg',

    // Body Wrap Images
    'https://www.riverdayspa.com/asset/coffee-wrap-body-massage-in-bangalore.jpg': '/images/services/body-wrap/coffee-wrap.jpg',
    'https://www.riverdayspa.com/assets/best-mango-wrap-massage.webp': '/images/services/body-wrap/mango-wrap.jpg',
    'https://www.riverdayspa.com/asset/best-papaya-wrap-massage-chennai.jpg': '/images/services/body-wrap/papaya-wrap.jpg',
    'https://www.riverdayspa.com/asset/best-raspberry-massage-centre-in-chennai.webp': '/images/services/body-wrap/raspberry-wrap.jpg',

    // Package Images (fallback to spa package image)
    'https://www.riverdayspa.com/services/spa-package.jpg': '/images/services/packages/spa-package.jpg',
    'https://www.riverdayspa.com/asset/spa-package.jpg': '/images/services/packages/spa-package.jpg',

    // Gift Card Images
    'https://www.riverdayspa.com/services/gift-card.jpg': '/images/services/gift-cards/gift-card.jpg',
    'https://www.riverdayspa.com/asset/gift-card.jpg': '/images/services/gift-cards/gift-card.jpg',

    // Default fallback for any missing mappings
    'default': '/images/services/body-massage/swedish-massage.jpg'
  };

  // Return local path if exact mapping exists
  if (imageMap[remoteUrl]) {
    return imageMap[remoteUrl];
  }

  // Pattern matching for common service names
  const url = remoteUrl.toLowerCase();
  
  // Body massage patterns
  if (url.includes('swedish')) return '/images/services/body-massage/swedish-massage.jpg';
  if (url.includes('deep-tissue')) return '/images/services/body-massage/deep-tissue-massage.jpg';
  if (url.includes('balinese')) return '/images/services/body-massage/balinese-massage.jpg';
  if (url.includes('thai')) return '/images/services/body-massage/thai-massage.jpg';
  if (url.includes('moroccan')) return '/images/services/body-massage/moroccan-bath-massage.jpg';
  if (url.includes('head-massage') || url.includes('aroma')) return '/images/services/body-massage/head-to-toe-aroma-massage.jpg';
  if (url.includes('siam')) return '/images/services/body-massage/sense-of-siam-massage.jpg';
  if (url.includes('sports')) return '/images/services/body-massage/sports-massage.jpg';
  if (url.includes('ayurvedic') || url.includes('abhyanga')) return '/images/services/body-massage/abhyanga-ayurvedic-massage.jpg';
  if (url.includes('synchronized')) return '/images/services/body-massage/synchronized-massage.jpg';
  if (url.includes('reflexology') || url.includes('foot')) return '/images/services/body-massage/foot-reflexology-massage.jpg';
  
  // Body scrub patterns
  if (url.includes('chocolate') && url.includes('scrub')) return '/images/services/body-scrub/chocolate-scrub.jpg';
  if (url.includes('coffee') && url.includes('scrub')) return '/images/services/body-scrub/coffee-scrub.jpg';
  if (url.includes('fruit') && url.includes('scrub')) return '/images/services/body-scrub/fruit-scrub.jpg';
  if (url.includes('lemon') && url.includes('scrub')) return '/images/services/body-scrub/lemon-grass-scrub.jpg';
  if (url.includes('sea-salt') && url.includes('scrub')) return '/images/services/body-scrub/sea-salt-scrub.jpg';
  
  // Body wrap patterns
  if (url.includes('chocolate') && url.includes('wrap')) return '/images/services/body-wrap/chocolate-wrap.jpg';
  if (url.includes('coffee') && url.includes('wrap')) return '/images/services/body-wrap/coffee-wrap.jpg';
  if (url.includes('mango') && url.includes('wrap')) return '/images/services/body-wrap/mango-wrap.jpg';
  if (url.includes('papaya') && url.includes('wrap')) return '/images/services/body-wrap/papaya-wrap.jpg';
  if (url.includes('raspberry') && url.includes('wrap')) return '/images/services/body-wrap/raspberry-wrap.jpg';
  
  // Partial massage patterns
  if (url.includes('head') && !url.includes('wrap') && !url.includes('scrub')) return '/images/services/partial-massage/head-massage.jpg';
  if (url.includes('back') && !url.includes('wrap') && !url.includes('scrub')) return '/images/services/partial-massage/back-massage.jpg';
  
  // Package patterns
  if (url.includes('package')) return '/images/services/packages/spa-package.jpg';
  
  // Gift card patterns
  if (url.includes('gift')) return '/images/services/gift-cards/gift-card.jpg';
  
  // Default fallback
  return imageMap['default'];
};

export default getLocalImagePath;