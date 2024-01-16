// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/create-book", (req, res) => {
    res.json({test: "book created!"})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});