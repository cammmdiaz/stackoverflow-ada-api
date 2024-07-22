# TRABAJO PRÁCTICO DEL MÓDULO N°3

# Introducción

Ésta es una API sobre Stackoverflow. Ésta nos permite realizar consultas, como mostrar todas las publicaciones dentro de Stackoverflow(las preguntas y respuestas) en un rango de fecha; buscar los comentarios de una publicación en específico por su id y fecha; los comentarios de un cierto usuario por su id; consultar todos los usuarios dentro del Stackoverflow; y que busque un usuario en específico según su id.

El proyecto está estructurado con ayuda del patrón MVC. También, creé un archivo client y un server (dentro del index) para así lograr ejecutar los requests. Todo el trabajo está desarrollado con el lenguaje Typescript. Se usó [**StackExchange**](https://api.stackexchange.com/docs) como external API.

### Detalle funcional

La información que provee esta API es:

- **Todas las publicaciones que se encuentran dentro de Stackoverflow, para un rango de fechas**. Detalle del request:

```bash
{ action:"/post/all", body: { from: "2024-07-01", to: "2024-07-15" } }
```

En el archivo [client.ts](./client.ts) se encuentran los mensajes de error o éxito según el resultado, desde la línea 14 a la 20.

- **Se puede buscar un comentario en específico por id y fecha (desde - hasta)**. Detalle del request:

```bash
{ action : "/post/comments", body: { postId: "78752899", from: "2024-07-01", to: "1721174400" }}
```

En el atributo postId se debe ingresar un id de post y en el from se coloca una fecha al igual que en el to para especificar de cuando hasta cuándo buscar los comentarios de ese post.
En el archivo [client.ts](./client.ts) se pueden ver los mensajes de error o éxitosos según el resultado, relacionados a éste servicio desde la línea 21 hasta la 25.

- **Todos los comentarios de un cierto usuario por id**. Detalle del request:

```bash
{ action: "/post/user/comments", body: { userId: "9393102" } }
```

En el atributo userId se debe ingresar un id de user válido.
En el archivo [client.ts](./client.ts) se pueden ver los mensajes de error o éxitoso según el resultado, relacionados a éste servicio desde la línea 26 hasta la 28.

- **Todos los usuarios que se encuentran dentro de Stackoverflow**. Detalle del request:

```bash
{ action: "/user/all" }
```

En el archivo [client.ts](./client.ts) se encuentra el mensaje de éxito en la línea 10 .

- **Se puede buscar un usuario en específico por id**. Detalle del request:

```bash
{ action: "/user/id", body: { userId: "223092" } }
```

En el atributo userId se debe ingresar un id de usuario.
En el archivo [client.ts](./client.ts) se pueden ver los mensajes de error o éxitoso según el resultado relacionados a este servicio, desde la línea 7 hasta la 9.

- **Logs**. Por cada solicitud, se conservan los requests y responses. Con esta acción se consiguen esos datos.

```bash
{ action: "/log/all" }
```

En el archivo [client.ts](./client.ts) se puede ver un ejemplo de esto en la línea 32.

También en el archivo client se pueden ver mensajes para verificar validaciones, de la línea 36 a 38.

***ACLARACION***: Todos los datos del body son obligatorios.

### Detalle técnico

El proyecto fue modularizado en las siguientes carpetas:

- controllers: éste contiene los controllers relacionadas a las diferentes funcionalidades (post, user y log).
- database: éste contiene la logica para conservar los logs, en un archivo json, y poder leerlos.
- external_api: éste contiene los requests a la api, separado por funcionalidad (post y user).
- models: éste contiene las interfaces (post.ts , user.ts y log.ts) y las clases (post_model.ts , user_model.ts y log_model.ts) relacionadas a los modelos. Adentro de las clases, se tiene la conexión con la external api o database, según corresponda.
- routers: éste contiene los routers a los diferentes controllers. En el archivo app.ts se encuentra la entrada a los distintos routers (post_router.ts , user_router.ts y log_router.ts).
- utils: acá se mantienen algunos archivos con cosas auxiliares, como los urls, constantes con mensajes de error, y demás.

En el index.ts se desarrolló la lógice del server, mientras que en el client.ts el cliente.

Éste proyecto corre en el puerto 7777.

### ¿Cómo se ejecuta el proyecto?

***1.Ejecute en la terminal:***
npm i

***2.Ejecute:***
npm run build

***3.Ejecute primero el server:***
npm run server

***4.Despues, cuando el server esté escuchando (en la consola tiene que ver el mensaje "Listening in port: 7777"), ejecute la siguiente instrucción para que el cliente funcione:***
npm run client

El resultado de la funcionalidad que haya ejecutado, se mostrará en la terminal donde el client se esté ejecutando.

Dentro del archivo client.ts se puede ir descomentando y comentando cada prueba, si quiere.
