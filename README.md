# Laboratorio 02
Hoy utilizaremos docker compose para poder desplegar su trabajo. Servicio web y una
base de datos
## Stack
API
- Minimal API
- Debe retornar un mensaje incluyendo mi nombre
- Docker
- docker run -d --rm -p 3000:3000 nmatsui/hello-world-api. 11c5eac8454f naughty_margulis
- docker run -d --rm -p 3001:3000 nmatsui/hello-world-api b491e0231cd5 epic_blackwell
- docker run -d --rm -p 3002:3000 nmatsui/hello-world-api 57a890139b1e determined_lehmann
BD
- PostgreSQL
- $ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d
postgres
# Indicaciones
## Comandos
```bash
docker compose up -d
```
## Configuración por entorno
```
MESSAGE=<Colocar nombre>
```
# Creditos
- Walter Ivan Leturia Rodriguez
# ETC