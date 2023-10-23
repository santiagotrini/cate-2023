// necesitamos importar mongoose
import mongoose from 'mongoose'
import Post from './models/Post.js';
const DB = 'mongodb://127.0.0.1/blog';
const posts = [
  {
    id: 1,
    title: 'Algo',
    content: 'Cosas',
    author: 'Alguien'
  },
  {
    id: 2,
    title: 'Algun titulo',
    content: 'asd',
    author: 'Otra persona'
  },
  {
    id: 3,
    title: 'Bla bla',
    content: 'alguna cosa',
    author: 'yo'
  },
];

mongoose
  .connect(DB)
  .then(() => {
    // si nos conectamos con exito mostrar mensajes
    // e insertar los usuarios en el array
    console.log(`DB connected @ ${DB}`);
    console.log('Populating DB...');
    Post.insertMany(posts)
      .then((err, posts) => {
        if (err) throw err;
        // un mensaje con la cantidad de documentos insertados
        console.log(`${posts.length} documents inserted!`);
        // cerramos la conexion cuando terminamos
        mongoose.connection.close();
      })
      .catch(err => console.error(err));
  })
.catch(err => console.error(`Connection error ${err}`));
