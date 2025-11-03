import { useEffect } from 'react';

interface PreloadImageOptions {
  priority?: 'high' | 'low' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
}

const useImagePreload = (imageUrls: string[], options: PreloadImageOptions = {}) => {
  useEffect(() => {
    const { priority = 'high', fetchPriority = 'high' } = options;

    imageUrls.forEach(url => {
      // Crear link de preload
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      
      if (priority === 'high') {
        link.setAttribute('fetchpriority', fetchPriority);
      }

      // Agregar al head
      document.head.appendChild(link);

      // También precargar la imagen en memoria
      const img = new Image();
      img.src = url;
    });

    // Cleanup function
    return () => {
      const preloadLinks = document.querySelectorAll(`link[href="${imageUrls.join('"], link[href="')}"]`);
      preloadLinks.forEach(link => link.remove());
    };
  }, [imageUrls, options.priority, options.fetchPriority]);
};

export default useImagePreload;
