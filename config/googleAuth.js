// config/googleAuth.js
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('361848907137-rqiai8vfudup0a7c1hlho6osl2odrc0c.apps.googleusercontent.com'); // Reemplaza con tu ID de cliente

async function verifyGoogleToken(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: '361848907137-rqiai8vfudup0a7c1hlho6osl2odrc0c.apps.googleusercontent.com' // Asegúrate de que coincida con tu ID de cliente de Google
  });
  return ticket.getPayload(); // Información del usuario
}

module.exports = { verifyGoogleToken };
