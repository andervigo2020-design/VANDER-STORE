# VANDER STORE

> **Preparados hoy, protegidos mañana.**

Tienda virtual interactiva, responsive y accesible desarrollada exclusivamente con **HTML5, CSS3 y JavaScript ES6+ nativos** (sin frameworks ni dependencias externas de compilación) para un emprendimiento comercial simulado con fines académicos, enfocado en la comercialización de artículos de prevención y preparación familiar ante emergencias, lluvias intensas, inundaciones, cortes eléctricos y el Fenómeno El Niño.

---

## 1. Información Oficial del Proyecto

| Campo | Detalle Oficial |
|---|---|
| **Nombre comercial** | VANDER STORE |
| **Eslogan** | Preparados hoy, protegidos mañana. |
| **Naturaleza del negocio** | Emprendimiento comercial simulado para fines académicos |
| **Actividad principal** | Comercialización de artículos de preparación y prevención ante emergencias |
| **Público objetivo** | Familias, estudiantes, personas en zonas vulnerables y hogares prevenidos |
| **WhatsApp oficial** | +51 974 436 335 (`https://wa.me/51974436335`) |
| **Correo electrónico oficial** | `andervigo2020@gmail.com` |
| **Endpoint Formspree (POST)** | `https://formspree.io/f/xaeebgoy` |

---

## 2. Estructura y Organización de Archivos

Al descargar o preparar la carpeta `VANDER-STORE/` para su publicación, la estructura de archivos estáticos es la siguiente:

```text
VANDER-STORE/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── imagenes/
│   ├── logo.svg
│   ├── favicon.svg
│   ├── hero-prevencion.svg
│   └── productos/
│       ├── mochila.svg
│       ├── botiquin.svg
│       ├── linterna.svg
│       ├── radio.svg
│       ├── bateria.svg
│       ├── manta.svg
│       ├── silbato.svg
│       ├── bidon.svg
│       ├── poncho.svg
│       └── botas.svg
└── README.md
```

- **Ejecución local directa:** Basta con abrir `index.html` directamente en cualquier navegador moderno (Google Chrome, Microsoft Edge, Mozilla Firefox o Safari) o mediante cualquier servidor de archivos estáticos, sin necesidad de instalar librerías ni ejecutar compiladores para que la tienda funcione.

---

## 3. Catálogo Oficial de Productos (Precios Referenciales)

| ID | Producto | Categoría | Precio | Archivo de Imagen |
|---:|---|---|---:|---|
| 1 | Mochila de emergencia | Emergencia y primeros auxilios | S/ 79.90 | `imagenes/productos/mochila.svg` |
| 2 | Botiquín de primeros auxilios | Emergencia y primeros auxilios | S/ 39.90 | `imagenes/productos/botiquin.svg` |
| 3 | Linterna recargable | Energía y comunicación | S/ 29.90 | `imagenes/productos/linterna.svg` |
| 4 | Radio de emergencia | Energía y comunicación | S/ 59.90 | `imagenes/productos/radio.svg` |
| 5 | Batería portátil | Energía y comunicación | S/ 49.90 | `imagenes/productos/bateria.svg` |
| 6 | Manta térmica | Emergencia y primeros auxilios | S/ 12.90 | `imagenes/productos/manta.svg` |
| 7 | Silbato de emergencia | Emergencia y primeros auxilios | S/ 5.00 | `imagenes/productos/silbato.svg` |
| 8 | Bidón para agua | Emergencia y primeros auxilios | S/ 34.90 | `imagenes/productos/bidon.svg` |
| 9 | Poncho impermeable | Protección contra lluvias | S/ 19.90 | `imagenes/productos/poncho.svg` |
| 10 | Botas impermeables | Protección contra lluvias | S/ 59.90 | `imagenes/productos/botas.svg` |

---

## 4. Instrucciones de Configuración de Servicios Externos

1. **WhatsApp (`51974436335`):**
   - Ya se encuentra configurado en la barra superior, sección de contacto, pie de página, botón flotante y generador dinámico de pedidos (`https://wa.me/51974436335?text=...`).
   - No requiere llaves API ni registros adicionales. Al presionar **ENVIAR PEDIDO POR WHATSAPP**, se abrirá WhatsApp Web o la aplicación móvil con todo el detalle del pedido codificado para que el cliente lo revise y pulse **Enviar**.
2. **Formspree (`https://formspree.io/f/xaeebgoy`):**
   - Ya está integrado mediante método `POST` usando `fetch` y `FormData` con cabecera `Accept: application/json`.
   - **Nota importante para el estudiante:** Si es la primera vez que se envía un mensaje desde un dominio nuevo (por ejemplo, al publicar en Netlify), revisa la bandeja de entrada (y carpeta de *Spam* / *Promociones*) de `andervigo2020@gmail.com` por si Formspree solicita hacer clic en un correo único de activación o confirmación de formulario.

---

## 5. Guía Paso a Paso para Publicar Manualmente el Proyecto

> **Importante:** La publicación es realizada personalmente por el estudiante en sus propias cuentas de GitHub y Netlify siguiendo estos pasos.

### 5.1. Guía para subir el proyecto a GitHub

1. **Crear cuenta o iniciar sesión:** Ingresa a [https://github.com](https://github.com) e inicia sesión con tu cuenta (o regístrate gratuitamente si aún no tienes una).
2. **Crear un repositorio público:** Haz clic en el botón **+** (arriba a la derecha) y selecciona **New repository**.
3. **Nombrar el repositorio:**
   - En **Repository name**, escribe exactamente: `VANDER-STORE`
   - En visibilidad, selecciona **Public**.
   - Deja desmarcada la casilla *Add a README file* (ya que subirás el `README.md` incluido en tu proyecto) y haz clic en **Create repository**.
4. **Subir los archivos y carpetas:**
   - En la pantalla del repositorio recién creado, haz clic en el enlace **uploading an existing file**.
   - Abre en tu computadora la carpeta de tu proyecto y selecciona **su contenido interior** (`index.html`, `README.md` y las carpetas `css`, `js` e `imagenes`) y arrástralos juntos al recuadro de carga de GitHub.
5. **Verificar que `index.html` esté en la raíz:**
   - Antes de confirmar, comprueba en la lista de carga que los archivos aparezcan como `index.html`, `css/style.css`, `js/main.js`, `imagenes/...` (y **no** metidos dentro de una subcarpeta adicional).
6. **Confirmar la subida:**
   - Escribe un mensaje breve en *Commit changes* (por ejemplo: `Versión completa de VANDER STORE`) y presiona el botón verde **Commit changes**.
   - Verifica en la página principal del repositorio que se visualicen `index.html`, `css/`, `js/`, `imagenes/` y `README.md`.

### 5.2. Guía para desplegar gratuitamente en Netlify

1. **Ingresar a Netlify:** Abre [https://www.netlify.com](https://www.netlify.com).
2. **Crear cuenta o iniciar sesión:** Haz clic en **Log in** o **Sign up** y elige **Continue with GitHub** para vincular fácilmente tu cuenta.
3. **Conectar el repositorio de GitHub:**
   - En el panel principal de Netlify, haz clic en **Add new site** y selecciona **Import an existing project**.
   - Elige **GitHub** como proveedor y autoriza el acceso si el navegador lo solicita.
4. **Seleccionar `VANDER-STORE`:** Busca y haz clic sobre tu repositorio `VANDER-STORE`.
5. **Configurar el despliegue de un sitio estático:**
   - **Branch to deploy:** `main`
   - **Build command:** Déjalo **completamente vacío** (no requiere compilación).
   - **Publish directory:** Déjalo vacío o escribe `.` (la raíz del proyecto donde está `index.html`).
6. **Comprobar que no exista comando de compilación:** Asegúrate de que no haya ningún texto como `npm run build` en *Build command*, ya que el sitio funciona con HTML, CSS y JS nativos.
7. **Publicar el proyecto:** Haz clic en el botón **Deploy VANDER-STORE** (o **Deploy site**). En pocos segundos el estado cambiará a **Published**.
8. **Obtener el enlace público:** Copia la dirección pública generada (por ejemplo, `https://nombre-temporal.netlify.app`).
9. **Personalizar el nombre del sitio (opcional):**
   - Entra a **Site configuration** → **Site details** → **Change site name**.
   - Escribe un nombre disponible como `vander-store` o `vander-store-peru` y presiona **Save** para obtener un enlace limpio como `https://vander-store.netlify.app`.
10. **Verificar la página publicada:** Abre el enlace público desde una computadora y desde tu celular. Comprueba las imágenes, el carrito, el botón de WhatsApp y el envío del formulario de contacto.

### 5.3. Guía para realizar actualizaciones posteriores

Si más adelante deseas cambiar un texto o ajustar algún detalle:

1. **Modificar archivos:** Abre el archivo correspondiente (`index.html`, `css/style.css` o `js/main.js`) en tu editor de código (como VS Code).
2. **Guardar cambios:** Guarda el archivo y pruébalo abriendo `index.html` en tu navegador local.
3. **Actualizar GitHub:**
   - Si usas la web de GitHub: entra a tu repositorio `VANDER-STORE`, navega hasta la carpeta correspondiente, haz clic en **Add file** → **Upload files**, arrastra el archivo actualizado y presiona **Commit changes**.
   - Si usas Git por consola: ejecuta `git add .`, luego `git commit -m "Actualización de contenido"` y `git push`.
4. **Comprobar el nuevo despliegue en Netlify:** Netlify detecta automáticamente cualquier cambio en GitHub y actualiza el sitio público en unos 15 a 30 segundos (puedes verlo en la pestaña **Deploys** de Netlify).
5. **Verificar el resultado:** Recarga tu enlace público de Netlify (usa `Ctrl + F5` en computadora si deseas refrescar la memoria caché) y comprueba los cambios.

---

## 6. Documentación Explicativa para la Sustentación Académica

Esta sección está redactada de manera clara y directa para ayudarte a explicar y defender con seguridad cada parte técnica del proyecto frente al docente:

### 6.1. ¿Qué hace `index.html`?
Es la **estructura semántica** de la tienda virtual. Define ordenadamente todas las secciones de la página utilizando etiquetas HTML5 apropiadas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), así como los formularios con sus etiquetas `<label>`, botones accesibles y las ventanas modales de detalle, carrito y resumen de pedido.

### 6.2. ¿Para qué sirve `css/style.css`?
Controla toda la **presentación visual y la adaptación a pantallas (Responsive Design)**. Aplica la paleta corporativa obligatoria mediante variables CSS (`--azul-oscuro: #12304A`, `--naranja: #F28C28`, `--verde-azulado: #1B8A8F`, `--blanco: #FFFFFF`, `--gris-claro: #F4F6F8`), organiza las tarjetas con CSS Grid y Flexbox, asegura buen contraste de lectura, resalta el foco del teclado (`:focus-visible`) y adapta automáticamente la tienda a celulares mediante `@media queries`.

### 6.3. ¿Para qué sirve `js/main.js`?
Es el **motor interactivo** de la aplicación escrito en JavaScript ES6+ nativo (cargado con `defer`). Se encarga de generar las 10 tarjetas de productos desde un arreglo estructurado, filtrar y buscar mientras el usuario escribe, ordenar los resultados sin recargar la página, abrir y cerrar modales, administrar todas las operaciones del carrito, guardar los datos en el navegador, armar el mensaje de WhatsApp y enviar consultas reales a Formspree.

### 6.4. ¿Cómo funciona el carrito de compras?
El carrito es un arreglo de objetos en JavaScript (`estado.carrito`), donde cada elemento guarda únicamente el `id` del producto y la `cantidad` seleccionada (por ejemplo: `{ id: 1, cantidad: 2 }`).
- Si agregas un artículo nuevo, se inserta con cantidad `1`.
- Si agregas uno que ya estaba, incrementa su cantidad sin duplicar la fila.
- Permite aumentar (`+`), disminuir (`−`, bloqueando bajar de `1` para evitar cantidades cero o negativas), eliminar un artículo puntual o vaciar todo el carrito, actualizando al instante la interfaz y el contador superior.

### 6.5. ¿Cómo se calculan los precios con exactitud?
En JavaScript, operar directamente con decimales (como `0.1 + 0.2`) puede producir pequeños errores de redondeo (`0.30000000000000004`). Para evitarlo profesionalmente, **todos los precios se almacenan en céntimos enteros**:
- Por ejemplo, `S/ 79.90` se guarda como `7990` céntimos.
- El subtotal de un producto es `precioCentimos * cantidad` (multiplicación exacta entre números enteros).
- El total general es la suma entera de todos los subtotales.
- Solo al mostrar el monto en pantalla, la función `formatearMoneda(centimos)` separa los soles (`Math.floor(centimos / 100)`) y los céntimos (`centimos % 100` con dos dígitos), mostrando `S/ 79.90`.

### 6.6. ¿Cómo funciona `localStorage`?
`localStorage` es una memoria local integrada en el navegador web del usuario. Cada vez que el cliente agrega, modifica, elimina o vacía el carrito, `js/main.js` convierte el arreglo del carrito a texto JSON (`JSON.stringify`) y lo guarda bajo la clave `'vander_store_carrito_v1'`. Cuando la página se recarga, el programa lee esa clave (`JSON.parse`), valida que los identificadores y cantidades sean correctos y restaura el carrito automáticamente. Además, usa bloques `try / catch` para que la tienda siga funcionando en memoria si el navegador tiene restringido el almacenamiento.

### 6.7. ¿Cómo se genera el mensaje de WhatsApp?
Cuando el cliente completa sus datos y pasa al resumen de compra, la función `construirMensajePedidoWhatsapp()` recorre los artículos reales del carrito, calcula sus subtotales y el total general, e incorpora el nombre, teléfono, referencia de entrega y observaciones del cliente. Luego aplica `encodeURIComponent(mensaje)` para transformar espacios, tildes y saltos de línea a un formato válido de URL, generando el enlace oficial `https://wa.me/51974436335?text=...`. Al pulsar el botón, se abre directamente WhatsApp para que el cliente revise su pedido y presione **Enviar**.

### 6.8. ¿Cómo funciona Formspree?
Formspree es un servicio que permite a sitios web estáticos enviar formularios a un correo real sin necesitar un servidor propio. Cuando el visitante llena el formulario de contacto y supera la validación, `js/main.js` empaqueta los campos en un objeto `FormData` y los envía con `fetch()` mediante una petición HTTP `POST` al endpoint oficial `https://formspree.io/f/xaeebgoy`. Mientras se envía, desactiva el botón para evitar envíos dobles; si el servidor responde `respuesta.ok`, limpia el formulario y confirma el envío; si ocurre un corte de internet o error del servidor, conserva lo escrito por el usuario e informa el problema con claridad.

### 6.9. ¿Para qué sirven GitHub y Netlify?
- **GitHub:** Es una plataforma de almacenamiento y control de versiones en la nube donde guardamos ordenadamente el código fuente del proyecto (`VANDER-STORE`).
- **Netlify:** Es un servicio de alojamiento web (*hosting* estático) que se conecta con nuestro repositorio de GitHub y publica los archivos en internet mediante un enlace público gratuito con conexión segura (`https://`).

### 6.10. ¿Qué decisiones e implementaciones destacan en el código?
-Separación estricta de responsabilidades en tres capas (`index.html`, `css/style.css` y `js/main.js`).
- Uso de ilustraciones vectoriales SVG propias y ligeras para el logotipo, favicon, portada y cada uno de los 10 productos, además de un sistema de respaldo automático si alguna imagen fallara.
- Búsqueda inteligente insensible a mayúsculas y tildes (`normalize('NFD')`), combinada en tiempo real con filtros de categoría y cinco modos de ordenamiento.
- Proceso de compra en dos pasos (ingreso validado de datos y vista previa completa del resumen con botón para regresar y editar antes de abrir WhatsApp).
- Accesibilidad cuidada: navegación por teclado, cierre con tecla `Escape`, trampa de foco en ventanas modales y atributos `aria-live` para anunciar cambios dinámicos.

---

## 7. Auditoría de Funcionamiento y Lista de Pruebas (20 Pruebas)

| N.º | Prueba | Resultado | Detalle Técnico Verificado |
|---:|---|---|---|
| 1 | **Navegación** | **Ejecutada y aprobada** | Todos los enlaces del encabezado y pie de página (`#inicio`, `#productos`, `#categorias`, `#nosotros`, `#prevencion`, `#contacto`) apuntan a secciones reales existentes; cero enlaces `href="#"` o vacíos. |
| 2 | **Menú móvil** | **Ejecutada y aprobada** | El botón móvil alterna `.abierto` y `aria-expanded`, permite navegar y se cierra automáticamente al elegir una sección, hacer clic fuera, pulsar `Escape` o ampliar la pantalla. |
| 3 | **Búsqueda** | **Ejecutada y aprobada** | Filtra en tiempo real en cada pulsación (`input`), normalizando tildes y buscando coincidencias en nombre, descripción breve/completa y categoría. |
| 4 | **Categorías** | **Ejecutada y aprobada** | Las 3 categorías (5, 3 y 2 productos respectivamente) y la opción de mostrar todos sincronizan tarjetas y botones de filtro al instante. |
| 5 | **Ordenamiento** | **Ejecutada y aprobada** | Verificados los 5 modos: predeterminado (ID 1–10), precio menor a mayor (`S/ 5.00` a `S/ 79.90`), precio mayor a menor, nombre A–Z y nombre Z–A (`localeCompare('es')`). |
| 6 | **Modal de detalles** | **Ejecutada y aprobada** | Muestra imagen ampliada, categoría, nombre, precio, descripción completa y características; cierra con botón `×`, clic en fondo oscuro y tecla `Escape`. |
| 7 | **Carrito** | **Ejecutada y aprobada** | Agrega desde catálogo o modal sin duplicar filas, incrementa (`+`), disminuye (`−` bloqueado en mínimo `1`) y vacía el carrito completo. |
| 8 | **Cálculos** | **Ejecutada y aprobada** | Aritmética exacta en céntimos enteros (`7990 + 2990 * 2 = 13970` → `S/ 139.70`) sin errores de redondeo decimal. |
| 9 | **Eliminación** | **Ejecutada y aprobada** | Eliminar artículos individuales recalcula inmediatamente el contador superior, subtotales y total general. |
| 10 | **Persistencia** | **Ejecutada y aprobada** | El carrito se guarda y recupera desde `localStorage` (`vander_store_carrito_v1`) con validación estructural y manejo seguro `try/catch`. |
| 11 | **Carrito vacío** | **Ejecutada y aprobada** | Muestra el mensaje exacto requerido con botón funcional `EXPLORAR PRODUCTOS` e impide abrir o enviar el proceso de compra sin artículos. |
| 12 | **Datos del cliente** | **Ejecutada y aprobada** | Valida obligatoriedad y formato de nombre completo, teléfono de contacto (7–15 dígitos) y referencia de entrega antes de pasar al resumen, permitiendo regresar y editar. |
| 13 | **WhatsApp (generación)** | **Ejecutada y aprobada (envío final depende del usuario en WhatsApp)** | Genera dinámicamente `https://wa.me/51974436335?text=...` codificado con `encodeURIComponent()` con todos los artículos y totales reales, sin vaciar prematuramente el carrito. El envío definitivo se realiza cuando el cliente pulsa *Enviar* dentro de su aplicación WhatsApp. |
| 14 | **Formspree** | **Ejecutada y aprobada (recepción sujeta a conexión a internet y servicio Formspree)** | Configurado por `POST` hacia `https://formspree.io/f/xaeebgoy`, verificando los 6 estados obligatorios (inicial, validación, carga con botón deshabilitado, éxito confirmado por HTTP `response.ok`, error de red y error de servidor sin borrar campos). |
| 15 | **Fotografías / Ilustraciones** | **Ejecutada y aprobada** | Verificados los 13 archivos SVG originales (`logo.svg`, `favicon.svg`, `hero-prevencion.svg` y los 10 productos individuales), más contenedor de respaldo ante fallos. |
| 16 | **Responsive Design** | **Ejecutada y aprobada** | Puntos de quiebre verificados (`1040px`, `900px` y `640px`), con `overflow-x: clip` sin desplazamiento horizontal involuntario y botones táctiles de al menos `44px`. |
| 17 | **Consola JavaScript** | **Ejecutada y aprobada** | Cero errores de sintaxis, referencias nulas o advertencias de ejecución. |
| 18 | **Rutas relativas** | **Ejecutada y aprobada** | Todas las referencias entre `index.html`, `css/style.css`, `js/main.js` e `imagenes/...` emplean rutas relativas limpias en minúsculas, sin espacios ni tildes. |
| 19 | **Accesibilidad** | **Ejecutada y aprobada** | Incluye enlace para saltar al contenido, jerarquía `<h1>`–`<h3>`, `<label>` asociados, contraste WCAG AA, foco visible, trampa de foco en modales y regiones `aria-live`. |
| 20 | **Integración final** | **Ejecutada y aprobada** | Búsqueda, filtros, ordenamiento, modales, carrito persistente, proceso de compra WhatsApp y formulario Formspree operan conjuntamente sin conflictos. |

---

## 8. Limitaciones Propias de una Tienda Estática (Transparencia Académica)

Al tratarse de una aplicación web estática en el navegador (sin servidor backend propio ni base de datos centralizada), el proyecto presenta las siguientes limitaciones naturales que puedes explicar en tu sustentación:

1. **Carrito local por dispositivo/navegador:** El carrito persiste mediante `localStorage` en el navegador donde se realiza la compra; no se sincroniza entre distintos dispositivos de una misma persona porque no existe sistema de cuentas ni base de datos remota.
2. **Sin control de inventario compartido en tiempo real:** Los precios son referenciales para fines académicos y no existe descuento automático de stock entre múltiples visitantes simultáneos.
3. **Confirmación de pedido vía WhatsApp:** La tienda estructura y transfiere el pedido completo hacia WhatsApp (`51974436335`), pero el envío efectivo requiere que el usuario tenga conexión y presione el botón **Enviar** dentro de WhatsApp, coordinando allí la confirmación y el pago.
4. **Dependencia de red para Formspree:** El formulario de contacto requiere conexión activa a internet para comunicarse con los servidores de Formspree (`https://formspree.io/f/xaeebgoy`).
