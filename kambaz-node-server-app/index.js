// index.js
import express from "express";
import cors from "cors";
import Lab5 from "./Lab5/index.js";

const app = express();
app.use(cors());

Lab5(app);

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
