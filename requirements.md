# Requisitos

Este será tu primer proyecto de Node, Express y MongoDB en Rock{theCode}, ¡prepárate para crear tu primer servidor!


Para preparar este proyecto, sigue los siguientes pasos:

- Crea una carpeta para el proyecto.


- Navega a la carpeta y lanza npm init -y.


- Instala las dos dependencias principales con npm i express mongoose.


- Asegúrate de tener Mongo Atlas preparado.


- Prepara tu server para escuchar en el puerto deseado.


- Crea un archivo .gitignore en la raíz de tu proyecto y añade dentro el texto node_modules para no subir la carpeta de módulos instalados a Github.


- Lanza ahora git init e inicializa tu repositorio.


- Crea un repositorio en Github y haz commit/push del contenido.


En este proyecto tendrás que crear un servidor de Express que trabaje con MongoDB a través de mongoose. Conectarás tu proyecto cuando el servidor se inicialice.


Tendrás que definir un modelo de datos, del tipo que prefieras, ya que va a ser tu primera API y queremos que la crees de lo que más te guste (coches, ropa, videojuegos, libros…).


Simplemente necesitas cumplir una serie de requisitos de aceptación que usaremos para evaluarlo.

## Criterios de aceptación:

- [ ] El servidor arranca en un puerto local cuando lanzas el comando npm run start.

- [ ] El servidor se conecta con una base de datos MongoAtlas.

- [ ] Hay un endpoint GET que me permite traer todos los documentos de un tipo de colección.

- [ ] Hay un endpoint GET que me permite traer un solo elemento por su id de una colección.

- [ ] Hay un endpoint POST que me permite crear un nuevo elemento en la colección correspondiente.

- [ ] Hay un endpoint PUT que me permite crear editar un elemento por su id en una colección.

- [ ] Hay un endpoint DELETE que me permite borrar un elemento por su id en una colección.
- [ ] El modelo de datos de MongoDB es un objeto con al menos cuatro claves distintas, aquí un ejemplo de algo esperable:  
```javascript
const document = {
  _id: 'id_del_documento',
  name: 'Pepe',
  surname: 'Rocker',
  job: 'Full Stack',
  studies: 'Rock{theCode}'
}
```