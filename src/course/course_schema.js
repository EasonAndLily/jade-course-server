import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const growthSchema = new Schema({
  title: String,
  name: String,
  iamge: String,
  brief: String,
});

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
  poster: String,
  intro: String,
  gains: [String],
  growth: [growthSchema],
  sections: [sectionSchema],
});

export default courseSchema;
