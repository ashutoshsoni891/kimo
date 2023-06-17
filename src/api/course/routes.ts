import * as Express from "express";
import {
  addNewCourses,
  getAvailableCourses,
  courseOverView,
  chapterInformation,
  removeCourse,
  chapterRatings,
} from "./controller";

const router = Express.Router();
router.post("/courses", addNewCourses);
router.get("/courses", getAvailableCourses);
router.get("/courses/:_id", courseOverView);
router.delete("/courses/:_id", removeCourse);
router.get("/chapter/:_id", chapterInformation);
router.put("/chapter/:_id", chapterRatings);

export default router;
