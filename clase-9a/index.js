import express from 'express'; // ES6 imports
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import Post from './models/Post.js';

// config vars
const PORT = process.env.PORT || 3000;
const DB   = process.env.DB   || 'mongodb://127.0.0.1/blog';
// const express = require('express') // CommonJS
const app = express();
// agregar middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// connect to DB
mongoose.connect(DB)
  .then(() => console.log(`DB conectada en ${DB}`))
  .catch(err => console.error(err));

// rutas de la API
import postRouter from './routes/post.js';
app.use('/api', postRouter);




app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
