
const express = require('express');

// Importamos las rutas de autenticación.
const rutasAuth = require('./routes/auth');

// Creamos la aplicación.
const app = express();

// Definimos el puerto del servidor.
const PORT = 3000;

// Permite recibir información en formato JSON.
app.use(express.json());

// Ruta principal de la API.
app.get('/', (req, res) => {
    res.send('API de registro e inicio de sesión funcionando correctamente.');
});

// Conectamos las rutas de registro e inicio de sesión.
app.use('/api', rutasAuth);

// Iniciamos el servidor.
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
