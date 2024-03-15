import needle from 'needle';
needle.post(
    'http://localhost:3000/add-book',
    {
        bookname: "Harry Potter and the Philosopher’s Stone",
        ISBN: "978-0-7475-3269-9",
        author: "J.K Rowling",
        year_published: "1997"
    },
    (err, res) => {
        
    }
);

