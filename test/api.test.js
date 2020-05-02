import request from 'supertest';
import app from '../index.js';

test('test get all courses api', async () => {
  const res = await request(app).get('/courses');
  expect(res.statusCode).toBe(200);
  expect(res.text).toEqual('Hello controllers');
});
