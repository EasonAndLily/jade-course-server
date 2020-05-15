import express from 'express';
const router = express.Router();
import { createCourse, getCourse, getCourses } from './course_service.js';

router.get('/', async (req, res) => {
  const courses = await getCourses();
  res.json(courses);
});

router.get('/:id', async (req, res) => {
  const course = await getCourse(req.params.id);
  res.json(course);
});

router.post('/', async (req, res) => {
  const course = await createCourse(req.body.url);
  res.json(course);
});

export default router;
