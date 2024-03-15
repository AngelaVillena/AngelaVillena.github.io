import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/add-book', (req, res) => {
    if (req.body.bookname != null) {
        appendFileSync("users.txt", req.body.bookname);
        console.log('The "data to append" was appended to file!');
    }
    res.send('Bookname: ' + req.body.bookname);
    res.send('isbn: ' + req.body.age);
    res.send('author: ' + req.body.age);
    res.send('year published: ' + req.body.age);

});