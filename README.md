
![Logo](https://sig.capdam.gob.mx/media/SIGCAPDAM%20LOGO.png)

# SIGCAPDAM

![Estado](https://img.shields.io/badge/Estado-En%20desarrollo-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-Apache-blue?style=for-the-badge)



### Lenguajes

![HTML](https://img.shields.io/badge/HTML-gray?style=flat-square&logo=html5)
![CSS](https://img.shields.io/badge/CSS-gray?style=flat-square&logo=css3)
![Bootstrap](https://img.shields.io/badge/BOOTSTRAP-gray?style=flat-square&logo=bootstrap)
![JavaScript](https://img.shields.io/badge/JavaScript-gray?style=flat-square&logo=javascript)
![jQuery](https://img.shields.io/badge/jQuery-gray?style=flat-square&logo=jquery)
![Node.JS](https://img.shields.io/badge/Node.JS-gray?style=flat-square&logo=node.js)
![ExpressJS](https://img.shields.io/badge/ExpressJS-gray?style=flat-square&logo=express)
![OpenLayers](https://img.shields.io/badge/OpenLayers-gray?style=flat-square&logo=openlayers)
![Sequelize](https://img.shields.io/badge/Sequelize-gray?style=flat-square&logo=sequelize)
![MySQL](https://img.shields.io/badge/MySQL-gray?style=flat-square&logo=mysql)
![postman](https://img.shields.io/badge/postman-gray?style=flat&logo=postman)
![Jade-Pug](https://img.shields.io/badge/Jade/Pug-gray?style=flat&logo=pug)


Sistema de Información Geográfica CAPDAM, en desarrollo. Departamento de Sistemas e Informática.



## Installation

Instalación de proyecto

Entra a la carpeta donde desees importar el proyecto, abre una terminal y ejecuta lo siguiente:

```bash
    git clone https://github.com/CapdamDev/sigcapdam'api
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
Deberás cambiar lo que se encuentra dentro de las comillas por la información de tu Base de Datos.

### Migraciones y base de datos

Una vez configurada la base de datos, procedemos a hacer las migraciones

```bash
    npx sequelize-cli db:migrate
```

+ NOTA: Revisar si los nombres de las tablas están en mayúsculas, si es así, tenemos que ir a migrations/ y cambiar el nombre de cada tabla en minúsculas, y si las tablas están en minúsculas proceder al siguiente paso.

### Importar datos a la base de datos

La base de datos necesita importar los datos de dos tablas que se encuentran en sql/ llamados node_permissions.sql y node_roles.sql, importa esos dos archivos para poder utilizar la API a continuación.


### Ejecuta el proyecto

Ejecuta el proyecto en modo producción:

```bash
    npm start
```

Si vas a entrar a desarrollo, ejecutalo de esta forma:
```bash
    nodemon
```

### Uso de la API en POSTMAN

Utilizando POSTMAN, importar la colección de la carpeta postman/sigcapdam-api.json y seguir los pasos para hacer el registro de un usuario.
## Licencia

[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)


![Logo](https://pagos.capdam.gob.mx/assets/img/logo.png)