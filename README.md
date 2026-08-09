# Invitación XV — Sofía Mendoza

Invitación digital móvil desarrollada en HTML, CSS y JavaScript puro para publicarse con GitHub Pages.

**Versión base documentada:** V10.5

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
