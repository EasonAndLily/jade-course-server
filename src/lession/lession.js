import mongoose from 'mongoose';
import lessionSchema from './lession-schema.js';

const Lession = mongoose.model('lession', lessionSchema);

const findLessionById = function (id) {
  return Lession.findById(id).exec();
};

const insertLession = function (lession) {
  return Lession.create(lession);
};

export { findLessionById, insertLession };
