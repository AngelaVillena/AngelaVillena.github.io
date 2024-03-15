import needle from "needle";

needle.post("http://localhost:3000/add-book", {}, (err, res) => {
  console.log(res.body);
});

needle.get("http://localhost:3000/find-by-isbn-author", (err, res) => {
  console.log(res.body);
});

needle.get("http://localhost:3000/find-author", (err, res) => {
  console.log(res.body);
});
