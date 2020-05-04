import mongoose from 'mongoose';
import courseSchema from './course_schema.js';

const Course = mongoose.model('Course', courseSchema);

const insertCourse = function (course) {
  return Course.create(course);
};

const queryAllCourses = function () {
  return Course.find({}).exec();
};

const findCourseById = function (id) {
  return Course.findById(id).exec();
};

export { queryAllCourses, insertCourse, findCourseById };
