import mongoose from 'mongoose';
import lessionSchema from './lession-schema.js';
import getMarkdownStr from '../tools/file-operation.js';

const Lession = mongoose.model('lession', lessionSchema);

const findLessionById = function (id) {
  return Lession.findById(id).exec();
};

const insertLession = async function (lession, url) {
  const content = await getMarkdownStr(url);
  lession.content = content;
  return Lession.create(lession);
};

export { findLessionById, insertLession };
