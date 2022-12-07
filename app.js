// const express = require("express");

// const books = require("./books.json");

// const app = express();

// app.set("json spaces", 8)

// app.get("/books", (req, res) => {
//     const databaseResponse = null;
//     // res.json(databaseResponse);
//     // res.send(databaseResponse);
//         res.json(books)
// });

// app.listen(3000);

// // app - ours web server
// // app.listen(3000, () => console.log("Server running"));



// 2////////////////2////////////22222222222222222222///////middleware!!!!!

const express = require("express");

const books = require("./books.json");

const app = express();

app.get("/products", (req, res) => {
    res.json([]);
});

app.get("/books", (req, res) => {
    res.json(books);
})

app.listen(3000);

