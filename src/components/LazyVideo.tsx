import React, { useState, useEffect, useRef } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
  priority?: boolean; // Para videos críticos
  [key: string]: any;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  className = '',
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Si es prioridad, cargar inmediatamente
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return; // Si es prioridad, no usar intersection observer

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Cargar 50px antes de que sea visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  const handleCanPlay = () => {
    // Intentar reproducir el video cuando esté listo
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder con blur mientras se carga */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-300 blur-sm transition-opacity duration-500 animate-pulse"
        />
      )}
      
      {/* Video real */}
      {isInView && !hasError && (
        <video
          ref={videoRef}
          src={src}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={handleLoadedData}
          onError={handleError}
          onCanPlay={handleCanPlay}
          muted
          autoPlay
          loop
          playsInline
          preload={priority ? 'auto' : 'metadata'}
          {...props}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Error al cargar video</span>
        </div>
      )}
    </div>
  );
};

export default LazyVideo;

