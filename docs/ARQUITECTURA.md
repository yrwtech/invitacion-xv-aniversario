# Arquitectura

## Principio

La invitación es deliberadamente ligera: HTML, CSS y JavaScript puro. No depende de React, Tailwind, GSAP ni WebGL para maximizar compatibilidad en navegadores embebidos como WhatsApp.

## Flujo

1. El usuario abre la URL.
2. `config.js` expone `window.INVITACION`.
3. `app.js` pinta contenido y conecta interacciones.
4. El mensajero muestra el sello como único punto de apertura.
5. Al tocar el sello:
   - se abre la invitación;
   - se intenta iniciar música si está activa.
6. El recorrido visual incluye hero, fecha, historia, foros, itinerario, galería, detalles, finale y RSVP.
7. RSVP envía datos al endpoint de Google Apps Script.
8. La respuesta queda recordada mediante `localStorage`.

## Responsabilidades

### `config.js`
Datos del evento, rutas y textos.

### `index.html`
Semántica y contenedores.

### `styles.css`
Diseño responsive, glassmorphism, animaciones, timeline y carruseles.

### `app.js`
- render;
- hotspot del sello;
- scroll cinema;
- timeline;
- galería;
- detalles;
- countdown;
- audio;
- calendario;
- RSVP;
- reset de pruebas.

## Persistencia

Clave:

```text
yrw-rsvp:<festejada>:<fechaISO>
```

`?reset=1` elimina únicamente esa clave.

## RSVP

El frontend envía con `POST`:

```text
respuesta
nombre
correo
whatsapp
comentarios
evento
fecha
```

El Web App usa `GmailApp.sendEmail`.

## Calendario

Android y Apple se tratan diferente por comportamiento de navegador:

- Android → URL de Google Calendar.
- iOS/otros → archivo `.ics`.

## Audio

No se debe confiar en autoplay al cargar la página. El intento de reproducción se hace tras el toque del sello, porque es una interacción explícita.

## Regla de assets

Los medios no deben contener textos variables del evento. El contenido dinámico siempre pertenece al código.


## RSVP por WhatsApp

WhatsApp funciona como canal complementario, no como sustituto del correo:

```text
Formulario RSVP
    ↓
Google Apps Script → correo
    ↓
Botón opcional “Enviar también por WhatsApp”
    ↓
wa.me → WhatsApp
    ↓
El invitado pulsa Enviar
```

Se usa `https://wa.me/` y no esquemas específicos como `whatsapp://` o `intent://`, para mejorar compatibilidad entre Android, iOS, escritorio y navegadores internos.

El navegador solo puede preparar y abrir el mensaje; WhatsApp requiere la acción final del usuario para enviarlo.


## Configuración runtime — YRWTECH-01

GitHub Pages solicita la configuración pública al Web App:

```text
https://script.google.com/macros/s/AKfycbzdIt8Nv1Uk66RlXbT28s9N7BF2Rsvg-K_FhXjVVcWEYkfgEDH6V6-l5eb6RQVOE8xj/exec?action=public-config
```

Apps Script devuelve JavaScript que invoca:

```js
window.__setYRWEventConfig(...)
```

La respuesta incluye únicamente:

```text
eventContactEmail
eventWhatsappTo
```

El correo destinatario de RSVP se toma de la misma propiedad `EVENT_CONTACT_EMAIL`, evitando divergencias entre contacto visible y destinatario real.
