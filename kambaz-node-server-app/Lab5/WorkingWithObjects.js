// Lab5/WorkingWithObjects.js
const assignment = {
    id: 123,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-01",
    completed: false,
    score: 0,
  };
  
  export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
  
    app.get("/lab5/assignment/title", (req, res) => {
      res.send(assignment.title);
    });
  
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
      const { newTitle } = req.params;
      assignment.title = newTitle;
      res.json(assignment);
    });
  }
  