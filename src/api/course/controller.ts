import { courseModel } from "./model";
import { Request, Response } from "express";

const addNewCourses = async (req: Request, res: Response) => {
  try {
    const response = await courseModel.insertMany(req.body);
    if (!response) {
      res.send({ status: 400, message: "Unable to create course!" });
    }
    res.send({ status: 200, message: "Course created successfully!" });
  } catch (error) {
    console.log(error);
    res.send({ status: 400, message: error });
  }
};

const getAvailableCourses = async (req: Request, res: Response) => {
  try {
    const { isAlphabeticalSort, isDateSort } = req.query || {};
    let alphabeticalSort = isAlphabeticalSort === "true" ? 1 : 0;
    let dateSort = isDateSort === "true" ? -1 : 0;
    const response = await courseModel
      .find({ isAvailable: true })
      .sort({ name: alphabeticalSort, date: dateSort });
    if (!response) {
      res.send({ status: 400, message: "No courses available!" });
    }
    res.send({ status: 200, data: response });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

const courseOverView = async (req: Request, res: Response) => {
  try {
    const response = await courseModel.findOne({
      $and: [req.params, { isAvailable: true }],
    });
    if (!response) {
      res.send({ status: 400, message: "Can't find course!" });
    }
    res.send({ status: 200, data: response });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

const chapterInformation = async (req: Request, res: Response) => {
  try {
    const response = await courseModel.find(
      { "chapters._id": req.params._id },
      {
        "chapters.$": 1,
      }
    );
    if (!response) {
      res.send({ status: 400, message: "Can't find chapter!" });
    }
    res.send({ status: 200, data: response });
  } catch (error) {
    console.log(error);
    res.send({ status: 400, message: error });
  }
};

const removeCourse = async (req: Request, res: Response) => {
  try {
    const update = { isAvailable: false };
    const search = req.params;
    const response = await courseModel.updateOne(search, { $set: update });
    if (!response) {
      res.send({ status: 400, message: "Not able remove course!" });
    }
    res.send({ status: 200, message: "Course has removed!" });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

const chapterRatings = async (req: Request, res: Response) => {
  try {
    const update = req.body;
    const search = { "chapters._id": req.params._id };
    const response = await courseModel.updateOne(search, { $set: update });
    if (!response) {
      res.send({ status: 400, message: "Not able remove course!" });
    }
    res.send({ status: 200, message: "Course has removed!" });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

export {
  addNewCourses,
  getAvailableCourses,
  courseOverView,
  chapterInformation,
  removeCourse,
  chapterRatings,
};
