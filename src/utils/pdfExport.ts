import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Exporta un elemento HTML a PDF (función interna)
 * @param elementId - ID del elemento a exportar
 * @param filename - Nombre del archivo PDF (sin extensión)
 * @param options - Opciones adicionales para la exportación
 */
export async function exportToPDF(
  elementId: string,
  filename: string = 'menu',
  options: {
    format?: [number, number];
    orientation?: 'portrait' | 'landscape';
    quality?: number;
    scale?: number;
  } = {}
) {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.error(`Elemento con ID "${elementId}" no encontrado`);
    return;
  }

  try {
    console.log('🔄 Generando PDF...');
    
    // Configuración de html2canvas
    const canvas = await html2canvas(element, {
      scale: options.scale || 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: element.scrollWidth,
      height: element.scrollHeight,
    });

    // Calcular dimensiones del PDF
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    
    // Formato del PDF (A4 por defecto)
    const pdfWidth = options.format?.[0] || 210; // A4 width en mm
    const pdfHeight = options.format?.[1] || 297; // A4 height en mm
    
    // Calcular dimensiones manteniendo proporción
    const ratio = Math.min(pdfWidth / (imgWidth * 0.264583), pdfHeight / (imgHeight * 0.264583));
    const finalWidth = imgWidth * 0.264583 * ratio;
    const finalHeight = imgHeight * 0.264583 * ratio;

    // Crear PDF
    const pdf = new jsPDF({
      orientation: options.orientation || (finalHeight > finalWidth ? 'portrait' : 'landscape'),
      unit: 'mm',
      format: options.format || [pdfWidth, pdfHeight],
    });

    // Si el contenido es más alto que una página, dividirlo en múltiples páginas
    const pageHeight = pdf.internal.pageSize.getHeight();
    let heightLeft = finalHeight;
    let position = 0;

    // Agregar primera página
    pdf.addImage(canvas.toDataURL('image/png', options.quality || 1.0), 'PNG', 0, position, finalWidth, finalHeight);
    heightLeft -= pageHeight;

    // Agregar páginas adicionales si es necesario
    while (heightLeft > 0) {
      position = heightLeft - finalHeight;
      pdf.addPage();
      pdf.addImage(canvas.toDataURL('image/png', options.quality || 1.0), 'PNG', 0, position, finalWidth, finalHeight);
      heightLeft -= pageHeight;
    }

    // Guardar PDF
    pdf.save(`${filename}.pdf`);
    console.log('✅ PDF generado exitosamente');
  } catch (error) {
    console.error('❌ Error al generar PDF:', error);
  }
}

/**
 * Función interna para exportar el menú a PDF
 * Accesible desde la consola del navegador como: window.exportMenuPDF()
 * Mantiene los estilos originales del menú (fondo oscuro, texto claro)
 */
export async function exportMenuPDF() {
  // Buscar el contenedor del menú por ID
  const menuContent = document.getElementById('menu-content');
  
  if (!menuContent) {
    console.error('❌ No se encontró el contenedor del menú. Asegúrate de estar en la página del menú.');
    return;
  }

  console.log('🔄 Iniciando exportación del menú a PDF...');

  // Crear un ID temporal para el PDF
  const tempId = 'menu-pdf-export-temp';
  const existingElement = document.getElementById(tempId);
  if (existingElement) {
    existingElement.remove();
  }

  // Clonar el contenido del menú con todos sus estilos
  const clonedContent = menuContent.cloneNode(true) as HTMLElement;
  clonedContent.id = tempId;
  
  // Crear un contenedor oculto para el PDF con fondo oscuro
  const pdfContainer = document.createElement('div');
  pdfContainer.style.cssText = `
    position: fixed;
    left: -9999px;
    top: 0;
    width: ${menuContent.offsetWidth || 800}px;
    background: #0a0b0a;
    padding: 40px;
    z-index: -1;
  `;
  
  // Mantener los estilos originales del menú
  clonedContent.style.cssText = `
    background: #0a0b0a !important;
    width: 100% !important;
    position: relative !important;
  `;
  
  // Asegurar que todos los elementos mantengan sus estilos originales
  // No modificar colores, solo asegurar que se rendericen correctamente
  const allElements = clonedContent.querySelectorAll('*');
  allElements.forEach((el) => {
    const htmlEl = el as HTMLElement;
    // Forzar que los elementos sean visibles pero mantener sus estilos
    if (htmlEl.style) {
      // No cambiar colores, solo asegurar visibilidad
      if (htmlEl.style.opacity === '0') {
        htmlEl.style.opacity = '1';
      }
      if (htmlEl.style.visibility === 'hidden') {
        htmlEl.style.visibility = 'visible';
      }
    }
  });
  
  pdfContainer.appendChild(clonedContent);
  document.body.appendChild(pdfContainer);
  
  // Esperar a que las imágenes se carguen
  const images = clonedContent.querySelectorAll('img');
  const imagePromises = Array.from(images).map((img) => {
    return new Promise<void>((resolve) => {
      if (img.complete && img.naturalHeight !== 0) {
        resolve();
      } else {
        img.onload = () => resolve();
        img.onerror = () => resolve();
        // Timeout de seguridad
        setTimeout(() => resolve(), 2000);
      }
    });
  });

  await Promise.all(imagePromises);
  
  // Esperar un momento adicional para que se renderice completamente
  await new Promise(resolve => setTimeout(resolve, 500));
  
  try {
    // Exportar con fondo oscuro
    const element = document.getElementById(tempId);
    if (!element) {
      throw new Error('Elemento no encontrado');
    }

    console.log('🔄 Capturando contenido con estilos originales...');
    
    // Configuración de html2canvas con fondo oscuro
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#0a0b0a', // Fondo oscuro original
      width: element.scrollWidth,
      height: element.scrollHeight,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    // Calcular dimensiones del PDF
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    
    // Formato A4
    const pdfWidth = 210; // A4 width en mm
    const pdfHeight = 297; // A4 height en mm
    
    // Calcular dimensiones manteniendo proporción
    const ratio = Math.min(pdfWidth / (imgWidth * 0.264583), pdfHeight / (imgHeight * 0.264583));
    const finalWidth = imgWidth * 0.264583 * ratio;
    const finalHeight = imgHeight * 0.264583 * ratio;

    // Crear PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [pdfWidth, pdfHeight],
    });

    // Si el contenido es más alto que una página, dividirlo en múltiples páginas
    const pageHeight = pdf.internal.pageSize.getHeight();
    let heightLeft = finalHeight;
    let position = 0;

    // Agregar primera página
    pdf.addImage(canvas.toDataURL('image/png', 1.0), 'PNG', 0, position, finalWidth, finalHeight);
    heightLeft -= pageHeight;

    // Agregar páginas adicionales si es necesario
    while (heightLeft > 0) {
      position = heightLeft - finalHeight;
      pdf.addPage();
      pdf.addImage(canvas.toDataURL('image/png', 1.0), 'PNG', 0, position, finalWidth, finalHeight);
      heightLeft -= pageHeight;
    }

    // Guardar PDF
    pdf.save('menu-mar-y-fuego.pdf');
    
    // Limpiar el contenedor temporal
    pdfContainer.remove();
    console.log('✅ PDF generado exitosamente con estilos originales');
  } catch (error) {
    pdfContainer.remove();
    console.error('❌ Error al generar PDF:', error);
  }
}

