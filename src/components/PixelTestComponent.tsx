import React from 'react';
import { MetaPixel } from '../utils/metaPixel';
import { PIXEL_EVENTS } from '../config/pixel';

const PixelTestComponent: React.FC = () => {
  const testPixelEvents = () => {
    console.log('🧪 Enviando eventos de prueba...');
    
    // Evento PageView
    MetaPixel.pageView();
    console.log('✅ PageView enviado');
    
    // Evento ViewContent
    MetaPixel.track(PIXEL_EVENTS.VIEW_CONTENT, {
      content_name: 'Test Event',
      content_category: 'Testing'
    });
    console.log('✅ ViewContent enviado');
    
    // Evento Lead
    MetaPixel.track(PIXEL_EVENTS.LEAD, {
      content_name: 'Test Lead',
      content_category: 'Testing'
    });
    console.log('✅ Lead enviado');
    
    // Verificar fbq global
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('✅ fbq está disponible globalmente');
      console.log('fbq:', window.fbq);
    } else {
      console.error('❌ fbq no está disponible globalmente');
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: '#1877f2', 
      color: 'white', 
      padding: '10px', 
      borderRadius: '5px',
      zIndex: 9999,
      fontSize: '12px'
    }}>
      <h4>Meta Pixel Test</h4>
      <button 
        onClick={testPixelEvents}
        style={{
          background: 'white',
          color: '#1877f2',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '3px',
          cursor: 'pointer',
          marginTop: '5px'
        }}
      >
        Test Events
      </button>
    </div>
  );
};

export default PixelTestComponent;
