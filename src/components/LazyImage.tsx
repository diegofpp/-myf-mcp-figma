import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean; // Para imágenes críticas
  [key: string]: any;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder,
  onLoad,
  onError,
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // En modo impresión, siempre mostrar el contenido
  const isPrintMode = typeof window !== 'undefined' && window.matchMedia('print').matches;
  const [isInView, setIsInView] = useState(priority || isPrintMode); // Si es prioridad o impresión, cargar inmediatamente
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // En modo impresión, siempre mostrar
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('print');
      const handlePrintChange = (e: MediaQueryList | MediaQueryListEvent) => {
        if (e.matches) {
          setIsInView(true);
          setIsLoaded(true);
        }
      };
      
      // Verificar si ya está en modo impresión
      if (mediaQuery.matches) {
        setIsInView(true);
        setIsLoaded(true);
      }
      
      mediaQuery.addEventListener('change', handlePrintChange);
      
      if (priority) {
        return () => mediaQuery.removeEventListener('change', handlePrintChange);
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry?.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { 
          threshold: 0.1,
          rootMargin: '50px' // Cargar 50px antes de que sea visible
        }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        observer.disconnect();
        mediaQuery.removeEventListener('change', handlePrintChange);
      };
    }
  }, [priority]);

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
      {/* Placeholder con blur */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-300 blur-sm transition-opacity duration-500 animate-pulse"
          style={{
            backgroundImage: placeholder ? `url('${placeholder}')` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      
      {/* Imagen real */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          {...props}
        />
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

export default LazyImage;
