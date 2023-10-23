import express from 'express';
import {
  getAll,
  create,
  queryPost,
  getById,
  updatePost,
  deletePost
} from '../controllers/post.js';

const router = express.Router();

// control de acceso muy pavo
const auth = (req, res, next) => {
  // console.log('HOLA CONSOLA!');
  if (req.body.token === '1234')
    next();
  else
    res.status(401).send('no autorizado');
}
// para tener en cuenta lo de los middlewares


router.route('/posts')
  .get(auth,getAll)
  .post(create);

router.route('/posts/query')
  .get(queryPost);

router.route('/posts/:id')
  .get(getById)
  .put(updatePost)
  .delete(deletePost);

export default router;
