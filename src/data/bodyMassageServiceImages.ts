// BodyMassage service images data
export interface BodyMassageServiceImage {
  title: string;
  originalUrl?: string;
  localPath: string;
  alt: string;
}

export const bodyMassageServiceImages: BodyMassageServiceImage[] = [
  {
    "title": "Moroccan Bath Massage",
    "originalUrl": "https://www.riverdayspa.com/assets/best-moroccan-bath-massage-in-vellore.jpeg",
    "localPath": "/images/our-services/moroccan-bath-massage.webp",
    "alt": "moroccan-bath-massage"
  },
  {
    "title": "Swedish Massage",
    "originalUrl": "https://www.riverdayspa.com/assets/swedish-massage-in-coimbatore.jpg",
    "localPath": "/images/our-services/swedish-massage.webp",
    "alt": "swedish-massage"
  },
  {
    "title": "Balinese Massage",
    "originalUrl": "https://www.riverdayspa.com/asset/balinese-massage-bangalore.jpg",
    "localPath": "/images/our-services/balinese-massage.webp",
    "alt": "balinese-massage"
  },
  {
    "title": "Head to Toe Aroma Massage",
    "originalUrl": "https://www.riverdayspa.com/asset/head-massage-chennai.jpg",
    "localPath": "/images/our-services/head-to-toe-aroma-massage.webp",
    "alt": "head-to-toe-aroma-massage"
  },
  {
    "title": "Deep Tissue Massage",
    "originalUrl": "https://www.riverdayspa.com/asset/deep-tissue-massage-chennai.jpg",
    "localPath": "/images/our-services/deep-tissue-massage.webp",
    "alt": "deep-tissue-massage"
  },
  {
    "title": "Sense of Siam Massage",
    "originalUrl": "https://www.riverdayspa.com/asset/bali-spa-in-trichy.jpg",
    "localPath": "/images/our-services/sense-of-siam-massage.webp",
    "alt": "sense-of-siam-massage"
  },
  {
    "title": "Detoxifying Massage",
    "originalUrl": "https://www.riverdayspa.com/asset/best-thai-massage-in-chennai.jpg",
    "localPath": "/images/our-services/detoxifying-massage.webp",
    "alt": "detoxifying-massage"
  },
  {
    "title": "Sports Massage",
    "originalUrl": "https://www.riverdayspa.com/asset/sports-massage-in-chennai.jpg",
    "localPath": "/images/our-services/sports-massage.webp",
    "alt": "sports-massage"
  },
  {
    "title": "Abhyanga Ayurvedic Massage",
    "originalUrl": "https://www.riverdayspa.com/asset/oil-massage-centre-coimbatore.jpg",
    "localPath": "/images/our-services/abhyanga-ayurvedic-massage.webp",
    "alt": "abhyanga-ayurvedic-massage"
  },
  {
    "title": "Synchronized Massage",
    "originalUrl": "https://www.riverdayspa.com/asset/best-massage-spa-in-tirupur.jpg",
    "localPath": "/images/our-services/synchronized-massage.webp",
    "alt": "synchronized-massage"
  },
  {
    "title": "Foot Reflexology Massage",
    "originalUrl": "https://www.riverdayspa.com/asset/foot-reflexology-in-coimbatore.jpg",
    "localPath": "/images/our-services/foot-reflexology-massage.webp",
    "alt": "foot-reflexology-massage"
  },
  {
    "title": "Thai Massage",
    "originalUrl": "https://www.riverdayspa.com/asset/best-thai-massage-in-chennai.jpeg",
    "localPath": "/images/our-services/thai-massage.webp",
    "alt": "thai-massage"
  }
];

// Helper function to get image by title
export const getBodyMassageServiceImage = (title: string): BodyMassageServiceImage | undefined => {
  return bodyMassageServiceImages.find(img => img.title === title);
};

export default bodyMassageServiceImages;
