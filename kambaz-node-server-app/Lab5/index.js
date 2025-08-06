// Lab5/index.js
import PathParameters from "./PathParameters.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import Module from "./Module.js";

export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });

  PathParameters(app);
  WorkingWithObjects(app);
  Module(app);
}
