import * as request from "supertest";
import * as Mongoose from "mongoose";

let courses = [
  {
    name: "Highlights of Calculus",
    date: 1530133200,
    isAvailable: true,
    description:
      "Highlights of Calculus is a series of short videos that introduces the basic ideas of calculus \u2014 how it works and why it is important. The intended audience is high school students, college students, or anyone who might need help understanding the subject.\nIn addition to the videos, there are summary slides and practice problems complete with an audio narration by Professor Strang. You can find these resources to the right of each video.",
    domain: ["mathematics"],
    chapters: [
      {
        name: "Gil Strang's Introduction to Calculus for Highlights for High School",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Big Picture of Calculus",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Big Picture: Derivatives",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Max and Min and Second Derivative",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "The Exponential Function",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Big Picture: Integrals",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Derivative of sin x and cos x",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Product Rule and Quotient Rule",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Chains f(g(x)) and the Chain Rule",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Limits and Continuous Functions",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Inverse Functions f ^-1 (y) and the Logarithm x = ln y",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Derivatives of ln y and sin ^-1 (y)",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Growth Rate and Log Graphs",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Linear Approximation/Newton's Method",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Power Series/Euler's Great Formula",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Differential Equations of Motion",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Differential Equations of Growth",
        text: "Highlights of Calculus",
        ratings: [],
      },
      {
        name: "Six Functions, Six Rules, and Six Theorems",
        text: "Highlights of Calculus",
        ratings: [],
      },
    ],
  },
];
const baseURL = "http://localhost:7002/api";
describe("course test", () => {
  beforeAll(async () => {
    await Mongoose.connect("mongodb://127.0.0.1/Kimo");
  });
  afterAll(async () => {
    await Mongoose.connection.close();
  });
  it("create course", async () => {
    const response = await request(baseURL).post("/courses").send(courses);
    expect(response.status).toBe(200);
  });
  it("get all course", async () => {
    const response = await request(baseURL).get("/courses");
    expect(response.status).toBe(200);
  });
  it("get single course", async () => {
    const response = await request(baseURL).get(
      "/courses/646899ff2a792a8729706dce"
    );
    expect(response.status).toBe(200);
  });
  it("delete course", async () => {
    const response = await request(baseURL).get(
      "/courses/646899ff2a792a8729706dce"
    );
    expect(response.status).toBe(200);
  });
  it("get chapter info", async () => {
    const response = await request(baseURL).get(
      "/chapter/646899ff2a792a8729706de2"
    );
    expect(response.status).toBe(200);
  });
});
