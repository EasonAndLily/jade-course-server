import request from 'supertest';
import app from '../index.js';
import { queryAllCourses, findCourseById } from '../src/course/course.js';
import { findLessionById } from '../src/lession/lession.js';
jest.mock('../src/course/course.js');
jest.mock('../src/lession/lession.js');

test('test find a course api', async () => {
  const course = {
    title: 'JavaSE 基础教程',
    subTitle: '入门级教程，面向零基础学员',
    poster:
      'https://icon.qiantucdn.com/20200429/29970def500796ac35b3538ecd8da9d32',
    intro:
      '本教程为Java入门第一季，欢迎来到精彩的Java编程世界！Java语言已经成为当前软件开发行业中主流的开发语言。本教程将介绍Java环境搭建、工具使用、基础语法。带领大家一步一步的踏入Java达人殿堂！Let’s go!',
  };
  findCourseById.mockImplementation((id) => course);

  const res = await request(app).get('/courses/123');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual(course);
});

test('test get all courses api', async () => {
  const courses = [
    {
      title: 'JavaSE 基础教程',
      subTitle: '入门级教程，面向零基础学员',
      poster:
        'https://icon.qiantucdn.com/20200429/29970def500796ac35b3538ecd8da9d32',
      intro:
        '本教程为Java入门第一季，欢迎来到精彩的Java编程世界！Java语言已经成为当前软件开发行业中主流的开发语言。本教程将介绍Java环境搭建、工具使用、基础语法。带领大家一步一步的踏入Java达人殿堂！Let’s go!',
    },
  ];
  queryAllCourses.mockImplementation(() => courses);

  const res = await request(app).get('/courses');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual(courses);
});

test('test find a lession api', async () => {
  const lession = {
    title: 'Java 开发环境配置',
    subTitle: '入门级教程，面向零基础学员',
    poster:
      'https://icon.qiantucdn.com/20200428/20ba25d57b0a82909a97adec0c0ba3172',
    content:
      '本教程为Java入门第一季，欢迎来到精彩的Java编程世界！Java语言已经成为当前软件开发行业中主流的开发语言。本教程将介绍Java环境搭建、工具使用、基础语法。带领大家一步一步的踏入Java达人殿堂！Let’s go!',
  };
  findLessionById.mockImplementation((id) => lession);

  const res = await request(app).get('/lessions/123');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual(lession);
});
