# Laboratorio 02 - Docker Compose

Este proyecto consiste en el despliegue de una aplicación utilizando **Docker Compose**.

La solución está compuesta por servicios API y una base de datos PostgreSQL, utilizando contenedores Docker, variables de entorno, volúmenes y redes personalizadas.

---

# Arquitectura del proyecto

El proyecto contiene los siguientes servicios:

## API

Se implementaron **3 instancias de la API** utilizando una imagen construida localmente mediante Dockerfile.

| Servicio | Puerto |
|----------|--------|
| api_3000 | 3000 |
| api_3001 | 3001 |
| api_3002 | 3002 |

Cada API retorna un mensaje configurado mediante variables de entorno.

Ejemplo de respuesta:

```json
{
  "mensaje": "Hola me llamo Angel Velasquez"
}
```

Acceso:

- http://localhost:3000
- http://localhost:3001
- http://localhost:3002


---

# Base de Datos

## PostgreSQL

Motor utilizado:

- PostgreSQL 16

Configuración:

| Servicio | Puerto |
|----------|--------|
| PostgreSQL | 5432 |

La base de datos utiliza un volumen Docker para mantener la información almacenada.


---

# Variables de entorno

El proyecto utiliza variables de entorno para configurar los servicios.

Archivo utilizado:

```
.env
```

Ejemplo:

```env
POSTGRES_DB=empresa
POSTGRES_USER=usuario
POSTGRES_PASSWORD=123456
```

También se incluye:

```
.env.example
```

para mostrar la estructura necesaria sin exponer información privada.


---

# Volúmenes Docker

Los volúmenes permiten almacenar información de forma persistente aunque los contenedores sean eliminados.

Volumen utilizado:

```yaml
postgres_data:/var/lib/postgresql/data
```

## Tipos de volúmenes Docker

### Volumen administrado

Docker crea y administra automáticamente el almacenamiento.

### Bind Mount

Permite conectar una carpeta del equipo local con una carpeta dentro del contenedor.

Ejemplo:

```yaml
./datos:/var/lib/postgresql/data
```

### Volumen temporal

Almacena información durante la ejecución del contenedor y puede eliminarse al finalizar.


---

# Redes Docker

El proyecto utiliza una red personalizada:

```yaml
red-app
```

Tipo:

```
bridge
```

## Tipos de redes Docker

### Bridge

Permite la comunicación entre contenedores dentro del mismo equipo.

### Host

El contenedor utiliza directamente la red del equipo anfitrión.

### None

Deshabilita la comunicación de red del contenedor.

### Overlay

Permite comunicación entre contenedores ubicados en diferentes máquinas.


---

# Despliegue del proyecto

Construir las imágenes:

```bash
docker compose build
```

Levantar los servicios:

```bash
docker compose up -d
```

Ver contenedores activos:

```bash
docker ps
```

Detener servicios:

```bash
docker compose down
```


---

# Estructura del proyecto

```
Lab02-02/

├── Api/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── docker-compose.yml
├── .env
├── .env.example
├── .gitignore
└── README.md
```


---

# Conventional Commits

Los cambios del proyecto fueron organizados utilizando Conventional Commits.

Ejemplos:

```text
chore: inicializacion del proyecto docker

feat: implementacion de api minima con node express

feat: configuracion de tres servicios api

feat: integracion de base de datos postgres

docs: actualizacion de documentacion docker compose
```


---

# Repositorio

Proyecto desarrollado para el laboratorio de Docker Compose utilizando:

- API Node.js
- Docker
- PostgreSQL
- Docker Compose