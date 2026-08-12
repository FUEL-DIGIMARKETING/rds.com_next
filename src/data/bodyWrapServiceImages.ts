// BodyWrap service images data
export interface BodyWrapServiceImage {
  title: string;
  originalUrl?: string;
  localPath: string;
  alt: string;
}

export const bodyWrapServiceImages: BodyWrapServiceImage[] = [
  {
    "title": "Chocolate Wrap",
    "originalUrl": "https://www.riverdayspa.com/asset/best-chocolate-body-scrub-massage-chennai.jpg",
    "localPath": "/images/our-services/chocolate-wrap.webp",
    "alt": "chocolate-wrap"
  },
  {
    "title": "Coffee Wrap",
    "originalUrl": "https://www.riverdayspa.com/asset/coffee-wrap-body-massage-in-bangalore.jpg",
    "localPath": "/images/our-services/coffee-wrap.webp",
    "alt": "coffee-wrap"
  },
  {
    "title": "Mango Wrap",
    "originalUrl": "https://www.riverdayspa.com/assets/best-mango-wrap-massage.webp",
    "localPath": "/images/our-services/mango-wrap.webp",
    "alt": "mango-wrap"
  },
  {
    "title": "Papaya Wrap",
    "originalUrl": "https://www.riverdayspa.com/asset/best-papaya-wrap-massage-chennai.jpg",
    "localPath": "/images/our-services/papaya-wrap.webp",
    "alt": "papaya-wrap"
  },
  {
    "title": "Raspberry Wrap",
    "originalUrl": "https://www.riverdayspa.com/asset/best-raspberry-massage-centre-in-chennai.webp",
    "localPath": "/images/our-services/raspberry-wrap.webp",
    "alt": "raspberry-wrap"
  }
];

// Helper function to get image by title
export const getBodyWrapServiceImage = (title: string): BodyWrapServiceImage | undefined => {
  return bodyWrapServiceImages.find(img => img.title === title);
};

export default bodyWrapServiceImages;
