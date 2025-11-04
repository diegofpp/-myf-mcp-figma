#!/bin/bash

# Script para comprimir imágenes grandes directamente
# Reduce el tamaño de las imágenes manteniendo buena calidad

echo "🚀 Iniciando compresión de imágenes..."

IMAGES_DIR="public/assets"
MAX_SIZE=2000  # Ancho máximo en píxeles

# Función para obtener tamaño en MB
get_size_mb() {
    local file="$1"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        size=$(stat -f%z "$file" 2>/dev/null)
    else
        size=$(stat -c%s "$file" 2>/dev/null)
    fi
    if [ -n "$size" ]; then
        echo "scale=2; $size / 1048576" | bc 2>/dev/null || awk "BEGIN {printf \"%.2f\", $size/1048576}"
    fi
}

# Función para optimizar una imagen PNG
optimize_png() {
    local input_file="$1"
    local temp_file="${input_file}.tmp"
    
    echo "🔄 Optimizando: $(basename "$input_file")"
    
    # Obtener tamaño original
    original_size_mb=$(get_size_mb "$input_file")
    echo "   Tamaño original: ${original_size_mb}MB"
    
    # Obtener dimensiones actuales
    width=$(identify -format "%w" "$input_file" 2>/dev/null)
    height=$(identify -format "%h" "$input_file" 2>/dev/null)
    
    if [ -z "$width" ] || [ -z "$height" ]; then
        echo "⚠️  No se pudieron obtener dimensiones, saltando..."
        return 1
    fi
    
    echo "   Dimensiones: ${width}x${height}"
    
    # Redimensionar si es muy grande
    if [ "$width" -gt "$MAX_SIZE" ] || [ "$height" -gt "$MAX_SIZE" ]; then
        echo "   Redimensionando a máximo ${MAX_SIZE}px..."
        magick "$input_file" -resize "${MAX_SIZE}x${MAX_SIZE}>" "$temp_file"
    else
        cp "$input_file" "$temp_file"
    fi
    
    # Comprimir con pngquant (mucho mejor que ImageMagick para PNGs)
    if command -v pngquant &> /dev/null; then
        echo "   Comprimiendo con pngquant..."
        pngquant --quality=80-95 --ext .png --force "$temp_file" 2>/dev/null
    fi
    
    # Reemplazar original si el nuevo es más pequeño
    new_size=$(stat -f%z "$temp_file" 2>/dev/null || stat -c%s "$temp_file" 2>/dev/null)
    original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
    
    if [ "$new_size" -lt "$original_size" ]; then
        mv "$temp_file" "$input_file"
        new_size_mb=$(get_size_mb "$input_file")
        reduction=$(echo "scale=1; (1 - $new_size/$original_size) * 100" | bc 2>/dev/null || awk "BEGIN {printf \"%.1f\", (1 - $new_size/$original_size) * 100}")
        echo "   ✅ Optimizado: ${new_size_mb}MB (reducción: ${reduction}%)"
    else
        rm -f "$temp_file"
        echo "   ⚠️  No se pudo reducir el tamaño"
    fi
}

# Procesar todas las imágenes PNG grandes
echo "📸 Buscando imágenes PNG grandes..."
large_images=()

for image in "$IMAGES_DIR"/*.png; do
    if [ -f "$image" ]; then
        # Obtener tamaño del archivo
        size_mb=$(get_size_mb "$image")
        
        # Comparar (sin usar bc para comparación)
        size_bytes=$(stat -f%z "$image" 2>/dev/null || stat -c%s "$image" 2>/dev/null)
        if [ -n "$size_bytes" ] && [ "$size_bytes" -gt 1048576 ]; then  # Mayor a 1MB
            large_images+=("$image")
            echo "📦 Encontrada imagen grande: $(basename "$image") - ${size_mb}MB"
        fi
    fi
done

if [ ${#large_images[@]} -eq 0 ]; then
    echo "✅ No hay imágenes grandes para optimizar"
    exit 0
fi

echo ""
echo "🚀 Iniciando optimización de ${#large_images[@]} imágenes..."
echo ""

for image in "${large_images[@]}"; do
    optimize_png "$image"
    echo ""
done

echo "🎉 Compresión completada!"

