import { insertCourse, findCourseById, queryAllCourses } from './course.js';
import { getJsonData } from '../tools/yaml2json.js';

const createCourse = async function (url) {
  const course = await getJsonData(url);
  return insertCourse(course);
};

const getCourse = function (id) {
  return findCourseById(id);
};

const getCourses = function () {
  return queryAllCourses();
};

export { createCourse, getCourse, getCourses };
