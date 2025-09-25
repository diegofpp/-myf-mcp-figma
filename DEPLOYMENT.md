# Guía de Despliegue - Netlify

## Problema de Imágenes en Producción

Las imágenes del proyecto están configuradas para usar rutas relativas (`/assets/...`) que funcionan tanto en desarrollo como en producción, pero necesitas subir los archivos de imagen a la carpeta `public/assets/`.

## Archivos de Imagen Requeridos

Necesitas descargar y colocar los siguientes archivos en `public/assets/`:

### ImageWrapper.tsx
- `c3c5384572fa3c5d7f9688a21a3da25a604cbec8.png` (imagen de fondo principal)
- `c15684d9f699e9cb7f13e344a73d68b7fecee5fb.svg` (logo)
- `a9263071dfc90232a311ff85a46723b01af13405.svg` (borde redondeado)
- `7abae9018c16c879a0ecf253f3801be4df871c5d.svg` (Instagram)
- `76a19a654fd33b162308d8793e6be12be8b26273.svg` (Facebook)
- `cdda679709040c2e11f4f60004ecd43395c397f0.svg` (Twitter)

### Grid.tsx
- `6d80e0d405c086d3d65dd2fd2ba6856ebf6f588b.png` (carta)
- `24a2fbd3cb5648cd4f6686480c062db1d5cff2fe.png` (reservas)
- `e144b5bf3e6dc12f946c18304b11f2c75f422429.png` (nuestro restaurant)
- `616eeb88867bd458812dfa44d204fd6bc743a917.svg` (flecha)

### Menu.tsx
- `3940b31500c988344a01101f36a9b6a5361e55b3.png` (Ceviche de Corvina)
- `3b26b652204bdad6e3d09d3a32b1bb8db457854f.png` (Machas a la Parmesana)
- `2279ba2be00dc243debd6e046f1b6aafc1457391.png` (Ostiones al Pil Pil)
- `4168c2399769973d3d9b6d3b2d07bb31977cb3e4.png` (Empanadas de Mariscos)
- `9131bfbeb67dc508967d5682ca2602328cc9bd08.png` (Caldillo de Congrio)
- `b7c946f395b655b1660960ba5dea68fb0862e5cc.png` (Chupe de Centolla)
- `d4c8207f8d34cfabf8a1529e236e83ca463bf5ab.png` (Paila Marina)
- `6c20b9fd3e8d951a42625a5e8fc8cb401c12500b.png` (Merluza a la Plancha)
- `d30cf921dc082a79bf383236acfd69b518d05681.png` (Pulpo al Olivo)
- `85c7c05dbaff16e9831c461b315555281b6f566d.png` (Reineta a la Veracruzana)
- `8aa55faa7fbe30075a3157543d59b1d995121bb3.png` (Salmón Ahumado)
- `32f4dd5ba64a9afabcd3c7f3ed0b0a33bf5d2b44.png` (Leche Asada Marina)
- `e2cc331b2c1f023cf5c814776c94843e9534b1d2.png` (Torta de Lúcuma)
- `ba4f3f39892ae09e105842517b61415d2a54a307.png` (Sopaipillas con Manjar)
- `a414a67391142ab72b6c30416afe28fe9428152c.png` (Chirimoya Alegre)
- `b9512a74270df7c90d1930376c5ea35f245bf8c1.png` (Calzones Rotos)
- `f604f05016d0f59efd3ac3efcc4c316dc7bd4308.svg` (hoja/leaf icon)

## Pasos para Solucionar

1. **Crear la carpeta de assets:**
   ```bash
   mkdir -p public/assets
   ```

2. **Descargar las imágenes desde Figma:**
   - Ve a tu proyecto en Figma
   - Selecciona cada imagen/asset
   - Exporta como PNG/SVG según corresponda
   - Guarda con el nombre exacto que aparece en el código

3. **Colocar los archivos en la ubicación correcta:**
   ```
   public/
   └── assets/
       ├── c3c5384572fa3c5d7f9688a21a3da25a604cbec8.png
       ├── c15684d9f699e9cb7f13e344a73d68b7fecee5fb.svg
       ├── a9263071dfc90232a311ff85a46723b01af13405.svg
       └── ... (todos los demás archivos)
   ```

4. **Commitear y subir a GitHub:**
   ```bash
   git add public/assets/
   git commit -m "feat: agregar assets para producción"
   git push origin main
   ```

5. **Netlify se desplegará automáticamente** con las imágenes funcionando correctamente.

## Verificación

Después del despliegue, verifica que:
- ✅ Las imágenes se cargan correctamente en Netlify
- ✅ No hay errores 404 en la consola del navegador
- ✅ El diseño se ve igual que en desarrollo local

## Alternativa: Usar CDN

Si prefieres no subir las imágenes al repositorio, puedes:
1. Subir las imágenes a un servicio como Cloudinary, AWS S3, o similar
2. Actualizar las URLs en el código para usar las URLs del CDN
3. Esto reducirá el tamaño del repositorio pero requiere configuración adicional
