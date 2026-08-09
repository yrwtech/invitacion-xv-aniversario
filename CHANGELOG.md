# Changelog

## V10.5
- Añadido RSVP complementario por WhatsApp.
- Destino configurado en `config.js`.
- Mensaje prellenado con respuesta, nombre, correo, WhatsApp, comentarios, evento y fecha.
- Uso de `https://wa.me/` para Android, iOS y escritorio.
- El correo vía Google Apps Script continúa siendo el registro principal.
- El botón “Enviar también por WhatsApp” aparece después de registrar exitosamente el RSVP.
- El invitado conserva el control final: debe tocar **Enviar** dentro de WhatsApp.
- Documentación ampliada en `docs/WHATSAPP_RSVP.md` y guía de pruebas.


## V10.4
- Android abre Google Calendar en vez de descargar `.ics`.
- iPhone/iPad conserva flujo `.ics`.
- Botón renombrado a “Agregar al calendario”.
- Reducción de espacios ociosos entre “Mi historia continúa” y “Dónde y cuándo”.
- Firma `XV ✦` sustituida por `Sofía · XV años`.
- Tarjetas de ceremonia/recepción más transparentes y compactas.
- Música habilitada con `assets/audio/musica.mp3`.
- Intento de autoplay tras tocar el sello.
- Botón flotante para pausar/reanudar audio.
- Texto de mesa de regalos cambiado de “nuestra” a “mi mesa de regalos”.

## V10.3
- Itinerario multi-fecha.
- Cada evento puede incluir su propia fecha.
- Encabezados automáticos cuando cambia el día.

## V10.2
- Mensaje inicial corregido para no sugerir que Sofía es la invitada.
- Copy de apertura: “Sofía / Tiene algo muy especial que compartir contigo.”
- Se conserva `?reset=1`.

## V10.1
- `finale.jpg` movida antes del RSVP.
- Carrusel “Capítulos antes del gran día” compactado para móvil.
- Añadido `?reset=1` para limpiar únicamente el RSVP guardado.

## V10
- Itinerario convertido a línea de tiempo vertical.
- Galería narrativa con capítulos y fondo dinámico.
- Detalles con tarjetas tipo glass y progresión.
- Countdown rediseñado sin cuatro cajas.
- Nueva sección `finale`.
- Introducción del mensajero refinada.
- Uso ampliado de fotografías narrativas.

## V9
- El sello rojo del sobre se convierte en hotspot real de apertura.
- Coordenadas calibradas sobre imagen con `object-fit: cover`.
- RSVP guarda respuesta en `localStorage`.
- Botón “Salir” lleva a pantalla final sin acciones.

## RSVP / Google Apps Script
- Confirmado envío de comentarios.
- Si el editor de Apps Script contiene los cambios pero el correo no los muestra, debe publicarse una **nueva versión de la implementación** del Web App.
