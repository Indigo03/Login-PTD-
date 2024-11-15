const express = require('require');
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(express.json()); //middleaware

app.use('./auth', authRoutes);

app.listen(3000, () =>{
    console.log('Servidor en ejecución en http://localhost:3000')
});