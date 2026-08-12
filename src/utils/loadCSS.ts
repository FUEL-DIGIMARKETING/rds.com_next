// Utility to dynamically load CSS only when needed
export const loadCSS = (href: string, id?: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Check if CSS is already loaded
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    if (id) link.id = id;
    
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
    
    document.head.appendChild(link);
  });
};

// Load Slick Carousel CSS only when needed
export const loadSlickCSS = async (): Promise<void> => {
  await Promise.all([
    loadCSS('/css/slick.css', 'slick-css'),
    loadCSS('/css/slick-theme.css', 'slick-theme-css')
  ]);
};