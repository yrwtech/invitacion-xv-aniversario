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


## 10. RSVP por WhatsApp

Probar tanto en Android como en iPhone:

1. Abrir la invitación, preferentemente desde un enlace recibido por WhatsApp.
2. Añadir `?reset=1` a la URL para reiniciar el RSVP de prueba.
3. Completar el formulario y enviarlo.
4. Comprobar que la respuesta se registre primero por el flujo normal de correo.
5. Verificar que aparezca **Enviar también por WhatsApp**.
6. Pulsar el botón.
7. Confirmar que WhatsApp abra la conversación del organizador con un mensaje prellenado.
8. Revisar que el mensaje contenga respuesta, nombre, correo, WhatsApp, comentarios, evento y fecha.
9. Pulsar **Enviar** en WhatsApp.
10. Probar también la respuesta **No asistiré**.


### Prueba de persistencia V10.6

Después de confirmar:
1. Comprobar que aparece el botón de WhatsApp.
2. Recargar la página.
3. Verificar que el botón siga apareciendo.
4. Abrir WhatsApp y comprobar que conserva los datos del RSVP.
5. Probar `?reset=1` y confirmar que desaparece el estado anterior.


## Prueba específica V10.7

Usar una URL fresca, por ejemplo:

```text
?reset=1&fresh=107
```

Después de enviar el RSVP:
- el modal NO debe cerrarse automáticamente;
- debe verse inmediatamente “✓ Tu respuesta ya fue registrada por correo”;
- debe aparecer “Enviar mi respuesta por WhatsApp”;
- al tocarlo debe abrirse un chat privado al organizador con el mensaje prellenado;
- “Continuar en la invitación” debe cerrar el modal;
- el botón de WhatsApp debe seguir visible en la tarjeta RSVP.


## Prueba de aceptación — YRWTECH-01

1. Confirmar que GitHub Pages abre desde `yrwtech.github.io`.
2. Abrir con `?reset=1&fresh=yrwtech01`.
3. Verificar que aparezca el correo bajo “¿Tienes alguna duda sobre el evento?”.
4. Enviar un RSVP completo.
5. Confirmar recepción en `EVENT_CONTACT_EMAIL`.
6. Confirmar que el remitente del servicio sea YRW Events bajo `yrw.events@gmail.com`.
7. Verificar que el modal muestre “Enviar mi respuesta por WhatsApp”.
8. Abrir WhatsApp y confirmar que el destino corresponde a `EVENT_WHATSAPP_TO`.
9. Cerrar/continuar y verificar que el botón de WhatsApp siga disponible en la tarjeta RSVP.
10. Recargar y comprobar persistencia.
