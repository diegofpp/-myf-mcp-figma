import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Exporta un elemento HTML a PDF
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
    // Mostrar indicador de carga
    const loadingMessage = document.createElement('div');
    loadingMessage.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 20px 40px;
      border-radius: 8px;
      z-index: 10000;
      font-family: sans-serif;
    `;
    loadingMessage.textContent = 'Generando PDF...';
    document.body.appendChild(loadingMessage);

    // Configuración de html2canvas
    const canvas = await html2canvas(element, {
      scale: options.scale || 2, // Mayor calidad
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

    // Remover indicador de carga
    document.body.removeChild(loadingMessage);

    console.log('✅ PDF generado exitosamente');
  } catch (error) {
    console.error('❌ Error al generar PDF:', error);
    alert('Error al generar el PDF. Por favor, intenta nuevamente.');
  }
}

