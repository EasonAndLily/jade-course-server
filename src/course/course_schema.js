import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: String,
  subTitle: String,
});

export default courseSchema;
