
// Importamos Express para crear las rutas.
const express = require('express');

// Importamos bcryptjs para proteger las contraseñas.
const bcrypt = require('bcryptjs');

// Creamos un enrutador.
const router = express.Router();

// Base de datos temporal en memoria para almacenar usuarios.
const usuarios = [];

// --------------------------------------------------
// RUTA DE REGISTRO
// Permite crear un nuevo usuario.
// --------------------------------------------------
router.post('/registro', async (req, res) => {
    try {
        // Recibimos el usuario y la contraseña.
        const { usuario, contraseña } = req.body;

        // Validamos que los campos no estén vacíos.
        if (!usuario || !contraseña) {
            return res.status(400).json({
                mensaje: 'Debe ingresar usuario y contraseña.'
            });
        }

        // Verificamos si el usuario ya existe.
        const usuarioExistente = usuarios.find(
            u => u.usuario === usuario
        );

        if (usuarioExistente) {
            return res.status(409).json({
                mensaje: 'El usuario ya se encuentra registrado.'
            });
        }

        // Encriptamos la contraseña antes de guardarla.
        const contraseñaHash = await bcrypt.hash(contraseña, 10);

        // Guardamos el nuevo usuario.
        usuarios.push({
            usuario,
            contraseña: contraseñaHash
        });

        // Respondemos que el registro fue exitoso.
        res.status(201).json({
            mensaje: 'Usuario registrado correctamente.'
        });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error al registrar el usuario.'
        });
    }
});

// --------------------------------------------------
// RUTA DE INICIO DE SESIÓN
// Comprueba las credenciales del usuario.
// --------------------------------------------------
router.post('/login', async (req, res) => {
    try {
        // Recibimos las credenciales.
        const { usuario, contraseña } = req.body;

        // Validamos los campos.
        if (!usuario || !contraseña) {
            return res.status(400).json({
                mensaje: 'Debe ingresar usuario y contraseña.'
            });
        }

        // Buscamos el usuario registrado.
        const usuarioEncontrado = usuarios.find(
            u => u.usuario === usuario
        );

        // Si no existe, rechazamos la autenticación.
        if (!usuarioEncontrado) {
            return res.status(401).json({
                mensaje: 'Error en la autenticación.'
            });
        }

        // Comparamos la contraseña con el hash almacenado.
        const contraseñaValida = await bcrypt.compare(
            contraseña,
            usuarioEncontrado.contraseña
        );

        // Verificamos el resultado de la autenticación.
        if (contraseñaValida) {
            return res.status(200).json({
                mensaje: 'Autenticación satisfactoria.'
            });
        }

        res.status(401).json({
            mensaje: 'Error en la autenticación.'
        });

    } catch (error) {
        res.status(500).json({
            mensaje: 'Error interno del servidor.'
        });
    }
});

// Exportamos las rutas para utilizarlas en el servidor.
module.exports = router;
