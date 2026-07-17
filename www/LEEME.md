# Veterinaria Cuatro Patas — App de Consultorio

## Como instalar en tu computadora (Windows/Mac)

Abre `index.html` con doble clic. Funciona en Chrome/Edge/Firefox sin internet.

## Como instalar en celular o tablet (Android / iPhone / iPad)

Esta carpeta ahora es una "PWA" (Progressive Web App) — se puede instalar
como app real en tu telefono, con icono en pantalla de inicio, sin pasar
por Play Store ni App Store.

### Paso 1 — Sube la carpeta a tu telefono/tablet

Necesitas tener esta carpeta accesible desde el navegador del telefono. Las
formas mas faciles:

**Opcion A — Google Drive**
1. Sube la carpeta completa `CuatroPatas` a tu Google Drive
2. En el telefono, comparte la carpeta contigo mismo o usa la app de Drive
3. Esto NO abre la app directo — necesitas un mini servidor local (sigue al Paso 2)

**Opcion B — Servidor local simple (recomendado)**
La forma mas confiable es correr un mini servidor desde tu computadora y
abrirlo desde el telefono conectado a la misma red WiFi:

1. En tu computadora, abre una terminal dentro de la carpeta `CuatroPatas`
2. Si tienes Python instalado, corre:
   ```
   python -m http.server 8000
   ```
3. Busca la IP de tu computadora (en CMD: `ipconfig`, busca "Dirección IPv4")
4. En el navegador del telefono (conectado al mismo WiFi), entra a:
   ```
   http://TU_IP_AQUI:8000
   ```
   Ejemplo: `http://192.168.1.105:8000`

### Paso 2 — Instalar como app desde el navegador

**En Android (Chrome):**
1. Abre la direccion de arriba en Chrome
2. Te va a aparecer un banner o un menu (3 puntitos arriba a la derecha) con
   la opcion **"Instalar app"** o **"Agregar a pantalla de inicio"**
3. Confirma — te crea un icono como cualquier app instalada

**En iPhone/iPad (Safari):**
1. Abre la direccion en Safari (debe ser Safari, no Chrome, para que funcione el instalado)
2. Toca el boton de Compartir (el cuadrito con flecha hacia arriba)
3. Busca **"Agregar a pantalla de inicio"**
4. Confirma — te crea un icono

### Importante: cada dispositivo tiene sus propios datos

La computadora, la tablet, y el celular **NO comparten pacientes
automaticamente** — cada uno guarda su propia informacion por separado.
Si quieres pasar pacientes de un dispositivo a otro, usa el backup:

1. En el dispositivo origen: F12 (o consola del navegador) → `DB.exportJSON()`
2. Pasa ese archivo `.json` al otro dispositivo (por correo, Drive, etc.)
3. En el dispositivo destino: F12 → `DB.importJSON(\`PEGA_AQUI_EL_JSON\`)` →
   `location.reload()`

## Funciones principales

- Registrar pacientes con ficha completa (raza, tutor, vacunas, nutricion, etc.)
- Registrar consultas dentro del mismo paciente (motivo, exploracion, diagnostico, tratamiento)
- Recordatorios opcionales con notificacion el dia que elijas
- Imprimir ficha completa del paciente (boton "Imprimir" en su expediente)
- Buscador de pacientes y consultas

## Estructura de archivos

```
CuatroPatas/
├── index.html          ← Panel principal
├── manifest.json        ← Configuracion de la PWA (instalable)
├── service-worker.js    ← Permite que funcione sin internet una vez instalada
├── icons/                ← Iconos de la app en varios tamaños
├── css/
│   ├── style.css         ← Estilos generales (incluye diseño para celular/tablet)
│   └── print.css         ← Estilos de impresion
├── js/db.js               ← Base de datos (localStorage)
└── pages/
    ├── pacientes.html
    ├── nuevo-paciente.html
    ├── detalle-paciente.html
    └── consultas.html
```
