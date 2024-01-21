// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

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

app.get("/get-books", (req, res) => {
  // get from db
  res.json({ books });
});

app.get("/getBookById", (req, res) => {
  const filteredBooks = books.filter((book) => book.id === req.id);
  // get from db

  res.json({ books: filteredBooks });
});

app.get("/getBookByName", (req, res) => {
  const filteredBooks = books.filter((book) => book.name === req.name);
  // get from db

  res.json({ books: filteredBooks });
});

app.put("/createBook", (req, res) => {
  books.push(req.book);
  // save to db
  res.json({ test: "book created!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
