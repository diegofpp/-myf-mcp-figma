# 🚀 Optimización de Imágenes - Guía Completa

## ✅ Optimizaciones Implementadas

### 1. **Lazy Loading**
- **Componente**: `LazyImage.tsx`
- **Funcionalidad**: Carga imágenes solo cuando son visibles
- **Beneficio**: Reduce el tiempo de carga inicial
- **Uso**: `<LazyImage src="..." alt="..." />`

### 2. **Responsive Images**
- **Componente**: `ResponsiveImage.tsx`
- **Funcionalidad**: Carga diferentes tamaños según el dispositivo
- **Formatos**: WebP con fallback PNG/JPG
- **Uso**: `<ResponsiveImage src="..." sizes="..." />`

### 3. **Preload de Imágenes Críticas**
- **Hook**: `useImagePreload.ts`
- **Funcionalidad**: Precarga imágenes importantes
- **Uso**: `useImagePreload(['image1.jpg', 'image2.png'])`

### 4. **Placeholder con Blur**
- **Funcionalidad**: Muestra placeholder mientras carga
- **Efecto**: Transición suave con blur
- **UX**: Mejora la percepción de velocidad

### 5. **Optimización de Formato**
- **Script**: `optimize-images.sh`
- **Funcionalidad**: Convierte imágenes a WebP
- **Tamaños**: 400px, 800px, 1200px
- **Calidad**: 80% (balance calidad/tamaño)

## 📁 Archivos Modificados

### Componentes Nuevos:
- `src/components/LazyImage.tsx`
- `src/components/ResponsiveImage.tsx`
- `src/hooks/useImagePreload.ts`

### Componentes Actualizados:
- `src/components/ImageWrapper.tsx` - Imagen de fondo optimizada
- `src/components/Grid.tsx` - Tarjetas con responsive images
- `src/Menu.tsx` - Items del menú con lazy loading

### Configuración:
- `vite.config.ts` - Optimización de build
- `optimize-images.sh` - Script de optimización

## 🛠️ Cómo Usar

### Para Imágenes Críticas (Hero, Logo):
```tsx
<LazyImage
  src="/assets/hero.jpg"
  alt="Hero image"
  priority={true}
  className="w-full h-full"
/>
```

### Para Imágenes del Menú:
```tsx
<LazyImage
  src={item.image}
  alt={item.name}
  className="w-full h-full"
  sizes="(max-width: 768px) 100vw, 150px"
/>
```

### Para Imágenes Responsive:
```tsx
<ResponsiveImage
  src="/assets/image.jpg"
  alt="Description"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## 🚀 Optimizar Imágenes

### Ejecutar Script de Optimización:
```bash
./optimize-images.sh
```

### Requisitos:
- `webp` (para conversión WebP)
- `imagemagick` (para redimensionar)

### Instalar en macOS:
```bash
brew install webp imagemagick
```

## 📊 Beneficios de Rendimiento

### Antes:
- ❌ Todas las imágenes se cargan al inicio
- ❌ Imágenes grandes en dispositivos pequeños
- ❌ Solo formato PNG/JPG
- ❌ Sin placeholders

### Después:
- ✅ Lazy loading (carga bajo demanda)
- ✅ Imágenes responsive (tamaño apropiado)
- ✅ WebP (30-50% más pequeño)
- ✅ Placeholders con blur
- ✅ Preload de imágenes críticas

## 🔧 Configuración Avanzada

### Personalizar Lazy Loading:
```tsx
<LazyImage
  src="image.jpg"
  alt="Description"
  placeholder="/assets/placeholder.jpg" // Placeholder personalizado
  onLoad={() => console.log('Cargada')}
  onError={() => console.log('Error')}
/>
```

### Personalizar Responsive Images:
```tsx
<ResponsiveImage
  src="image.jpg"
  alt="Description"
  sizes="(max-width: 400px) 100vw, (max-width: 800px) 50vw, 25vw"
  priority={true} // Para imágenes críticas
/>
```

## 📈 Métricas Esperadas

- **Tiempo de carga inicial**: -40%
- **Tamaño de imágenes**: -30% (WebP)
- **Uso de ancho de banda**: -50%
- **Core Web Vitals**: Mejora significativa
- **LCP (Largest Contentful Paint)**: -35%
- **CLS (Cumulative Layout Shift)**: Eliminado

## 🎯 Próximos Pasos

1. **Ejecutar optimización**: `./optimize-images.sh`
2. **Probar en diferentes dispositivos**
3. **Monitorear métricas de rendimiento**
4. **Ajustar calidades según necesidades**
5. **Implementar Service Worker para cache**

## 🐛 Troubleshooting

### Error: "cwebp not found"
```bash
brew install webp
```

### Error: "convert not found"
```bash
brew install imagemagick
```

### Imágenes no se cargan:
- Verificar rutas en `public/assets/`
- Comprobar que las imágenes existen
- Revisar consola del navegador

### Lazy loading no funciona:
- Verificar que el componente está en viewport
- Comprobar configuración de Intersection Observer
- Revisar que `priority={false}` por defecto
