// Booking page image data
export interface BookingImageData {
  id: string;
  name: string;
  category: string;
  originalUrl?: string;
  localPath: string;
  alt: string;
}

export const bookingImageData: BookingImageData[] = [
  {
    "id": "1",
    "name": "Swedish Massage",
    "category": "Body massage - 60 Minutes",
    "originalUrl": "https://www.riverdayspa.com/assets/chennai/swedish-massage-chennai.jpeg",
    "localPath": "/images/booking/body-massage/swedish-massage.jpg",
    "alt": "swedish-massage"
  },
  {
    "id": "2",
    "name": "Deep Tissue Massage",
    "category": "Body massage - 60 Minutes",
    "originalUrl": "https://www.riverdayspa.com/assets/chennai/deep-tissue-massage-in-chennai.jpeg",
    "localPath": "/images/booking/body-massage/deep-tissue-massage.jpg",
    "alt": "deep-tissue-massage"
  },
  {
    "id": "3",
    "name": "Thai Massage",
    "category": "Body massage - 60 Minutes",
    "originalUrl": "https://www.riverdayspa.com/assets/chennai/thai-spa-in-chennai.jpeg",
    "localPath": "/images/booking/body-massage/thai-massage.jpg",
    "alt": "thai-massage"
  },
  {
    "id": "4",
    "name": "Ayurvedic Massage",
    "category": "Body massage - 60 Minutes",
    "originalUrl": "https://www.riverdayspa.com/assets/chennai/ayurvedic-massage-chennai.jpeg",
    "localPath": "/images/booking/body-massage/ayurvedic-massage.jpg",
    "alt": "ayurvedic-massage"
  },
  {
    "id": "5",
    "name": "Hot Stone Massage",
    "category": "Body massage - 60 Minutes",
    "originalUrl": "https://www.riverdayspa.com/assets/chennai/best-oil-massage-in-chennai.jpeg",
    "localPath": "/images/booking/body-massage/hot-stone-massage.jpg",
    "alt": "hot-stone-massage"
  },
  {
    "id": "6",
    "name": "Swedish Massage 90 Min",
    "category": "Body massage - 90 Minutes",
    "originalUrl": "https://www.riverdayspa.com/assets/chennai/best-body-spa-in-chennai.jpeg",
    "localPath": "/images/booking/body-massage/swedish-massage-90-min.jpg",
    "alt": "swedish-massage-90-min"
  },
  {
    "id": "7",
    "name": "Deep Tissue Massage 90 Min",
    "category": "Body massage - 90 Minutes",
    "originalUrl": "https://www.riverdayspa.com/assets/chennai/body-massage-centre-in-chennai.jpeg",
    "localPath": "/images/booking/body-massage/deep-tissue-massage-90-min.jpg",
    "alt": "deep-tissue-massage-90-min"
  },
  {
    "id": "8",
    "name": "Head Massage",
    "category": "Partial massage",
    "originalUrl": "https://www.riverdayspa.com/assets/chennai/head-massage-center-in-chennai.jpeg",
    "localPath": "/images/booking/partial-massage/head-massage.jpg",
    "alt": "head-massage"
  },
  {
    "id": "9",
    "name": "Foot Massage",
    "category": "Partial massage",
    "originalUrl": "https://www.riverdayspa.com/assets/chennai/best-foot-massage-center- chennai.jpeg",
    "localPath": "/images/booking/partial-massage/foot-massage.jpg",
    "alt": "foot-massage"
  },
  {
    "id": "10",
    "name": "Coffee Scrub",
    "category": "Body Scrub - 50 Minutes",
    "originalUrl": "https://www.riverdayspa.com/assets/chennai/body-scrub- massage-in-chennai.jpeg",
    "localPath": "/images/booking/body-scrub/coffee-scrub.jpg",
    "alt": "coffee-scrub"
  },
  {
    "id": "11",
    "name": "Sea Salt Scrub",
    "category": "Body Scrub - 50 Minutes",
    "originalUrl": "https://www.riverdayspa.com/assets/chennai/best-body-scrub-massage-in-chennai.jpeg",
    "localPath": "/images/booking/body-scrub/sea-salt-scrub.jpg",
    "alt": "sea-salt-scrub"
  },
  {
    "id": "12",
    "name": "Herbal Body Wrap",
    "category": "Body wrap - 50 Minutes",
    "originalUrl": "https://www.riverdayspa.com/assets/chennai/couple-spa-in-chennai.jpeg",
    "localPath": "/images/booking/body-wrap/herbal-body-wrap.jpg",
    "alt": "herbal-body-wrap"
  },
  {
    "id": "13",
    "name": "Couple Spa Package",
    "category": "Spa Packages",
    "originalUrl": "https://www.riverdayspa.com/assets/chennai/best-couple-spa-in-chennai.jpeg",
    "localPath": "/images/booking/packages/couple-spa-package.jpg",
    "alt": "couple-spa-package"
  },
  {
    "id": "14",
    "name": "Bridal Package",
    "category": "Spa Packages",
    "originalUrl": "https://www.riverdayspa.com/assets/chennai/couple-massage-spa-chennai.jpeg",
    "localPath": "/images/booking/packages/bridal-package.jpg",
    "alt": "bridal-package"
  }
];

// Helper function to get image by product ID
export const getBookingImage = (productId: string): BookingImageData | undefined => {
  return bookingImageData.find(img => img.id === productId);
};

// Helper function to get images by category
export const getBookingImagesByCategory = (category: string): BookingImageData[] => {
  return bookingImageData.filter(img => img.category === category);
};

export default bookingImageData;
