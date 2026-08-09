# Guía de pruebas

## 1. Apertura
- Abrir la invitación desde Safari, Chrome y navegador interno de WhatsApp.
- Confirmar que el nombre/texto no tape el rostro del mensajero.
- Tocar el sello rojo.
- Verificar que la invitación se abra.

## 2. Música
- Confirmar que existe `assets/audio/musica.mp3`.
- Tocar el sello.
- Verificar que el audio intente iniciar.
- Pausar y reanudar desde el botón flotante.

## 3. Scroll
- Revisar hero expansivo.
- Revisar transición de historia.
- Verificar ausencia de espacios verticales excesivos.
- Revisar tarjetas de ceremonia y recepción: deben dejar ver claramente la foto.

## 4. Itinerario
- Verificar encabezado de fecha.
- Añadir temporalmente un evento del día siguiente y comprobar que aparece un nuevo separador de fecha.

## 5. Galería
- Cada capítulo debe ser comprensible en una sola pantalla móvil.
- Swipe izquierda/derecha.
- Autoplay inicial.
- Después de interacción manual, no debe reanudarse automáticamente.

## 6. Calendario
### Android
- Pulsar “Agregar al calendario”.
- Debe abrir Google Calendar con datos prellenados.
- No debe aparecer el diálogo de volver a descargar `.ics`.

### iPhone/iPad
- Pulsar el botón.
- Validar flujo `.ics`.

## 7. RSVP
Usar antes:

```text
?reset=1
```

Probar:
- Confirmo;
- No asistiré;
- nombre;
- correo;
- WhatsApp;
- comentarios.

Validar correo recibido y que incluya `Comentarios:`.

## 8. Persistencia
- Tras responder, recargar.
- Los botones deben permanecer inactivos.
- Debe aparecer “Salir”.
- `?reset=1` debe restaurar el flujo de prueba.

## 9. Finale
- Debe aparecer antes del RSVP.
- Revisar legibilidad del nombre, fecha y lugar.
