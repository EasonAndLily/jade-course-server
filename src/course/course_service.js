import { insertCourse, findCourseById, queryAllCourses } from './course.js';
import { getJsonData } from '../tools/yaml2json.js';
import { insertLession } from '../lession/lession.js';

const createCourse = async function (url) {
  const course = await getJsonData(url);
  if (course && course.sections) {
    for (let section of course.sections) {
      if (section.lessions) {
        let lessionArr = [];
        for (let item of section.lessions) {
          const originLession = {
            title: item.name,
            poster:
              'https://icon.qiantucdn.com/20200428/20ba25d57b0a82909a97adec0c0ba3172',
            subTitle: '高级课程，适合有基础学生',
            difficulty: '入门',
            duration: '30分钟',
            learningNumbers: 12345,
            author: 'Eason',
            score: 9.8,
          };
          const obj = await insertLession(originLession, item.url);
          let lession = {};
          lession._id = obj._id;
          lession.name = obj.title;
          lession.type = 'doc';
          lession.time = '05:20';
          lession.read = false;
          lessionArr.push(lession);
          console.log(lession);
        }
        section.lessions = lessionArr;
      }
    }
  }
  return insertCourse(course);
};

const getCourse = function (id) {
  return findCourseById(id);
};

const getCourses = function () {
  return queryAllCourses();
};

export { createCourse, getCourse, getCourses };
