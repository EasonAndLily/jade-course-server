import express from 'express';
const router = express.Router();
import { queryAllCourses, findCourseById } from './course.js';

const getCourse = async function (req, res) {
  const course = await findCourseById(req.params.id);
  res.json(course);
};

const getCourses = async function (req, res) {
  const courses = await queryAllCourses();
  res.json(courses);
};

router.get('/', getCourses).get('/:id', getCourse);

export default router;
