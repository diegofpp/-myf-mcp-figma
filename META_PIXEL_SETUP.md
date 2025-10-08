# Meta Pixel Configuration

## Instalación Completada ✅

Meta Pixel ha sido instalado y configurado en tu proyecto React con Vite.

## Configuración

### 1. Obtener tu Pixel ID

1. Ve a [Facebook Business Manager](https://business.facebook.com/)
2. Navega a **Eventos Manager**
3. Selecciona tu Pixel o crea uno nuevo
4. Copia tu **Pixel ID** (número de 15-16 dígitos)

### 2. Configurar el Pixel ID

Edita el archivo `src/config/pixel.ts` y reemplaza `'YOUR_PIXEL_ID'` con tu Pixel ID real:

```typescript
export const PIXEL_CONFIG = {
  PIXEL_ID: '1234567890123456', // Tu Pixel ID aquí
  DEBUG: false, // Cambia a true para modo debug
  AUTO_CONFIG: true,
};
```

### 3. Eventos Configurados

Los siguientes eventos están configurados automáticamente:

- **PageView**: Se ejecuta cuando la app se carga
- **ViewContent**: Se ejecuta al navegar entre páginas
- **InitiateCheckout**: Se ejecuta al ir a la página de reservas
- **CustomizeProduct**: Se ejecuta al abrir el menú de navegación

### 4. Agregar Eventos Personalizados

Puedes agregar eventos personalizados usando la función `trackEvent`:

```typescript
import { trackEvent, PIXEL_EVENTS } from './config/pixel';

// Ejemplo: Trackear cuando alguien hace clic en un botón
const handleButtonClick = () => {
  trackEvent(PIXEL_EVENTS.LEAD, {
    content_name: 'Contact Button Clicked',
    content_category: 'Lead Generation'
  });
};
```

### 5. Verificar la Instalación

1. Instala la extensión [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) en Chrome
2. Abre tu sitio web
3. La extensión te mostrará si el pixel está funcionando correctamente

### 6. Modo Debug

Para activar el modo debug y ver los eventos en la consola:

```typescript
export const PIXEL_CONFIG = {
  PIXEL_ID: 'tu_pixel_id',
  DEBUG: true, // Cambia a true
  AUTO_CONFIG: true,
};
```

## Archivos Modificados

- `src/main.tsx`: Configuración principal del pixel
- `src/config/pixel.ts`: Configuración y constantes del pixel
- `package.json`: Dependencia `react-facebook-pixel` agregada

## Próximos Pasos

1. Reemplaza `'YOUR_PIXEL_ID'` con tu Pixel ID real
2. Prueba la aplicación y verifica que los eventos se estén enviando
3. Configura conversiones en Facebook Ads Manager
4. Considera agregar eventos adicionales según tus necesidades de marketing
