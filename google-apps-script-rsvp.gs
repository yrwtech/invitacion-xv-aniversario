/**
 * YRW Events — Invitación XV RSVP
 * Backend YRWTECH-01
 *
 * Script Properties requeridas:
 * EVENT_CONTACT_EMAIL = correo del responsable del evento.
 * EVENT_WHATSAPP_TO    = WhatsApp del responsable, formato internacional, solo dígitos.
 */

function doGet(e) {
  var action = String(
    e && e.parameter && e.parameter.action
      ? e.parameter.action
      : ''
  );

  if (action === 'public-config') {
    var props = PropertiesService.getScriptProperties();

    var payload = {
      eventContactEmail: clean_(
        props.getProperty('EVENT_CONTACT_EMAIL'),
        160
      ),
      eventWhatsappTo: cleanPhone_(
        props.getProperty('EVENT_WHATSAPP_TO')
      )
    };

    return ContentService
      .createTextOutput(
        'window.__setYRWEventConfig(' +
        JSON.stringify(payload) +
        ');'
      )
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return jsonResponse_({
    ok: true,
    servicio: 'RSVP Invitación XV · YRW Events'
  });
}

function doPost(e) {
  try {
    var props = PropertiesService.getScriptProperties();

    var recipient = clean_(
      props.getProperty('EVENT_CONTACT_EMAIL'),
      160
    );

    if (!recipient) {
      throw new Error(
        'Falta configurar EVENT_CONTACT_EMAIL.'
      );
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
      throw new Error(
        'Faltan datos obligatorios del RSVP.'
      );
    }

    var subject =
      'RSVP XV · ' +
      respuesta +
      ' · ' +
      nombre;

    var body = [
      'RESPUESTA A LA INVITACIÓN',
      '',
      'Respuesta: ' + respuesta,
      'Nombre: ' + nombre,
      'Correo: ' + correo,
      'WhatsApp: ' + whatsapp,
      '',
      'Evento: ' + evento,
      'Fecha: ' + fecha,
      '',
      'Comentarios:',
      comentarios || '(Sin comentarios)'
    ].join('\n');

    GmailApp.sendEmail(
      recipient,
      subject,
      body,
      {
        name: 'RSVP Invitación XV · YRW Events',
        replyTo: correo
      }
    );

    return jsonResponse_({
      ok: true,
      mensaje: 'Respuesta enviada correctamente.'
    });

  } catch (err) {
    console.error(err);

    return jsonResponse_({
      ok: false,
      mensaje: String(
        err && err.message
          ? err.message
          : err
      )
    });
  }
}

function testEmail() {
  var recipient = clean_(
    PropertiesService
      .getScriptProperties()
      .getProperty('EVENT_CONTACT_EMAIL'),
    160
  );

  if (!recipient) {
    throw new Error(
      'Falta configurar EVENT_CONTACT_EMAIL.'
    );
  }

  GmailApp.sendEmail(
    recipient,
    'Prueba RSVP · YRW Events',
    'Prueba correcta de EVENT_CONTACT_EMAIL.',
    {
      name: 'RSVP Invitación XV · YRW Events'
    }
  );
}

function clean_(value, maxLength) {
  var text = String(
    value == null ? '' : value
  ).trim();

  if (maxLength && text.length > maxLength) {
    text = text.substring(0, maxLength);
  }

  return text;
}

function cleanPhone_(value) {
  return String(
    value == null ? '' : value
  )
    .replace(/\D/g, '')
    .substring(0, 20);
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(
      JSON.stringify(payload)
    )
    .setMimeType(
      ContentService.MimeType.JSON
    );
}
