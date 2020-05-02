import express from 'express';
const router = express.Router();

const getCourse = function (req, res) {
  res.send('Hello jade' + req.params.id);
};
const getCourses = function (req, res) {
  res.send('Hello controllers');
};

router.get('/', getCourses).get('/:id', getCourse);

export default router;
