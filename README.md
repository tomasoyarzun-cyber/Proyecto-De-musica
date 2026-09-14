# TuMusic - Plataforma web de música

## 1. Descripción del proyecto
* Es una plataforma web con interfaz estática que funciona como un reproductor de música.
* Esta aplicación resuelve la necesidad de tener una interfaz centralizada, rápida y amigable donde un usuario pueda visualizar su historial de canciones escuchadas y reproducir música directamente desde el navegador.

## 2. Integrantes
* Tomás Oyarzún.
* Sebastián Mamani.
* Clemente Puyo.

## 3. Acceso al proyecto y despliegue (IP pública)
El proyecto se encuentra en la nube de AWS utilizando una instancia EC2 con el servidor web nginx.
IP pública de la aplicación:
**http://34.229.177.154/**.

## 4. Rutas y vistas implementadas
* **Ruta principal (/)**: 
  Propósito: Desplegar la vista principal de la aplicación. Al ingresar a la raíz del servidor, nginx sirve el archivo index.html que contiene toda la interfaz de usuario.

* **Ruta de API (/api/test)**: 
  Propósito: Demostrar el manejo de seguridad y respuestas HTTP personalizadas a nivel de servidor. Esta ruta fue configurada en nginx para bloquear el acceso y devolver intencionalmente un código de estado **501 Not Implemented**.
