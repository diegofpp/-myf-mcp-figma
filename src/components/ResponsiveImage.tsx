import React, { useState, useEffect, useRef } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  [key: string]: any;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generar diferentes tamaños de imagen
  const generateSrcSet = (baseSrc: string, format: string) => {
    const baseName = baseSrc.replace(/\.(png|jpg|jpeg|webp)$/, '');
    return [
      `${baseName}-small.${format} 400w`,
      `${baseName}-medium.${format} 800w`,
      `${baseName}-large.${format} 1200w`
    ].join(', ');
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-300 blur-sm transition-opacity duration-500 animate-pulse" />
      )}

      {/* Responsive Image con WebP */}
      {isInView && !hasError && (
        <picture>
          {/* WebP sources */}
          <source
            srcSet={generateSrcSet(src, 'webp')}
            type="image/webp"
            sizes={sizes}
          />
          {/* Fallback PNG/JPG */}
          <source
            srcSet={generateSrcSet(src, src.split('.').pop() || 'png')}
            type={`image/${src.split('.').pop() || 'png'}`}
            sizes={sizes}
          />
          {/* Imagen por defecto */}
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            sizes={sizes}
            {...props}
          />
        </picture>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Error al cargar imagen</span>
        </div>
      )}
    </div>
  );
};

export default ResponsiveImage;
