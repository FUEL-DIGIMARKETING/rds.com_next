// Service image mappings for BookSpaServicePage
export interface ServiceImageMapping {
  name: string;
  originalUrl: string;
  localPath: string;
  filename: string;
}

export const serviceImageMappings: Record<string, ServiceImageMapping[]> = {};

// Helper function to get local image path by service name and category
export const getServiceImagePath = (serviceName: string, category: string): string => {
  const categoryMappings = serviceImageMappings[category];
  if (!categoryMappings) return '/images/services/default-service.jpg';
  
  const mapping = categoryMappings.find(m => m.name === serviceName);
  return mapping ? mapping.localPath : '/images/services/default-service.jpg';
};

// Helper function to replace remote URLs with local paths
export const replaceServiceImageUrl = (originalUrl: string): string => {
  for (const categoryMappings of Object.values(serviceImageMappings)) {
    const mapping = categoryMappings.find(m => m.originalUrl === originalUrl);
    if (mapping) return mapping.localPath;
  }
  return originalUrl; // Return original if no mapping found
};

export default serviceImageMappings;
