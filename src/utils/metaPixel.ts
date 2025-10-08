// Implementación directa de Meta Pixel sin dependencias externas
export const MetaPixel = {
  pixelId: '2007316900036640',
  isInitialized: false,

  init() {
    if (this.isInitialized) return;
    
    console.log('🔵 Inicializando Meta Pixel directamente...', this.pixelId);
    
    // Crear el script de Facebook Pixel
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${this.pixelId}');
    `;
    
    document.head.appendChild(script);
    
    // Crear el noscript para casos sin JavaScript
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=${this.pixelId}&ev=PageView&noscript=1" />
    `;
    document.head.appendChild(noscript);
    
    this.isInitialized = true;
    console.log('✅ Meta Pixel inicializado directamente');
  },

  pageView() {
    if (!this.isInitialized) this.init();
    
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
      console.log('📊 PageView event enviado directamente');
    } else {
      console.error('❌ fbq no está disponible');
    }
  },

  track(eventName: string, parameters?: any) {
    if (!this.isInitialized) this.init();
    
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, parameters);
      console.log(`📊 Evento ${eventName} enviado directamente:`, parameters);
    } else {
      console.error('❌ fbq no está disponible');
    }
  }
};

// Declaración global para TypeScript
declare global {
  interface Window {
    fbq: any;
  }
}
