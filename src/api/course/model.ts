import * as Mongoose from "mongoose";

const courseSchema = new Mongoose.Schema(
  {
    name: { type: String },
    date: { type: Date },
    isAvailable: { type: Boolean },
    description: { type: String },
    domain: { type: Object },
    chapters: [
      {
        name: { type: String },
        text: { type: String },
        ratings: { type: Object },
      },
    ],
  },
  { timestamps: true }
);

const courseModel = Mongoose.model("Courses", courseSchema);
export { courseModel, courseSchema };
