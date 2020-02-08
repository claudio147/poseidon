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
 * E-mail to web administrator.
 */
exports.sendEmailConfirmation = functions.database.ref('/contacts/{uid}').onWrite(async(change) => {
  const snapshot = change.after;
  const val = snapshot.val();

  const mailOptions = {
    from: 'Fischereiverein Romanshorn <noreply@fischereiverein-romanshorn.ch>',
    replyTo: val.email,
    to: 'info@fischereiverein-romanshorn.ch',
    subject: 'Kontaktformular Webseite',
    text: `Name: ${val.name}, E-Mail: ${val.email}, Nachricht: ${val.message}`,
    html: `<h1>Kontaktaufnahme Website</h1><div><b>Name:</b>${val.name}</div><div><b>E-Mail:</b>${val.email}</div><div><b>Nachricht:</b>${val.message}</div>`,
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
 * Confirmation E-mail to user.
 */
exports.sendUserEmailConfirmation = functions.database.ref('/contacts/{uid}').onWrite(async(change) => {
  const snapshot = change.after;
  const val = snapshot.val();

  const mailOptions = {
    from: 'Fischereiverein Romanshorn <noreply@fischereiverein-romanshorn.ch>',
    replyTo: 'info@fischereiverein-romanshorn.ch',
    to: val.email,
    subject: 'Fischereiverein Romanshorn',
    text: 'Wir haben Ihre Nachricht erhalten und es wird sich schnellstmöglich jemand bei Ihnen melden.',
    html: '<h1>Vielen Dank für die Anfrage</h1><div><p>Wir haben Ihre Nachricht erhalten und es wird sich schnellstmöglich jemand bei Ihnen melden.</p></div>',
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
