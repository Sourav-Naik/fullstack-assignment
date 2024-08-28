const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/card.js");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: true,
  })
);

app.get("/ping", (req, res) => {
  res.send("Server is running!");
});

app.use("/cards", routes);

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
