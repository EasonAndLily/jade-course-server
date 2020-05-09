import mongoose from 'mongoose';
import lessionSchema from './lession-schema.js';
import getMarkdownStr from '../tools/file-operation.js';

const Lession = mongoose.model('lession', lessionSchema);

const findLessionById = function (id) {
  return Lession.findById(id).exec();
};

const insertLession = async function (lession) {
  const content = await getMarkdownStr(
    'https://raw.githubusercontent.com/EasonAndLily/far/master/README.md'
  );
  console.log(lession);
  lession.content = content;
  return Lession.create(lession);
};

export { findLessionById, insertLession };
