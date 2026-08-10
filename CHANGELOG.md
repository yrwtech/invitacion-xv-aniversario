# Changelog

## YRWTECH-01
- Migración del repositorio a `yrwtech/invitacion-xv-aniversario`.
- Nuevo backend Apps Script creado y autorizado bajo `yrw.events@gmail.com`.
- Nuevo endpoint Web App definitivo.
- `EVENT_CONTACT_EMAIL` y `EVENT_WHATSAPP_TO` pasan a Script Properties.
- Eliminado el número de WhatsApp literal del frontend.
- Contacto del evento separado visualmente del contacto comercial YRW Tech.
- WhatsApp usa enlace directo `wa.me` y aparece dentro del modal tras enviar RSVP.
- El frontend obtiene el contacto del evento en tiempo de ejecución mediante `action=public-config`.
- Cache-busting actualizado a `yrwtech-01`.


## V10.7
- Corrección estructural del RSVP por WhatsApp.
- El enlace de WhatsApp aparece inmediatamente dentro del modal después del envío por correo.
- Se eliminó la dependencia de `window.location.href` disparado por JavaScript.
- WhatsApp usa ahora enlaces `<a href="https://wa.me/...">` directos.
- Se conserva además el botón en la tarjeta RSVP después de cerrar el modal o recargar.
- Se elimina el auto-cierre del modal después de 1.2 segundos para que el usuario pueda elegir conscientemente WhatsApp o continuar.
- Añadidas pistas de no-cache y versiones `?v=10.7` de CSS/JS/config para reducir problemas de caché en navegadores móviles.


## V10.6
- Corregido el caso en que “Enviar también por WhatsApp” no aparecía si el navegador ya tenía una respuesta RSVP guardada de una versión anterior.
- Se guarda ahora un segundo objeto de `localStorage` con nombre, correo, WhatsApp y comentarios para reconstruir el mensaje después de recargar.
- El botón de WhatsApp se restaura automáticamente al volver a abrir la invitación.
- Para respuestas antiguas sin datos guardados se muestra igualmente un mensaje resumido de WhatsApp.
- `?reset=1` elimina tanto la respuesta como los datos RSVP almacenados.


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
