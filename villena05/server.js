import stringLength from "string-length";
import { appendFileSync } from "node:fs";
import express from "express";

const app = express();
var a = [
  "Harry Potter and the Philosophers Stone",
  "978-0-7475-3269-9",
  "J.K Rowling",
  "1997",
];

function checkFields(a) {
  var x = false;
  if (a.length != 4) {
    return x;
  }
  if (
    a[0].length != 0 &&
    a[1].length != 0 &&
    a[2].length != 0 &&
    a[3].length != 0
  ) {
    appendFileSync("books.txt", a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3]);
    console.log('The "data to append" was appended to file!');
    x = true;
  }
  return x;
}

app.get("/add-book", (req, res) => {
  res.send(checkFields(a));
});

app.post("/add-book", (req, res) => {
  if (checkFields(a) === true) {
    res.send("{ success:true }");
  } else res.send("{ success: false }");
});

// Create a GET method for retrieving the entire book details using ISBN and Author as search criteria,
// and use /find-by-isbn-author as the route name.
// - Accepts 2 parameters in the address bar:
// 1. ISBN
// 2. Author

app.get("/find-by-isbn-author", (req, res) => {
  // isbn = req.query.isbn;
  // author = req.query.author;

  for (var i = 0; i < a.length; i++) {
    if (a[i] === req.query.isbn) {
      //res.send("found");
      for (var j = 0; j < a.length; j++) {
        console.log(a[j]);
      }
    }
  }
  res.send(req.query.isbn);
});

//Create the same GET method as #2 but with Author as the only parameter.
app.get("/find-by-author", (req, res) => {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === req.query.author) {
      for (var j = 0; j < a.length; j++) {
        console.log(a[j]);
      }
    }
  }

  res.send(req.query.author);
});

app.listen(3000);
