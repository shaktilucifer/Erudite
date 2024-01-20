// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/get-book", (req, res) => {
  // get from db
    res.json({test: "book created!"})
});

app.put("/create-book", (req, res) => {
  // save to db
    res.json({test: "book created!"})
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});