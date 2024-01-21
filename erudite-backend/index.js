// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

const books = [
  {
    name: "Mark of Athena",
    id: 1,
    pages: 586,
    author: "Rick Riordan",
  },
  {
    name: "Heroes of Olympus",
    id: 2,
    pages: 344,
    author: "Rick Riordan",
  },
];

app.get("/getAllBooks", (req, res) => {
  //TODO get from db
  res.json({ books });
});

app.get("/getBookById", (req, res) => {
  const filteredBooks = books.filter((book) => book.id === +req.query.id);
  //TODO get from db

  res.json({ books: filteredBooks });
});

app.get("/getBookByName", (req, res) => {
    // TODO get from db
  const filteredBooks = books.filter((book) => book.name === +req.query.name);
  res.json({ books: filteredBooks });
});

app.post("/createBook", (req, res) => {
//   curl -d '{"MyKey":"My Value"}' -H "Content-Type: application/json" http://127.0.0.1:3001/
// {"MyKey":"My Value"}
  console.log(req);
  books.push(req.body.book);
  // save to db
  res.json({ test: "book created!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
