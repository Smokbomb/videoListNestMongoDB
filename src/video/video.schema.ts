import * as mongoose from 'mongoose';

export const VideoSchema = new mongoose.Schema({
  description: String,
  sources: [String],
  subtitle: String,
  thumb: String,
  title: String,
  like: Number,
  view: Number,
  score: Number,
});