// Enhanced service image matcher with comprehensive mapping
export const getServiceImage = (serviceName: string): string => {
  const name = serviceName.toLowerCase().trim();

  // Exact service name mappings first
  const exactMatches: Record<string, string> = {
    // Body Massage Services
    'swedish massage': '/images/services/best-swedish-massage-chennai.jpg',
    'deep tissue massage': '/images/services/best-deep-tissue-massage-river-day-spa.webp',
    'balinese massage': '/images/services/best-balinese-massage-river-day-spa.webp',
    'thai body massage': '/images/services/best-thai-body-massage-river-day-spa.webp',
    'thai massage': '/images/services/best-thai-body-massage-river-day-spa.webp',
    'moroccan bath': '/images/services/best-morroccan-massage-in-vellore.webp',
    'ayurvedic massage': '/images/services/best-ayurvedic-massage.webp',
    'abhyanga massage': '/images/services/best-abhyanga-body-massage-therapy-services-center-chennai.jpg',
    'head to toe aroma massage': '/images/services/best-head-massage-chennai.jpg',
    'sense of siam massage': '/images/services/best-sense-of-siam-massage-river-day-spa.webp',
    'detoxifying massage': '/images/services/best-detoxifying-massage-river-day-spa.webp',
    'sports massage': '/images/services/best-sports-massage-river-day-spa.webp',
    'synchronized massage': '/images/services/best-body-massage-spa-thearpy-services-center-trichy.jpg',
    'foot reflexology': '/images/services/best-foot-reflexology-massage-river-day-spa.webp',
    'couple massage': '/images/services/couple-massage-in-chennai.webp',

    // Partial Massage Services
    'head massage': '/images/services/head-massage-chennai.jpg',
    'back massage': '/images/services/best-body-massage-bangalore.webp',
    'foot massage': '/images/services/foot-reflexology-in-trichy.webp',

    // Body Scrub Services
    'chocolate scrub': '/images/services/chocolate-body-scrub-massage-river-day-spa.webp',
    'coffee scrub': '/images/services/coffee-scrub-massage-package-river-day-spa.webp',
    'fruit scrub': '/images/services/best-fruit-body-scrub-massage-river-day-spa.webp',
    'lemongrass scrub': '/images/services/lemongrass-scrub-body-massage-package-river-day-spa.webp',
    'sea salt scrub': '/images/services/best-sea-salt-body-scrub-massage-river-day-spa.webp',

    // Body Wrap Services
    'chocolate wrap': '/images/services/best-chocolate-wrap-body-massage-river-day-spa.webp',
    'coffee wrap': '/images/services/best-coffee-wrap-body-massage-river-day-spa.webp',
    'mango wrap': '/images/services/best-mango-wrap-body-massage-river-day-spa.jpg',
    'papaya wrap': '/images/services/best-papaya-wrap-body-massage-river-day-spa.webp',
    'raspberry wrap': '/images/services/best-raspberry-body-wraps-massage-spa-therapy-services-center-chennai.webp',

    // Package Services
    'silver membership': '/images/services/silver-membership-packages-6hrs.jpg',
    'gold membership': '/images/services/gold-membership-packages-15hrs.jpg',
    'platinum membership': '/images/services/platinum-membership-packages-50hrs.jpg',
    'diamond membership': '/images/services/diamond-membership-packages-35hrs.jpg',
    'couple spa package': '/images/services/couple-massage-spa-bangalore.webp',
    'bridal package': '/images/services/beautiful-young-woman-spa-salon.webp',

    // Single Packages
    'river signature - 6 hrs': '/images/services/best-body-massage-bangalore.webp',
    'river treat - 4 hrs': '/images/services/best-body-wraps-massage-spa-services-center-tirupur.jpg',
    'river special - 2 hrs': '/images/services/body-spa-in-bangalore.webp',

    // Couple Packages
    'river blissful (4 hrs)': '/images/services/couple-massage-spa-bangalore.webp',
    'river fantasy (2 hrs)': '/images/services/best-couple-massage-bangalore.webp',
    'river ectasy (60 mins)': '/images/services/couple-massage-in-chennai.webp',

    // Membership Packages
    'platinum (50 hrs)': '/images/services/platinum-membership-packages-50hrs.jpg',
    'diamond (35 hrs)': '/images/services/diamond-membership-packages-35hrs.jpg',
    'gold (15 hrs)': '/images/services/gold-membership-packages-15hrs.jpg',
    'silver (6 hrs)': '/images/services/silver-membership-packages-6hrs.jpg',

    // Partial Massage Services - Specific
    'back, shoulder, neck massage (45 mins)': '/images/services/body-massage-centre-coimbatore.webp',
    'head, shoulder, neck massage (45 mins)': '/images/services/head-massage-in-coimbatore.webp',
    'foot massage (30 mins)': '/images/services/foot-reflexology-in-trichy.webp',
    'mughalepam (30 mins)': '/images/services/head-massage-in-chennai.webp',
    'back massage (30 mins)': '/images/services/vellore-body-massage-centre.webp',
    'head massage (30 mins)': '/images/services/best-head-massage-chennai.webp',

    // Gift Card Services - Birthday
    '3x90 minutes package + steam': '/images/services/BIRTHDAY-GIFT-CARD-3x90-Minutes-Package-Steam.png',
    '2x90 minutes package + steam': '/images/services/BIRTHDAY-GIFT-CARD-2x90-Minutes-Package-Steam.png',
    '2x60 minutes package + steam': '/images/services/BIRTHDAY-GIFT-CARD-2x60-Minutes-Package-Steam.png',
    'any 60 minutes package + steam': '/images/services/BIRTHDAY-GIFT-CARD-Any-60-Minutes-Package-Steam.png',

    // Gift Card Services - Festival
    '5x90 minutes package+steam - festival gift card': '/images/services/FESTIVAL-GIFT-CARD-5x90-Minutes-Package-Steam.png',
    '3x90 minutes package+steam - festival gift card': '/images/services/FESTIVAL-GIFT-CARD-3x90-Minutes-Package-Steam.png',
    '2x90 minutes package+steam - festival gift card': '/images/services/FESTIVAL-GIFT-CARD-2x90-Minutes-Package-Steam.png',
    '2x60 minutes package+steam - festival gift card': '/images/services/FESTIVAL-GIFT-CARD-2x60-Minutes-Package-Steam.png',
    'any 60 minutes package+steam - festival gift card': '/images/services/FESTIVAL-GIFT-CARD-Any-60-Minutes-Package-Steam.png',

    // Gift Card Services - Congratulations
    '5x90 minutes package+steam - congratulations gift card': '/images/services/CONGRATULATIONS-GIFT-CARD-5x90-Minutes-Package-Steam.png',
    '3x90 minutes package+steam - congratulations gift card': '/images/services/CONGRATULATIONS-GIFT-CARD-3x90-Minutes-Package-Steam.png',
    '2x90 minutes package+steam - congratulations gift card': '/images/services/CONGRATULATIONS-GIFT-CARD-2x90-Minutes-Package-Steam.png',
    '2x60 minutes package+steam - congratulations gift card': '/images/services/CONGRATULATIONS-GIFT-CARD-2x60-Minutes-Package-Steam.png',

    // Gift Card Services - Surprise
    '5x90 minutes package+steam - surprise gift card': '/images/services/SURPRISE-GIFT-CARD-5x90-Minutes-Package-Steam.png',
    '3x90 minutes package+steam - surprise gift card': '/images/services/SURPRISE-GIFT-CARD-3x90-Minutes-Package-Steam.png',
    '2x90 minutes package+steam - surprise gift card': '/images/services/SURPRISE-GIFT-CARD-2x90-Minutes-Package-Steam.png',
    '2x60 minutes package+steam - surprise gift card': '/images/services/SURPRISE-GIFT-CARD-2x60-Minutes-Package-Steam.png',
    'any 60 minutes package+steam - surprise gift card': '/images/services/SURPRISE-GIFT-CARD-Any-60-Minutes-Package-Steam.png',

    // Gift Card Services - Anniversary
    '3x90mins package for couple +steam & jacuzzi': '/images/services/3x90mins-package-for-couple-Steam-Jacuzzi-ANNIVERSARY-GIFT-CARD.png',
    '2x90mins package for couple +steam & jacuzzi': '/images/services/2x90mins-package-for-couple-Steam-Jacuzzi-ANNIVERSARY-GIFT-CARD.png',
    '1x90mins package for couple +steam & jacuzzi': '/images/services/1x90mins-package-for-couple-Steam-Jacuzzi-ANNIVERSARY-GIFT-CARD.png',
    '1x60mins package for couple +steam & jacuzzi': '/images/services/1x60mins-package-for-couple-Steam-Jacuzzi-ANNIVERSARY-GIFT-CARD.png'
  };

  // Check for exact matches first
  if (exactMatches[name]) {
    return exactMatches[name];
  }

  // Fallback to keyword matching for variations
  if (name.includes('swedish')) return '/images/services/best-swedish-massage-chennai.jpg';
  if (name.includes('deep tissue')) return '/images/services/best-deep-tissue-massage-river-day-spa.webp';
  if (name.includes('balinese')) return '/images/services/best-balinese-massage-river-day-spa.webp';
  if (name.includes('thai')) return '/images/services/best-thai-body-massage-river-day-spa.webp';
  if (name.includes('moroccan')) return '/images/services/best-morroccan-massage-in-vellore.webp';
  if (name.includes('ayurvedic') || name.includes('abhyanga')) return '/images/services/best-abhyanga-body-massage-therapy-services-center-chennai.jpg';
  if (name.includes('aroma') || (name.includes('head') && name.includes('toe'))) return '/images/services/best-head-massage-chennai.jpg';
  if (name.includes('siam')) return '/images/services/best-sense-of-siam-massage-river-day-spa.webp';
  if (name.includes('detox')) return '/images/services/best-detoxifying-massage-river-day-spa.webp';
  if (name.includes('sports')) return '/images/services/best-sports-massage-river-day-spa.webp';
  if (name.includes('synchronized')) return '/images/services/best-body-massage-spa-thearpy-services-center-trichy.jpg';
  if (name.includes('reflexology') || (name.includes('foot') && !name.includes('wrap') && !name.includes('scrub'))) return '/images/services/best-foot-reflexology-massage-river-day-spa.webp';
  if (name.includes('couple')) return '/images/services/couple-massage-in-chennai.webp';

  // Partial massage services
  if (name.includes('head') && !name.includes('wrap') && !name.includes('scrub') && !name.includes('toe')) return '/images/services/head-massage-chennai.jpg';
  if (name.includes('back')) return '/images/services/best-body-massage-bangalore.webp';
  if (name.includes('foot') && !name.includes('reflexology')) return '/images/services/foot-reflexology-in-trichy.webp';

  // Body scrub services
  if (name.includes('chocolate') && name.includes('scrub')) return '/images/services/chocolate-body-scrub-massage-river-day-spa.webp';
  if (name.includes('coffee') && name.includes('scrub')) return '/images/services/coffee-scrub-massage-package-river-day-spa.webp';
  if (name.includes('fruit') && name.includes('scrub')) return '/images/services/best-fruit-body-scrub-massage-river-day-spa.webp';
  if (name.includes('lemon') && name.includes('scrub')) return '/images/services/lemongrass-scrub-body-massage-package-river-day-spa.webp';
  if (name.includes('sea salt') && name.includes('scrub')) return '/images/services/best-sea-salt-body-scrub-massage-river-day-spa.webp';

  // Body wrap services
  if (name.includes('chocolate') && name.includes('wrap')) return '/images/services/best-chocolate-wrap-body-massage-river-day-spa.webp';
  if (name.includes('coffee') && name.includes('wrap')) return '/images/services/best-coffee-wrap-body-massage-river-day-spa.webp';
  if (name.includes('mango') && name.includes('wrap')) return '/images/services/best-mango-wrap-body-massage-river-day-spa.jpg';
  if (name.includes('papaya') && name.includes('wrap')) return '/images/services/best-papaya-wrap-body-massage-river-day-spa.webp';
  if (name.includes('raspberry') && name.includes('wrap')) return '/images/services/best-raspberry-body-wraps-massage-spa-therapy-services-center-chennai.webp';

  // Single Packages
  if (name.includes('river signature')) return '/images/services/best-body-massage-bangalore.webp';
  if (name.includes('river treat')) return '/images/services/best-body-wraps-massage-spa-services-center-tirupur.jpg';
  if (name.includes('river special')) return '/images/services/body-spa-in-bangalore.webp';

  // Couple Packages
  if (name.includes('river blissful')) return '/images/services/couple-massage-spa-bangalore.webp';
  if (name.includes('river fantasy')) return '/images/services/best-couple-massage-bangalore.webp';
  if (name.includes('river ectasy')) return '/images/services/couple-massage-in-chennai.webp';

  // Membership Packages
  if (name.includes('platinum') && name.includes('hrs')) return '/images/services/platinum-membership-packages-50hrs.jpg';
  if (name.includes('diamond') && name.includes('hrs')) return '/images/services/diamond-membership-packages-35hrs.jpg';
  if (name.includes('gold') && name.includes('hrs')) return '/images/services/gold-membership-packages-15hrs.jpg';
  if (name.includes('silver') && name.includes('hrs')) return '/images/services/silver-membership-packages-6hrs.jpg';

  // Partial Massage specific services
  if (name.includes('back, shoulder, neck')) return '/images/services/body-massage-centre-coimbatore.webp';
  if (name.includes('head, shoulder, neck')) return '/images/services/head-massage-in-coimbatore.webp';
  if (name.includes('mughalepam')) return '/images/services/head-massage-in-chennai.webp';
  if (name.includes('back massage') && name.includes('30 mins')) return '/images/services/vellore-body-massage-centre.webp';
  if (name.includes('head massage') && name.includes('30 mins')) return '/images/services/best-head-massage-chennai.webp';

  // Package services fallback
  if (name.includes('bridal')) return '/images/services/beautiful-young-woman-spa-salon.webp';
  if (name.includes('package') || name.includes('membership')) return '/images/services/couple-massage-spa-bangalore.webp';

  // Gift card services - specific matching
  if (name.includes('5x90') && name.includes('festival')) return '/images/services/FESTIVAL-GIFT-CARD-5x90-Minutes-Package-Steam.png';
  if (name.includes('3x90') && name.includes('festival')) return '/images/services/FESTIVAL-GIFT-CARD-3x90-Minutes-Package-Steam.png';
  if (name.includes('2x90') && name.includes('festival')) return '/images/services/FESTIVAL-GIFT-CARD-2x90-Minutes-Package-Steam.png';
  if (name.includes('2x60') && name.includes('festival')) return '/images/services/FESTIVAL-GIFT-CARD-2x60-Minutes-Package-Steam.png';

  if (name.includes('5x90') && name.includes('congratulations')) return '/images/services/CONGRATULATIONS-GIFT-CARD-5x90-Minutes-Package-Steam.png';
  if (name.includes('3x90') && name.includes('congratulations')) return '/images/services/CONGRATULATIONS-GIFT-CARD-3x90-Minutes-Package-Steam.png';
  if (name.includes('2x90') && name.includes('congratulations')) return '/images/services/CONGRATULATIONS-GIFT-CARD-2x90-Minutes-Package-Steam.png';
  if (name.includes('2x60') && name.includes('congratulations')) return '/images/services/CONGRATULATIONS-GIFT-CARD-2x60-Minutes-Package-Steam.png';

  if (name.includes('5x90') && name.includes('surprise')) return '/images/services/SURPRISE-GIFT-CARD-5x90-Minutes-Package-Steam.png';
  if (name.includes('3x90') && name.includes('surprise')) return '/images/services/SURPRISE-GIFT-CARD-3x90-Minutes-Package-Steam.png';
  if (name.includes('2x90') && name.includes('surprise')) return '/images/services/SURPRISE-GIFT-CARD-2x90-Minutes-Package-Steam.png';
  if (name.includes('2x60') && name.includes('surprise')) return '/images/services/SURPRISE-GIFT-CARD-2x60-Minutes-Package-Steam.png';

  if (name.includes('3x90') && name.includes('birthday')) return '/images/services/BIRTHDAY-GIFT-CARD-3x90-Minutes-Package-Steam.png';
  if (name.includes('2x90') && name.includes('birthday')) return '/images/services/BIRTHDAY-GIFT-CARD-2x90-Minutes-Package-Steam.png';
  if (name.includes('2x60') && name.includes('birthday')) return '/images/services/BIRTHDAY-GIFT-CARD-2x60-Minutes-Package-Steam.png';

  if (name.includes('3x90mins') && name.includes('couple')) return '/images/services/3x90mins-package-for-couple-Steam-Jacuzzi-ANNIVERSARY-GIFT-CARD.png';
  if (name.includes('2x90mins') && name.includes('couple')) return '/images/services/2x90mins-package-for-couple-Steam-Jacuzzi-ANNIVERSARY-GIFT-CARD.png';
  if (name.includes('1x90mins') && name.includes('couple')) return '/images/services/1x90mins-package-for-couple-Steam-Jacuzzi-ANNIVERSARY-GIFT-CARD.png';
  if (name.includes('1x60mins') && name.includes('couple')) return '/images/services/1x60mins-package-for-couple-Steam-Jacuzzi-ANNIVERSARY-GIFT-CARD.png';

  // Gift card fallbacks
  if (name.includes('birthday') && name.includes('gift')) return '/images/services/BIRTHDAY-GIFT-CARD-Any-60-Minutes-Package-Steam.png';
  if (name.includes('anniversary') && name.includes('gift')) return '/images/services/1x60mins-package-for-couple-Steam-Jacuzzi-ANNIVERSARY-GIFT-CARD.png';
  if (name.includes('festival') && name.includes('gift')) return '/images/services/FESTIVAL-GIFT-CARD-Any-60-Minutes-Package-Steam.png';
  if (name.includes('surprise') && name.includes('gift')) return '/images/services/SURPRISE-GIFT-CARD-Any-60-Minutes-Package-Steam.png';
  if (name.includes('congratulations') && name.includes('gift')) return '/images/services/CONGRATULATIONS-GIFT-CARD-2x60-Minutes-Package-Steam.png';
  if (name.includes('gift')) return '/images/services/BIRTHDAY-GIFT-CARD-Any-60-Minutes-Package-Steam.png';

  // Default fallback for any unmatched services
  return '/images/services/best-body-massage-bangalore.webp';
};