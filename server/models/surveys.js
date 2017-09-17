import mongoose, { Schema } from 'mongoose';

const surveysSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  questions: [{
    questionName: String,
    fieldType: String,
    answerOptions: Array
  }]
})

export default mongoose.model("Survey", surveysSchema)
