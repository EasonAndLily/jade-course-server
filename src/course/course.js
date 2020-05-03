import mongoose from 'mongoose';
import courseSchema from './course_schema.js';

const Course = mongoose.model('Course', courseSchema);

const insertCourse = function () {
  const course = new Course({
    title: 'Java基础教程',
    subTitle: '入门级教程，面向零基础学员',
  });
  Course.insertMany([course], (err) => {
    console.log(err);
  });
};

const queryAllCourses = function () {
  return Course.find({}).exec();
};

const findCourseById = function (id) {
  return Course.findById(id).exec();
};

export { queryAllCourses, insertCourse, findCourseById };
