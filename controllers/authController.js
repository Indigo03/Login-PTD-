// controllers/authController.js
const { verifyGoogleToken } = require('../config/googleAuth');

async function googleAuth(req, res) {
  const { token } = req.body;

  try {
    const userData = await verifyGoogleToken(token);
    const { sub: userId, email, name } = userData;

    //  buscar o crear el usuario en tu base 
    console.log('Usuario autenticado:', name, email, userId);

    res.status(200).json({ message: 'Usuario autenticado', user: { userId, name, email } });
  } catch (error) {
    console.error('Error al verificar el token:', error);
    res.status(401).json({ message: 'Autenticación fallida' });
  }
}

module.exports = { googleAuth };
