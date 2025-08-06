// Lab5/Module.js
const module = {
    id: "M101",
    name: "Node.js",
    description: "Learn to build servers",
    course: "CS5610",
  };
  
  export default function Module(app) {
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
  
    app.get("/lab5/module/name", (req, res) => {
      res.send(module.name);
    });
  
    app.get("/lab5/module/name/:newName", (req, res) => {
      const { newName } = req.params;
      module.name = newName;
      res.json(module);
    });
  }
  