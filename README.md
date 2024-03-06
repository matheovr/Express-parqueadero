# Proyecto Express - Parqueadero

Este es un proyecto de muestra que utiliza Node.js con Express y MySQL para crear un sistema básico de gestión de un parqueadero.

## Descripción del proyecto

El proyecto consta de un servidor Express que expone una API REST para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos MySQL. Permite registrar vehículos en un parqueadero y realizar operaciones básicas sobre esos registros.

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

- app.js: Archivo principal que configura el servidor Express y define las rutas de la API.
- db.js: Archivo que establece la conexión a la base de datos MySQL.
- routes/: Carpeta que contiene los archivos de definición de las rutas de la API.
- controllers/: Carpeta que contiene los controladores que manejan la lógica de las solicitudes HTTP.
- README.md: Este archivo que proporciona información sobre el proyecto.

## Requisitos

Para ejecutar este proyecto en tu máquina local, necesitas tener instalado Node.js y MySQL. Asegúrate de tener las siguientes dependencias:

- Node.js
- Express
- MySQL2
- Postman (opcional, para probar las rutas de la API)

## Instalación

1. Clona este repositorio en tu máquina local utilizando Git:

bash
`git clone <URL del repositorio>`

2. Instala las dependencias del proyecto utilizando npm:

npm install

3. Configura la conexion a la base de datos en el archivo `db.js` con tus credenciales MySQL
4. Inicia el servidor: `npm run dev`

## Uso
Una vez que el servidor esté en funcionamiento, puedes realizar solicitudes a la API utilizando herramientas como Postman. Aquí hay algunas rutas de ejemplo:

GET /api/registros: Obtener todos los registros de vehículos en el parqueadero.
POST /api/registros: Crear un nuevo registro de vehículo en el parqueadero.
GET /api/registros/:id: Obtener un registro específico por su ID.
DELETE /api/registros/:id: Eliminar un registro del parqueadero de acuerdo a su ID.
PATCH /api/registros/:id: Actualizar un registro del parqueadero de acuerdo a su ID.
Recuerda ajustar la URL y los parámetros según sea necesario para tu entorno local.

## Contribución
Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes abrir un nuevo issue o enviar una solicitud de extracción con tus mejoras.
