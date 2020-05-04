import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { findLessionById, insertLession } from '../../src/lession/lession.js';

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

describe('lession CURD', () => {
  it('test insert lession', async () => {
    const lession = {
      title: 'Schema与Table操作',
      poster:
        'https://icon.qiantucdn.com/20200428/20ba25d57b0a82909a97adec0c0ba3172',
      subTitle: '入门类课程，面向零基础学员',
      difficulty: '入门',
      duration: '30分钟',
      learningNumbers: 12345,
      author: 'Eason',
      score: 9.8,
      previous: '数据库概述',
      behind: '数据基本操作',
      content: `# Live demo
      Changes are automatically rendered as you type.
      ## Table of Contents
      * Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
      * Renders actual, "native" React DOM elements
      * Allows you to escape or skip HTML (try toggling the checkboxes above)
      * If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!`,
    };
    const output = await insertLession(lession);
    expect(output).not.toBeNull();
    expect(output._id).not.toBeNull();
    expect(output.content).toEqual(lession.content);
  });

  it('find lession by id', async () => {
    const lession = await insertLession({
      title: 'Schema与Table操作',
      poster:
        'https://icon.qiantucdn.com/20200428/20ba25d57b0a82909a97adec0c0ba3172',
    });

    const output = await findLessionById(lession._id);
    expect(output).not.toBeNull();
    expect(output.title).toEqual(lession.title);
    expect(output.poster).toEqual(lession.poster);
  });
});
