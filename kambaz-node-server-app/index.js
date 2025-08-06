// index.js
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";

const app = express();

Hello(app);   // existing route handler
Lab5(app);    // ✅ new route handler

app.listen(4000, () => {
  console.log("Server is running at http://localhost:4000");
});
