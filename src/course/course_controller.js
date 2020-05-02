import express from 'express';
const router = express.Router();
import course from './course.js';

const getCourse = function (req, res) {
  course.insertCourse();
  res.send('Hello jade' + req.params.id);
};
const getCourses = async function (req, res) {
  const courses = await course.queryAllCourses();
  res.json(courses);
};

router.get('/', getCourses).get('/:id', getCourse);

export default router;
