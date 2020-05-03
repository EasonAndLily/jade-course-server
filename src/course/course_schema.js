import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const lessionSchema = new Schema({
  name: String,
  type: String,
  time: String,
  read: Boolean,
});

const sectionSchema = new Schema({
  name: String,
  order: Number,
  lessions: [lessionSchema],
});

const courseSchema = new Schema({
  title: String,
  subTitle: String,
  intro: String,
  gains: [String],
  sections: [sectionSchema],
});

export default courseSchema;
