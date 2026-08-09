/**
 * RSVP - Invitación XV
 * Web App de Google Apps Script.
 *
 * Requiere una propiedad de script:
 * RSVP_EMAIL_TO = correo que recibirá las respuestas
 *
 * Después de reemplazar este código, actualiza la implementación
 * del Web App para que la versión pública utilice estos cambios.
 */

function doGet() {
  return jsonResponse_({
    ok: true,
    servicio: 'RSVP Invitación XV'
  });
}

function doPost(e) {
  try {
    var recipient = PropertiesService
      .getScriptProperties()
      .getProperty('RSVP_EMAIL_TO');

    if (!recipient) {
      throw new Error('Falta configurar la propiedad de script RSVP_EMAIL_TO.');
    }

    var p = (e && e.parameter) ? e.parameter : {};

    var respuesta = clean_(p.respuesta, 40);
    var nombre = clean_(p.nombre, 100);
    var correo = clean_(p.correo, 120);
    var whatsapp = clean_(p.whatsapp, 25);
    var comentarios = clean_(p.comentarios, 280);
    var evento = clean_(p.evento, 120);
    var fecha = clean_(p.fecha, 80);

    if (!respuesta || !nombre || !correo || !whatsapp) {
      throw new Error('Faltan datos obligatorios de la respuesta.');
    }

    var subject = 'RSVP XV · ' + respuesta + ' · ' + nombre;

    var body = [
      'RESPUESTA A LA INVITACIÓN',
      '',
      'Respuesta: ' + respuesta,
      'Nombre: ' + nombre,
      'Correo: ' + correo,
      'WhatsApp: ' + whatsapp,
      'Evento: ' + evento,
      'Fecha: ' + fecha,
      '',
      'Comentarios:',
      comentarios || '(Sin comentarios)'
    ].join('\n');

    GmailApp.sendEmail(recipient, subject, body, {
      name: 'RSVP Invitación XV',
      replyTo: correo
    });

    return jsonResponse_({
      ok: true,
      mensaje: 'Respuesta enviada.'
    });

  } catch (err) {
    console.error(err);

    return jsonResponse_({
      ok: false,
      mensaje: String(err && err.message ? err.message : err)
    });
  }
}

function testEmail() {
  var recipient = PropertiesService
    .getScriptProperties()
    .getProperty('RSVP_EMAIL_TO');

  if (!recipient) {
    throw new Error('Falta configurar RSVP_EMAIL_TO.');
  }

  GmailApp.sendEmail(
    recipient,
    'Prueba RSVP Invitación XV',
    [
      'Este es un correo de prueba del Web App RSVP.',
      '',
      'Respuesta: Confirmo',
      'Nombre: Invitado de prueba',
      'Correo: prueba@example.com',
      'WhatsApp: +52 000 000 0000',
      'Evento: XV de prueba',
      'Fecha: Fecha de prueba',
      '',
      'Comentarios:',
      'Este es un comentario breve de prueba.'
    ].join('\n'),
    {
      name: 'RSVP Invitación XV'
    }
  );
}

function clean_(value, maxLength) {
  var text = String(value == null ? '' : value).trim();
  if (maxLength && text.length > maxLength) {
    text = text.substring(0, maxLength);
  }
  return text;
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
