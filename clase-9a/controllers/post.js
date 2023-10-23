import Post from '../models/Post.js';

export const getAll = (req, res) => {
  Post.find()
    .then(posts => {
      console.log(req.headers);
      res.status(200).json(posts);
    })
    .catch(err => console.error(err));
};

export const create = (req, res) => {
  console.log(req.body);
  const post = new Post({ ...req.body }); // operador spread
  post.save()
    .then(post => res.status(201).json(post));
};

export const queryPost = (req, res) => {
  Post.find(req.query)
    .then(posts => res.status(200).json(posts))
    .catch(err => console.error(err));
};

export const getById = (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.status(200).json(post))
    .catch(err => console.error(err));
};

export const updatePost = (req, res) => {
  const update = req.body;
  const options = {
    new: true
  };
  Post.findByIdAndUpdate(req.params.id, update, options)
    .then(post => res.status(200).json(post))
    .catch(err => console.error(err));
};

export const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({ msg: 'DELETE OK' }))
    .catch(err => console.error(err));
};
