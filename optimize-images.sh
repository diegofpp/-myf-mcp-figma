#!/bin/bash

# Script para optimizar imágenes a WebP
# Uso: ./optimize-images.sh

echo "🚀 Iniciando optimización de imágenes..."

# Crear directorio para imágenes optimizadas si no existe
mkdir -p public/assets/optimized

# Función para convertir imagen a WebP
convert_to_webp() {
    local input_file="$1"
    local output_file="$2"
    
    if command -v cwebp &> /dev/null; then
        cwebp -q 80 "$input_file" -o "$output_file"
        echo "✅ Convertido: $input_file -> $output_file"
    else
        echo "❌ cwebp no está instalado. Instalando..."
        if [[ "$OSTYPE" == "darwin"* ]]; then
            brew install webp
        else
            echo "Por favor instala webp manualmente"
            return 1
        fi
    fi
}

# Función para crear diferentes tamaños
create_responsive_images() {
    local input_file="$1"
    local base_name=$(basename "$input_file" | sed 's/\.[^.]*$//')
    local extension="${input_file##*.}"
    
    # Crear diferentes tamaños
    sizes=("400" "800" "1200")
    
    for size in "${sizes[@]}"; do
        # WebP
        convert_to_webp "$input_file" "public/assets/optimized/${base_name}-${size}.webp"
        
        # PNG/JPG original (redimensionado)
        if command -v convert &> /dev/null; then
            convert "$input_file" -resize "${size}x>" "public/assets/optimized/${base_name}-${size}.${extension}"
            echo "✅ Redimensionado: ${base_name}-${size}.${extension}"
        else
            echo "❌ ImageMagick no está instalado. Instalando..."
            if [[ "$OSTYPE" == "darwin"* ]]; then
                brew install imagemagick
            else
                echo "Por favor instala ImageMagick manualmente"
            fi
        fi
    done
}

# Procesar todas las imágenes PNG y JPG en public/assets/
for image in public/assets/*.{png,jpg,jpeg}; do
    if [ -f "$image" ]; then
        echo "🔄 Procesando: $image"
        create_responsive_images "$image"
    fi
done

echo "🎉 Optimización completada!"
echo "📁 Imágenes optimizadas guardadas en: public/assets/optimized/"
echo ""
echo "💡 Para usar las imágenes optimizadas, actualiza las rutas en tu código:"
echo "   - WebP: /assets/optimized/imagen-400.webp"
echo "   - Fallback: /assets/optimized/imagen-400.png"
