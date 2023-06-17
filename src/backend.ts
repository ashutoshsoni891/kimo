const Mongoose = require("mongoose");
const express = require("express");
import courseRouter from "./api/course/routes";
import * as cors from "cors";

const app = express();
const port = 7002;
// DB creation and connection
const initConnection = async () => {
  await Mongoose.connect("mongodb://127.0.0.1/Kimo");
};
initConnection();

//query and data support
app.use(express.json());
app.use(cors());
app.use("/api", courseRouter);

//server status
app.listen(port, () => {
  console.log("server is running at port:", port);
});
