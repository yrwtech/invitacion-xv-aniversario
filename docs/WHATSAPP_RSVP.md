# RSVP por WhatsApp

## Objetivo

Añadir WhatsApp como canal complementario después de que el RSVP ya fue registrado por correo.

## Configuración

En `config.js`:

```js
whatsappRSVP: {
  activo: true,
  telefono: "523315209678",
  encabezado: "RESPUESTA A LA INVITACIÓN"
}
```

El número debe estar en formato internacional y contener solo dígitos.

Para México:

```text
52 + número nacional de 10 dígitos
```

## Mensaje generado

Ejemplo:

```text
💗 RESPUESTA A LA INVITACIÓN

XV de Sofía Mendoza
12 de diciembre de 2026

✅ Respuesta: Confirmo

👤 Nombre: Nombre del invitado
📧 Correo: correo@ejemplo.com
📱 WhatsApp: 3312345678

💬 Comentarios:
Muchas gracias por la invitación.
```

Para una respuesta negativa se usa `❌ Respuesta: No asistiré`.

## Compatibilidad

La URL utiliza:

```text
https://wa.me/NUMERO?text=MENSAJE
```

Es un enlace universal adecuado para Android, iOS y escritorio.

## Comportamiento

1. El formulario envía primero el RSVP al Web App de Google Apps Script.
2. La página marca la respuesta como registrada.
3. Aparece **Enviar también por WhatsApp**.
4. Al tocarlo, se abre WhatsApp con el mensaje prellenado.
5. El invitado pulsa **Enviar**.

La página web no intenta mandar mensajes automáticamente sin intervención del invitado.


## Persistencia V10.6

Además de la clave histórica:

```text
yrw-rsvp:<festejada>:<fechaISO>
```

se utiliza:

```text
yrw-rsvp-data:<festejada>:<fechaISO>
```

La segunda clave guarda localmente los datos necesarios para reconstruir el mensaje de WhatsApp después de una recarga.

Las respuestas creadas antes de V10.6 pueden no tener ese segundo objeto. En ese caso la invitación muestra igualmente el botón de WhatsApp y prepara un mensaje resumido con evento, fecha y respuesta.

Para una prueba limpia utiliza `?reset=1`.


## Corrección V10.7

La V10.7 cambia el flujo visual:

1. El usuario envía el formulario.
2. El correo se procesa como antes.
3. Sin cerrar el modal, aparece inmediatamente **Enviar mi respuesta por WhatsApp**.
4. El enlace es un `href` directo a `wa.me`.
5. El usuario puede abrir WhatsApp o pulsar **Continuar en la invitación**.
6. El botón queda disponible también en la tarjeta RSVP.

Este enfoque evita depender de un cambio de visibilidad que ocurra detrás del modal y reduce problemas de navegación programática en navegadores internos.


## YRWTECH-01

El número del organizador ya no se escribe en `config.js`.

Se obtiene desde:

```text
EVENT_WHATSAPP_TO
```

El frontend lo recibe en tiempo de ejecución desde Apps Script y construye un enlace directo `https://wa.me/...`.

El botón aparece dentro del modal después de enviar el RSVP y también permanece disponible en la tarjeta RSVP.
