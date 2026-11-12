# Servicio web de registro e inicio de sesión

## Descripción
Este proyecto consiste en el desarrollo de un servicio web que permite registrar usuarios y validar sus credenciales mediante un proceso de autenticación.

Fue desarrollado utilizando Node.js, Express y JavaScript.

## Funcionalidades
- Registro de nuevos usuarios.
- Validación de campos obligatorios.
- Verificación de usuarios existentes.
- Protección de contraseñas mediante bcryptjs.
- Inicio de sesión con credenciales.
- Respuesta de error cuando los datos de autenticación son incorrectos.

## Tecnologías utilizadas
- Node.js
- Express
- JavaScript
- bcryptjs
- Git y GitHub
- Postman

## Instalación y ejecución
1. Instalar Node.js.
2. Descargar o clonar el repositorio.
3. Abrir la carpeta del proyecto en Visual Studio Code.
4. Ejecutar el comando `npm install`.
5. Iniciar el servidor con `node server.js`.
6. Acceder a `http://localhost:3000`.

## Rutas del servicio

**Registro**
- Método: POST
- Dirección: `/api/registro`

**Inicio de sesión**
- Método: POST
- Dirección: `/api/login`

Las solicitudes reciben los campos `usuario` y `contraseña` en formato JSON.

## Almacenamiento
Los usuarios se almacenan temporalmente en memoria durante la ejecución del servidor. Las contraseñas se guardan mediante hash utilizando bcryptjs.

## Autor
Paula Pulido

## Repositorio
https://github.com/paulaalpulidosi-eng/PAULA_PULIDO_AA5_EV01