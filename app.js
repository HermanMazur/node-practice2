const express = require("express");    

const books = require("./books.json");

const app = express();

app.get("/books", (req, res) => {
    res.send(books)
});

app.listen(3000);

// app - ours web server
// app.listen(3000, () => console.log("Server running"));


