// Configuración de Meta Pixel
export const PIXEL_CONFIG = {
  // Tu Pixel ID real de Facebook
  PIXEL_ID: '2007316900036640',
  
  // Configuración adicional
  DEBUG: true, // Activamos debug para ver eventos en consola
  AUTO_CONFIG: true,
};

// Eventos personalizados que puedes usar
export const PIXEL_EVENTS = {
  PAGE_VIEW: 'PageView',
  VIEW_CONTENT: 'ViewContent',
  INITIATE_CHECKOUT: 'InitiateCheckout',
  PURCHASE: 'Purchase',
  ADD_TO_CART: 'AddToCart',
  CUSTOMIZE_PRODUCT: 'CustomizeProduct',
  LEAD: 'Lead',
  COMPLETE_REGISTRATION: 'CompleteRegistration',
};

// Función helper para trackear eventos
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Declaración global para TypeScript
declare global {
  interface Window {
    fbq: any;
  }
}
