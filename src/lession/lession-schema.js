import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const lessionSchema = new Schema({
  title: String,
  poster: String,
  subTitle: String,
  difficulty: String,
  duration: String,
  learningNumbers: Number,
  author: String,
  score: Number,
  previous: String,
  behind: String,
  content: String,
});

export default lessionSchema;
