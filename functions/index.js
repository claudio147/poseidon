/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const axios = require('axios');

// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
const senderEmail = functions.config().gmail.login;
const mailTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    clientId: '713762336079-cnafpqdrdog5v5ubeacbuoogh6gkmu44.apps.googleusercontent.com',
    clientSecret: 'R2bYH_-A7hHO5wd-Mf_t2OxZ'
  }
});

/**
 * CONTACT || E-mail to web administrator.
 */
exports.sendAdminContactRequest = functions.database.ref('/contacts/{uid}').onWrite(async(change) => {
  const snapshot = change.after;
  const val = snapshot.val();

  const mailOptions = {
    from: 'Fischereiverein Romanshorn <noreply@fischereiverein-romanshorn.ch>',
    replyTo: val.email,
    to: 'info@fischereiverein-romanshorn.ch',
    subject: 'Kontaktanfrage Webseite',
    text: `Name: ${val.name}, E-Mail: ${val.email}, Nachricht: ${val.message}`,
    html: `<!doctype html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body style="background-color: #0C5F79; color: #ffffff; padding: 30px 15px;">
  <img src="http://stage.fischereiverein-romanshorn.ch/img/logo_200x160.0a83cfc0.png" alt="Logo" style="max-width: 180px;">
  <h1>Neue Kontaktanfrage</h1>
  <p>Folgende Kontaktanfrage ist soeben über die Website eingegangen:</p>
  <table style="border: none; text-align: left; margin-top: 50px;">
    <tbody>
      <tr>
        <th>Name</th>
        <td> ${val.name}</td>
      </tr>
      <tr>
        <th>E-Mail</th>
        <td> ${val.email}</td>
      </tr>
      <tr>
        <th>Nachricht</th>
        <td> ${val.message}</td>
      </tr>
    </tbody>
  </table>
  <p style="margin-top: 50px;">Freundliche Grüsse & <strong>Petri Heil</strong></p>
  <p>Ihr Fischereiverein Romanshorn</p>
</body>
</html>
`,
    auth: {
      user: senderEmail,
      refreshToken: '1//04yxdZU9xEPZYCgYIARAAGAQSNwF-L9IrCFJoPR9hk6UTHttCX3NM4WVZ3si95TuV_SBDDPWHcAtvAuJNF6ZSMf84Ol2CaGfL-Go',
      accessToken: 'ya29.Il-9BzGPPlwRx6FNsuD2vR3cfXPh4747rRgFTzf8M3owSEcNoBCwkiDD_PECiXEUX0aVkLl5TiPOvsqAOaRhxJe2YARRNCTcgY0upCkwpOkRWyQP6ho3DaXOTQ15Z0BU6Q',
    }
  };

  try {
    await mailTransport.sendMail(mailOptions);
  } catch (error) {
    console.error('There was an error while sending the email:', error);
  }

  return null;
});

/**
 * CONTACT || Confirmation E-mail to user.
 */
exports.sendUserContactRequest = functions.database.ref('/contacts/{uid}').onWrite(async(change) => {
  const snapshot = change.after;
  const val = snapshot.val();

  const mailOptions = {
    from: 'Fischereiverein Romanshorn <noreply@fischereiverein-romanshorn.ch>',
    replyTo: 'info@fischereiverein-romanshorn.ch',
    to: val.email,
    subject: 'Kontaktanfrage',
    text: 'Wir haben Ihre Nachricht erhalten und es wird sich schnellstmöglich jemand bei Ihnen melden.',
    html: '<!doctype html>\n' +
      '<html lang="de">\n' +
      '<head>\n' +
      '  <meta charset="UTF-8">\n' +
      '  <meta name="viewport"\n' +
      '        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n' +
      '  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n' +
      '  <title>Document</title>\n' +
      '</head>\n' +
      '<body style="background-color: #0C5F79; color: #ffffff; padding: 30px 15px;">\n' +
      '  <img src="http://stage.fischereiverein-romanshorn.ch/img/logo_200x160.0a83cfc0.png" alt="Logo" style="max-width: 180px;">\n' +
      '  <h1>Vielen Dank für Ihre Anfrage</h1>\n' +
      '  <p>Vielen Dank für Ihre Kontaktanfrage. Wir haben diese erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>\n' +
      '  <p></p><p>Freundliche Grüsse & <strong>Petri Heil</strong></p>\n' +
      '  <p>Ihr Fischereiverein Romanshorn</p>\n' +
      '</body>\n' +
      '</html>\n',
    auth: {
      user: senderEmail,
      refreshToken: '1//04yxdZU9xEPZYCgYIARAAGAQSNwF-L9IrCFJoPR9hk6UTHttCX3NM4WVZ3si95TuV_SBDDPWHcAtvAuJNF6ZSMf84Ol2CaGfL-Go',
      accessToken: 'ya29.Il-9BzGPPlwRx6FNsuD2vR3cfXPh4747rRgFTzf8M3owSEcNoBCwkiDD_PECiXEUX0aVkLl5TiPOvsqAOaRhxJe2YARRNCTcgY0upCkwpOkRWyQP6ho3DaXOTQ15Z0BU6Q',
    }
  };

  try {
    await mailTransport.sendMail(mailOptions);
  } catch (error) {
    console.error('There was an error while sending the email:', error);
  }

  return null;
});

/**
 * REGISTRATION || Confirmation E-mail to user.
 */
exports.sendAdminRegistrationRequest = functions.database.ref('/registration/{uid}').onWrite(async(change) => {
  const snapshot = change.after;
  const val = snapshot.val();

  const mailOptions = {
    from: 'Fischereiverein Romanshorn <noreply@fischereiverein-romanshorn.ch>',
    replyTo: val.email,
    to: 'info@fischereiverein-romanshorn.ch',
    subject: 'Neue Anmeldung Fischereiverein Romanshorn',
    text: `Vorname: ${val.firstName}, Nachname: ${val.lastName}, Strasse: ${val.street} ${val.streetNumber}, PLZ/Ort: ${val.zip} ${val.city}, Telefon: ${val.phone}, E-Mail: ${val.email}, Geburtsdatum: ${val.birthDate}, Mitgliedschaft: ${val.memberType}, Nachricht: ${val.message}`,
    html: `<!doctype html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body style="background-color: #0C5F79; color: #ffffff; padding: 30px 15px;">
  <img src="http://stage.fischereiverein-romanshorn.ch/img/logo_200x160.0a83cfc0.png" alt="Logo" style="max-width: 180px;">
  <h1>Neue Mitglieds- Anmeldung</h1>
  <p>Folgende Neuanmeldung ist über die soeben über die Website eingegangen:</p>
  <table style="border: none; text-align: left; margin-top: 50px;">
    <tbody>
      <tr>
        <th>Vorname</th>
        <td> ${val.firstName}</td>
      </tr>
      <tr>
        <th>Nachname</th>
        <td> ${val.lastName}</td>
      </tr>
      <tr>
        <th>Strasse</th>
        <td> ${val.street} ${val.streetNumber}</td>
      </tr>
      <tr>
        <th>PLZ / Ort</th>
        <td> ${val.zip} / ${val.city}</td>
      </tr>
      <tr>
        <th>Geburstdatum</th>
        <td> ${val.birthDate}</td>
      </tr>
      <tr>
        <th>Telefon</th>
        <td> ${val.phone}</td>
      </tr>
      <tr>
        <th>E-Mail</th>
        <td> ${val.email}</td>
      </tr>
      <tr>
        <th>Mitgliedschaft</th>
        <td> ${val.memberType}</td>
      </tr>
      <tr>
        <th>Bemerkungen</th>
        <td> ${val.message}</td>
      </tr>
    </tbody>
  </table>
  <p style="margin-top: 50px;">Freundliche Grüsse & <strong>Petri Heil</strong></p>
  <p>Ihr Fischereiverein Romanshorn</p>
</body>
</html>
`,
    auth: {
      user: senderEmail,
      refreshToken: '1//04yxdZU9xEPZYCgYIARAAGAQSNwF-L9IrCFJoPR9hk6UTHttCX3NM4WVZ3si95TuV_SBDDPWHcAtvAuJNF6ZSMf84Ol2CaGfL-Go',
      accessToken: 'ya29.Il-9BzGPPlwRx6FNsuD2vR3cfXPh4747rRgFTzf8M3owSEcNoBCwkiDD_PECiXEUX0aVkLl5TiPOvsqAOaRhxJe2YARRNCTcgY0upCkwpOkRWyQP6ho3DaXOTQ15Z0BU6Q',
    }
  };

  try {
    await mailTransport.sendMail(mailOptions);
  } catch (error) {
    console.error('There was an error while sending the email:', error);
  }

  return null;
});

/**
 * Registration || Confirmation E-mail to user.
 */
exports.sendUserRegistrationRequest = functions.database.ref('/registration/{uid}').onWrite(async(change) => {
  const snapshot = change.after;
  const val = snapshot.val();

  const mailOptions = {
    from: 'Fischereiverein Romanshorn <noreply@fischereiverein-romanshorn.ch>',
    replyTo: 'info@fischereiverein-romanshorn.ch',
    to: val.email,
    subject: 'Anmeldung Fischereiverein Romanshorn',
    text: 'Wir haben Ihre Anmeldung erhalten und werden uns bei Ihnen melden sobald diese geprüft wurde.',
    html: '<!doctype html>\n' +
      '<html lang="de">\n' +
      '<head>\n' +
      '  <meta charset="UTF-8">\n' +
      '  <meta name="viewport"\n' +
      '        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n' +
      '  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n' +
      '  <title>Document</title>\n' +
      '</head>\n' +
      '<body style="background-color: #0C5F79; color: #ffffff; padding: 30px 15px;">\n' +
      '  <img src="http://stage.fischereiverein-romanshorn.ch/img/logo_200x160.0a83cfc0.png" alt="Logo" style="max-width: 180px;">\n' +
      '  <h1>Vielen Dank für Ihre Anmeldung</h1>\n' +
      '  <p>Wir haben die Anfrage erhalten und werden diese umgehend prüfen.<br>Nach der Prüfung der Anfrage werden wir uns bei Ihnen melden.</p>\n' +
      '  <p>Freundliche Grüsse & <strong>Petri Heil</strong></p>\n' +
      '  <p>Ihr Fischereiverein Romanshorn</p>\n' +
      '</body>\n' +
      '</html>\n',
    auth: {
      user: senderEmail,
      refreshToken: '1//04yxdZU9xEPZYCgYIARAAGAQSNwF-L9IrCFJoPR9hk6UTHttCX3NM4WVZ3si95TuV_SBDDPWHcAtvAuJNF6ZSMf84Ol2CaGfL-Go',
      accessToken: 'ya29.Il-9BzGPPlwRx6FNsuD2vR3cfXPh4747rRgFTzf8M3owSEcNoBCwkiDD_PECiXEUX0aVkLl5TiPOvsqAOaRhxJe2YARRNCTcgY0upCkwpOkRWyQP6ho3DaXOTQ15Z0BU6Q',
    }
  };

  try {
    await mailTransport.sendMail(mailOptions);
  } catch (error) {
    console.error('There was an error while sending the email:', error);
  }

  return null;
});

/*
 * Firebase Function to verify user response with Google recaptcha v3
 */
exports.sendRecaptcha = functions.https.onRequest(async(req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  const secret = functions.config().secret.googlerecaptchasecret;

  // Front-end will send the token
  const { token } = req.query;
  const response = await axios.get(`https://recaptcha.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`);
  const { data } = response;

  if (data.success) {
    // Send the score back
    return res.status(200).send({ score: data.score });
  }

  return res.status(500).send({ score: null });
});
