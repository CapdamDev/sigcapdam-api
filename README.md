# SIGCAPDAM

![Logo](https://sig.capdam.gob.mx/media/SIGCAPDAM%20LOGO.png)

![Estado](https://img.shields.io/badge/Estado-En%20desarrollo-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

Sistema de Información Geográfica CAPDAM, en desarrollo. Departamento de Sistemas e Informática.

## Hecho en

![Elementary](https://img.shields.io/badge/elementaryOS-gray?style=flat-square&logo=elementary)
![VS Code Logo](https://img.shields.io/badge/VS-Code-blue?style=flat-square&logo=visual-studio-code)

## Lenguajes

![HTML](https://img.shields.io/badge/HTML-gray?style=flat-square&logo=html5)
![CSS](https://img.shields.io/badge/CSS-gray?style=flat-square&logo=css3)
![Bootstrap](https://img.shields.io/badge/TailwindCSS-gray?style=flat-square&logo=tailwindcss)
![JavaScript](https://img.shields.io/badge/JavaScript-gray?style=flat-square&logo=javascript)
![jQuery](https://img.shields.io/badge/jQuery-gray?style=flat-square&logo=jquery)
![Node.JS](https://img.shields.io/badge/Node.JS-gray?style=flat-square&logo=node.js)
![ExpressJS](https://img.shields.io/badge/ExpressJS-gray?style=flat-square&logo=express)
![OpenLayers](https://img.shields.io/badge/OpenLayers-gray?style=flat-square&logo=openlayers)
![Sequelize](https://img.shields.io/badge/Sequelize-gray?style=flat-square&logo=sequelize)
![MySQL](https://img.shields.io/badge/MySQL-gray?style=flat-square&logo=mysql)
![postman](https://img.shields.io/badge/Postman-gray?style=flat&logo=postman)
![Jade-Pug](https://img.shields.io/badge/Jade/Pug-gray?style=flat&logo=pug)
![Apache](https://img.shields.io/badge/Apache-gray?style=flat&logo=apache)

## Compatible con

![Chrome](https://shields.io/badge/Google%20Chrome-white?style=flat&logo=google-chrome)
![Edge](https://shields.io/badge/Microsoft%20Edge-gray?style=flat&logo=microsoft-edge)
![Firefox](https://shields.io/badge/Firefox-gray?style=flat&logo=firefox)
![Brave](https://shields.io/badge/Brave-white?style=flat&logo=brave)
![Safari](https://shields.io/badge/Safari-gray?style=flat&logo=safari)

## Instalación

Instalación de proyecto

Entra a la carpeta donde desees importar el proyecto, abre una terminal y ejecuta lo siguiente:

```bash
    git clone https://github.com/CapdamDev/sigcapdam-api
    cd sigcapdam
    npm i
```

### Configuración de la conexión a la Base de Datos

Y ahora tendremos un archivo llamado config.json en config/config.json, donde cambiaremos nuestra conexión a la base de datos (NOTA: Crear la base de datos antes de conectarla, ya que procederemos a hacer las migraciones):

```code
{
  "development": {
    "username": "root",
    "password": "",
    "database": "sigcapdam-api",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "sigcapdam-api",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "",
    "database": "sigcapdam-api",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

Deberás cambiar lo que se encuentra dentro de las comillas por la información de tu base de datos.

### Migraciones y base de datos

Una vez configurada la base de datos, procedemos a hacer las migraciones

```bash
    npx sequelize-cli db:migrate
```

### Importar el seeder base

Para esto ejecutamos el comando:

```bash
    npx sequelize-cli db:seed:all
```

Nos creara el usuario base que tiene todos los permisos del sistema (root user), permisos y roles principales.

### Ejecuta el proyecto

Ejecuta el proyecto en modo producción:

```bash
    npm run start
```

Si vas a entrar a desarrollo, ejecútalo de esta forma:

```bash
    npm run dev
```

### Uso de la API en POSTMAN

Utilizando POSTMAN, importar la colección de la carpeta postman/sigcapdam-api.json y seguir los pasos para hacer el registro de un usuario.

## Licencia

[MIT License](https://choosealicense.com/licenses/mit/)

### Propiedad

![Logo](https://pagos.capdam.gob.mx/assets/img/logo.png)

Todos los derechos reservados, 2024.
