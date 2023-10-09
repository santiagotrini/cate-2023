import express from 'express'; // ES6 imports
import mongoose from 'mongoose';
import cors from 'cors';
import Post from './models/Post.js';

// config vars
const PORT = process.env.PORT || 3000;
const DB   = process.env.DB   || 'mongodb://127.0.0.1/blog';
// const express = require('express') // CommonJS
const app = express();
// agregar middleware
app.use(express.json());
app.use(cors());
// connect to DB
mongoose.connect(DB)
  .then(() => console.log(`DB conectada en ${DB}`))
  .catch(err => console.error(err));


app.get('/posts', (req, res) => {
  Post.find()
    .then(posts => res.status(200).json(posts))
    .catch(err => console.error(err));
});

app.get('/posts/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.status(200).json(post))
    .catch(err => console.error(err));
});

app.get('/posts/id/:id', (req, res) => {
  Post.find({ id: req.params.id })
    .then(post => res.status(200).json(post))
    .catch(err => console.error(err));
});

app.post('/posts', (req, res) => {
  console.log(req.body);
  const post = new Post({ ...req.body }); // operador spread
  post.save()
    .then(post => res.status(201).json(post));
});

//
// app.get('/posts/query', (req, res) => {
//   console.log(req.query);
//   res.end();
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
