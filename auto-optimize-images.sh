#!/bin/bash

# Script para optimización automática de nuevas imágenes
# Detecta imágenes nuevas y las optimiza automáticamente

echo "🔍 Detectando nuevas imágenes..."

# Directorio de imágenes
IMAGES_DIR="public/assets"
OPTIMIZED_DIR="public/assets/optimized"

# Crear directorio optimizado si no existe
mkdir -p "$OPTIMIZED_DIR"

# Archivo para trackear imágenes procesadas
TRACK_FILE=".processed_images"

# Crear archivo de tracking si no existe
touch "$TRACK_FILE"

# Función para procesar una imagen
process_image() {
    local image="$1"
    local base_name=$(basename "$image" | sed 's/\.[^.]*$//')
    local extension="${image##*.}"
    
    echo "🔄 Procesando: $image"
    
    # Crear diferentes tamaños
    sizes=("400" "800" "1200")
    
    for size in "${sizes[@]}"; do
        # WebP
        if command -v cwebp &> /dev/null; then
            cwebp -q 80 "$image" -o "$OPTIMIZED_DIR/${base_name}-${size}.webp"
            echo "✅ WebP creado: ${base_name}-${size}.webp"
        fi
        
        # PNG/JPG redimensionado
        if command -v convert &> /dev/null; then
            convert "$image" -resize "${size}x>" "$OPTIMIZED_DIR/${base_name}-${size}.${extension}"
            echo "✅ Redimensionado: ${base_name}-${size}.${extension}"
        fi
    done
    
    # Marcar como procesada
    echo "$image" >> "$TRACK_FILE"
}

# Verificar si hay imágenes nuevas
new_images=()
while IFS= read -r -d '' image; do
    if ! grep -Fxq "$image" "$TRACK_FILE"; then
        new_images+=("$image")
    fi
done < <(find "$IMAGES_DIR" -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -print0)

if [ ${#new_images[@]} -eq 0 ]; then
    echo "✅ No hay imágenes nuevas para procesar"
    exit 0
fi

echo "📸 Encontradas ${#new_images[@]} imágenes nuevas:"
for image in "${new_images[@]}"; do
    echo "  - $image"
done

echo ""
echo "🚀 Iniciando optimización..."

# Procesar cada imagen nueva
for image in "${new_images[@]}"; do
    process_image "$image"
done

echo ""
echo "🎉 Optimización completada!"
echo "📁 Imágenes optimizadas en: $OPTIMIZED_DIR"
echo ""
echo "💡 Para usar las imágenes optimizadas:"
echo "   <ResponsiveImage src=\"/assets/optimized/imagen-400.webp\" alt=\"...\" />"
