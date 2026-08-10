# Seguridad — YRWTECH-01

GitHub Pages es público: cualquier valor escrito en HTML, CSS o JavaScript debe considerarse visible.

## Configuración operativa externa

Se mantiene en Google Apps Script → Script Properties:

```text
EVENT_CONTACT_EMAIL
EVENT_WHATSAPP_TO
```

`EVENT_CONTACT_EMAIL` recibe RSVP y también se muestra al invitado como contacto del evento.

`EVENT_WHATSAPP_TO` se usa para construir el destino de WhatsApp en tiempo de ejecución. No queda escrito literalmente en el repositorio, aunque el invitado final podrá conocer el número al abrir el chat.

## Contacto YRW Tech

`yrw.events@gmail.com` permanece público deliberadamente como firma y contacto comercial de YRW Tech. No es el contacto operativo del evento salvo durante pruebas.

## Endpoint

La URL del Web App no se considera secreto. El frontend debe conocerla para comunicarse con el backend.

## Entrega a otra familia

No editar el código para cambiar al responsable del evento. Modificar únicamente:

```text
EVENT_CONTACT_EMAIL
EVENT_WHATSAPP_TO
```
