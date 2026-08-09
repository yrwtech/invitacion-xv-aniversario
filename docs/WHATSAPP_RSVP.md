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
