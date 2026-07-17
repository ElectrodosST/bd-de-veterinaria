# Cuatro Patas — Generar APK para Android

Esta carpeta convierte tu app web en una app Android real (.apk) usando
Capacitor. Sigue estos pasos EN ORDEN.

---

## PASO 1 — Instalar Android Studio

1. Ve a **https://developer.android.com/studio**
2. Descarga la version para Windows (boton grande verde "Download Android Studio")
3. Acepta los terminos, descarga (pesa varios GB, puede tardar segun tu internet)
4. Abre el instalador, dale "Next" a todo dejando las opciones por default
5. **IMPORTANTE:** cuando termine la instalacion, Android Studio se abre solo
   y te va a pedir descargar componentes adicionales (Android SDK, etc.) —
   dejalo descargar todo, puede tardar otros 10-20 minutos
6. Cuando termine, cierra Android Studio (ya no lo necesitas abierto por ahora)

## PASO 2 — Configurar variables de entorno (necesario para que funcione desde la terminal)

1. Busca en el menu inicio "Variables de entorno" y abre
   "Editar las variables de entorno del sistema"
2. Click en boton "Variables de entorno..."
3. En la seccion de abajo ("Variables del sistema"), busca si existe `ANDROID_HOME`.
   Si no existe, dale "Nueva":
   - Nombre: `ANDROID_HOME`
   - Valor: `C:\Users\TU_USUARIO\AppData\Local\Android\Sdk`
     (reemplaza TU_USUARIO por tu nombre de usuario de Windows, ej. kevin)
4. Busca la variable `Path` en la misma lista, dale "Editar", y agrega estas
   2 lineas nuevas (boton "Nuevo"):
   - `%ANDROID_HOME%\platform-tools`
   - `%ANDROID_HOME%\tools`
5. Dale Aceptar a todo
6. **Cierra todas las terminales abiertas y abre una nueva** para que tome el cambio

### Verificar que funciono
```
adb --version
```
Si te muestra un numero de version, quedo bien configurado.

---

## PASO 3 — Copiar el proyecto e instalar dependencias

1. Copia toda esta carpeta `CuatroPatasAndroid` a `C:\CuatroPatasAndroid`
2. Abre una terminal (CMD) dentro de esa carpeta
3. Corre:
```
npm install
```
Esto instala Capacitor (tarda 1-2 minutos).

## PASO 4 — Agregar la plataforma Android al proyecto

```
npx cap add android
```

Esto crea una carpeta `android` dentro de tu proyecto con todo lo necesario
para compilar un APK real.

## PASO 5 — Sincronizar tu codigo web con el proyecto Android

```
npx cap sync android
```

Corre este comando cada vez que hagas cambios a los archivos dentro de `www/`.

## PASO 6 — Abrir el proyecto en Android Studio

```
npx cap open android
```

Esto abre Android Studio automaticamente con tu proyecto cargado. La primera
vez que abre, Android Studio puede tardar varios minutos "indexando" el
proyecto — espera a que la barra de progreso de abajo termine.

## PASO 7 — Generar el APK

Dentro de Android Studio, ya con el proyecto abierto:

1. Ve al menu de arriba: **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
2. Espera a que compile (puede tardar varios minutos la primera vez)
3. Cuando termine, te aparece una notificacion abajo a la derecha que dice
   "APK(s) generated successfully" con un link **"locate"** — dale click ahi
4. Eso abre la carpeta donde quedo tu archivo, normalmente:
   ```
   android\app\build\outputs\apk\debug\app-debug.apk
   ```

Ese `app-debug.apk` es tu instalador.

---

## PASO 8 — Pasar el APK a tu tablet/celular Android

1. Copia el archivo `app-debug.apk` a tu telefono (USB, Google Drive, WhatsApp
   a ti mismo, lo que prefieras)
2. En el telefono, abre el archivo APK
3. Es posible que Android te muestre una advertencia de "instalar apps de
   origenes desconocidos" — esto es normal para apps que no vienen de Play
   Store, dale "Permitir" o "Configuracion" y activa el permiso para esa
   instalacion
4. Continua la instalacion normal

Tu app queda instalada con icono propio, como cualquier app del Play Store.

---

## Para hacer cambios despues

Si en el futuro yo te doy archivos nuevos para actualizar la app (como hicimos
con la version de Windows), el proceso es:

1. Reemplaza los archivos correspondientes dentro de la carpeta `www\`
2. Corre `npx cap sync android`
3. Corre `npx cap open android` (o si ya esta abierto, solo reconstruye con
   Build → Build APK(s) de nuevo)
4. Genera el nuevo APK y vuelve a instalarlo en tu telefono (se actualiza
   sobre el anterior, no se duplica)

---

## Notas importantes

- Este APK es para **pruebas/uso personal** (se llama "debug" build). Si algun
  dia lo quieres subir a Google Play Store de verdad, hay un paso adicional
  de "firmar" la app que es distinto — avisame cuando llegues a ese punto.
- Los datos de esta app Android son completamente separados de tu version
  de Windows — cada uno guarda su propia informacion.
- Cada vez que reinicies tu computadora, antes de usar comandos de `cap`,
  asegurate de tener una terminal nueva abierta (no reutilices una vieja).
