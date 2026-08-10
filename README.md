> Versión actual: **YRWTECH-03**

# Invitación XV — Sofía Mendoza

Invitación digital móvil desarrollada en HTML, CSS y JavaScript puro para publicarse con GitHub Pages.

**Paquete base documentado:** YRWTECH-01

## Estructura principal

- `index.html` — estructura de la invitación.
- `styles.css` — estilos, animaciones y diseño responsive.
- `app.js` — interacción, carruseles, calendario, música, RSVP y `localStorage`.
- `config.js` — datos variables del evento.
- `google-apps-script-rsvp.gs` — backend de RSVP por correo.
- `robots.txt` — evita indexación por buscadores.
- `CHANGELOG.md` — historial de cambios.
- `docs/` — documentación funcional y técnica.

## Configuración rápida

La mayor parte del contenido editable vive en `config.js`:

- nombre de la quinceañera;
- fecha y hora;
- ceremonia y recepción;
- itinerario multi-fecha;
- galería;
- código de vestimenta;
- mesa de regalos;
- música;
- endpoint RSVP;
- textos finales.

## Fotografías

Las fotografías se cargan desde `assets/fotos/`. La regla del proyecto es que las imágenes sean **fotografía limpia**, sin nombres, fechas, botones, marcos, QR ni textos horneados. Todo texto variable debe superponerse desde HTML/CSS.

Consulta `docs/GUIA_DE_FOTOS.md`.

## Música

Ruta esperada:

```text
assets/audio/musica.mp3
```

La V10.4 tiene la música habilitada y trata de iniciarla cuando el usuario toca el sello. El botón flotante permite pausar/reanudar.

Consulta `docs/MUSICA.md`.

## RSVP

El formulario envía:

- respuesta;
- nombre;
- correo;
- WhatsApp;
- comentarios;
- evento;
- fecha.

El backend es Google Apps Script. Debe existir la propiedad de script:

```text
RSVP_EMAIL_TO
```

Consulta `docs/RSVP_GOOGLE_APPS_SCRIPT.md`.

## Reiniciar pruebas

Para borrar únicamente el RSVP almacenado localmente:

```text
?reset=1
```

Ejemplo:

```text
https://usuario.github.io/repositorio/?reset=1
```

## Calendario

- Android: abre un evento prellenado de Google Calendar para evitar el diálogo de descarga del `.ics`.
- iPhone/iPad y otros navegadores: genera un archivo `.ics`.

## Publicación recomendada

Reemplaza en un mismo commit:

```text
index.html
app.js
styles.css
config.js
```

Si cambias el Apps Script, actualiza además la implementación del Web App.

## Documentación

Consulta:

- `CHANGELOG.md`
- `docs/ARQUITECTURA.md`
- `docs/GUIA_DE_PRUEBAS.md`
- `docs/GUIA_DE_FOTOS.md`
- `docs/RSVP_GOOGLE_APPS_SCRIPT.md`
- `docs/MUSICA.md`
- `docs/ASSETS.md`


## RSVP por WhatsApp

La V10.5 mantiene el correo automático como registro principal y añade un segundo canal opcional por WhatsApp.

Después de registrar correctamente la respuesta aparece el botón:

```text
Enviar también por WhatsApp
```

La invitación abre un enlace universal `wa.me` con el mensaje prellenado. El invitado debe pulsar **Enviar** dentro de WhatsApp.

El destino se configura en `config.js`:

```js
whatsappRSVP: {
  activo: true,
  telefono: "523315209678",
  encabezado: "RESPUESTA A LA INVITACIÓN"
}
```

Consulta `docs/WHATSAPP_RSVP.md`.


### Persistencia del RSVP por WhatsApp

La V10.6 guarda además los datos necesarios para reconstruir el mensaje de WhatsApp después de recargar la página.

También conserva compatibilidad con respuestas registradas en versiones anteriores: si existe una respuesta antigua sin datos personales almacenados, se muestra un mensaje resumido de WhatsApp en vez de ocultar el botón.

`?reset=1` elimina tanto la respuesta como los datos locales del RSVP.


### WhatsApp V10.7

La acción de WhatsApp ya no depende únicamente de un botón dinámico debajo del RSVP. Después de enviar el formulario por correo, el mismo modal muestra inmediatamente **Enviar mi respuesta por WhatsApp**.

El enlace es un `<a href="https://wa.me/...">` real, no una redirección JavaScript. También se conserva una copia del botón en la tarjeta RSVP para respuestas ya registradas.


## YRWTECH-01 — infraestructura YRW

Repositorio objetivo:

```text
yrwtech/invitacion-xv-aniversario
```

GitHub Pages:

```text
https://yrwtech.github.io/invitacion-xv-aniversario/
```

Backend definitivo:

```text
https://script.google.com/macros/s/AKfycbzdIt8Nv1Uk66RlXbT28s9N7BF2Rsvg-K_FhXjVVcWEYkfgEDH6V6-l5eb6RQVOE8xj/exec
```

Los datos variables del evento ya no se escriben en GitHub.

En Google Apps Script → Propiedades del script:

```text
EVENT_CONTACT_EMAIL = correo del responsable del evento
EVENT_WHATSAPP_TO    = WhatsApp internacional del responsable, solo dígitos
```

`EVENT_CONTACT_EMAIL` cumple dos funciones:
- recibe los RSVP;
- aparece públicamente como contacto para dudas del evento.

El footer de YRW Tech es independiente y permanece como contacto comercial:
`yrw.events@gmail.com`.
