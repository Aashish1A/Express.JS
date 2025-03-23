import express from "express";
import { searchController, usernameController } from "./controller.js";

const app = express();

const PORT = 3000;

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

// ---------Dynamic routing-----------
app.get('/user/:username',usernameController)

app.get("/search",searchController)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});