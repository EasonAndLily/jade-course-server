import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import {
  insertCourse,
  findCourseById,
  queryAllCourses,
} from '../../src/course/course.js';

// May require additional time for downloading MongoDB binaries
jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;

let mongoServer;
const opts = { useNewUrlParser: true, useUnifiedTopology: true };

beforeAll(async () => {
  mongoServer = new MongoMemoryServer();
  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri, opts, (err) => {
    if (err) console.error(err);
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('course CURD', () => {
  it('test insert a course to mongodb', async () => {
    const course = {
      title: 'Java基础教程',
      subTitle: '入门级教程，面向零基础学员',
    };
    const output = await insertCourse(course);
    expect(output).not.toBeNull();
    expect(course.subTitle).toEqual(output.subTitle);
    expect(course.title).toEqual(output.title);
  });
  it('test find a course', async () => {
    const course = await insertCourse({
      title: 'Java基础教程',
      subTitle: '入门级教程，面向零基础学员',
    });
    const output = await findCourseById(course._id);
    expect(course.title).toEqual(output.title);
    expect(course.subTitle).toEqual(output.subTitle);
  });
  it('test find all courses', async () => {
    const output = await queryAllCourses();
    expect(output).toBeInstanceOf(Array);
    expect(output.length).toBeGreaterThan(0);
  });
});
