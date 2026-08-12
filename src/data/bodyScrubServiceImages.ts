// BodyScrub service images data
export interface BodyScrubServiceImage {
  title: string;
  originalUrl?: string;
  localPath: string;
  alt: string;
}

export const bodyScrubServiceImages: BodyScrubServiceImage[] = [
  {
    "title": "Chocolate Scrub",
    "originalUrl": "https://www.riverdayspa.com/asset/best-chocolate-body-scrub-massage-chennai.jpg",
    "localPath": "/images/our-services/chocolate-scrub.webp",
    "alt": "chocolate-scrub"
  },
  {
    "title": "Coffee Scrub",
    "originalUrl": "https://www.riverdayspa.com/asset/best-coffee-body-scrub-massage-bangalore.jpg",
    "localPath": "/images/our-services/coffee-scrub.webp",
    "alt": "coffee-scrub"
  },
  {
    "title": "Fruit Scrub",
    "originalUrl": "https://www.riverdayspa.com/asset/best-fruit-body-scrub-massage.jpeg",
    "localPath": "/images/our-services/fruit-scrub.webp",
    "alt": "fruit-scrub"
  },
  {
    "title": "Lemon Grass Scrub",
    "originalUrl": "https://www.riverdayspa.com/asset/best-lemongrass-body-scrub-massage.jpg",
    "localPath": "/images/our-services/lemon-grass-scrub.webp",
    "alt": "lemon-grass-scrub"
  },
  {
    "title": "Sea Salt Scrub",
    "originalUrl": "https://www.riverdayspa.com/asset/best-sea-salt-body-scrub-massage.jpg",
    "localPath": "/images/our-services/sea-salt-scrub.webp",
    "alt": "sea-salt-scrub"
  }
];

// Helper function to get image by title
export const getBodyScrubServiceImage = (title: string): BodyScrubServiceImage | undefined => {
  return bodyScrubServiceImages.find(img => img.title === title);
};

export default bodyScrubServiceImages;
