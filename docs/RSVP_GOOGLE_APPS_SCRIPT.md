# RSVP con Google Apps Script

## Archivo

Usa `google-apps-script-rsvp.gs`.

## Propiedad obligatoria

En **Configuración del proyecto → Propiedades de script**:

```text
RSVP_EMAIL_TO = correo_destino
```

## Despliegue

Publicar como **Aplicación web**.

Después de modificar el código:

1. Implementar.
2. Administrar implementaciones.
3. Editar la implementación existente.
4. Seleccionar **Nueva versión**.
5. Implementar.

Si no se publica una nueva versión, el editor puede mostrar código actualizado mientras la URL pública sigue ejecutando código anterior.

## Validación

Ejecutar `testEmail()`.

El correo debe incluir:

```text
Comentarios:
Este es un comentario breve de prueba.
```

Después probar desde la invitación con `?reset=1`.

## Payload recibido

- `respuesta`
- `nombre`
- `correo`
- `whatsapp`
- `comentarios`
- `evento`
- `fecha`

## Seguridad básica

- honeypot en el formulario;
- límites de longitud;
- no se usa base de datos;
- no se usa Google Sheets;
- el correo del invitado se utiliza como `replyTo`.
