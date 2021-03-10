let moogose = require("mongoose");
let db = require("../models");

require("dotenv").config();

// moogose.connect("mongodb://localhost/robotArm_db", {
moogose.connect(process.env.MONGO_ATLAS_SEED, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let robotSeed = [
  {
    motorLocation: "base",
    direction: "left",
    motions: [
      {
        channel: 0,
        pulse: 500,
      },
    ],
  },
  {
    motorLocation: "base",
    direction: "right",
    motions: [
      {
        channel: 0,
        pulse: 1000,
      },
    ],
  },
  {
    motorLocation: "shoulder",
    direction: "up",
    motions: [
      {
        channel: 1,
        pulse: 1000,
      },
    ],
  },
  {
    motorLocation: "shoulder",
    direction: "down",
    motions: [
      {
        channel: 1,
        pulse: 600,
      },
    ],
  },
  {
    motorLocation: "elbow",
    direction: "down",
    motions: [
      {
        channel: 2,
        pulse: 1000,
      },
    ],
  },
  {
    motorLocation: "elbow",
    direction: "up",
    motions: [
      {
        channel: 2,
        pulse: 750,
      },
    ],
  },
  {
    motorLocation: "wrist articulation",
    direction: "down",
    motions: [
      {
        channel: 3,
        pulse: 2000,
      },
    ],
  },
  {
    motorLocation: "wrist articulation",
    direction: "up",
    motions: [
      {
        channel: 3,
        pulse: 750,
      },
    ],
  },
  {
    motorLocation: "wrist roll",
    direction: "clockwise",
    motions: [
      {
        channel: 4,
        pulse: 500,
      },
    ],
  },
  {
    motorLocation: "wrist roll",
    direction: "c-clockwise",
    motions: [
      {
        channel: 4,
        pulse: 1000,
      },
    ],
  },
  {
    motorLocation: "claw",
    direction: "open",
    motions: [
      {
        channel: 5,
        pulse: 750,
      },
    ],
  },
  {
    motorLocation: "claw",
    direction: "close",
    motions: [
      {
        channel: 5,
        pulse: 2200,
      },
    ],
  },
];

// Delete the collection Robot and insert this seed.
db.Robot.deleteMany({})
  .then(() => db.Robot.collection.insertMany(robotSeed))
  .then((data) => {
    //Log how many insertions were made to the database.
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
