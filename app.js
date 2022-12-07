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
const fs = require("fs/promises");
const moment = require("moment");

const books = require("./books.json");

const app = express();

app.use(async (req, res, next) => {
    const { method, url } = req;
    const data = moment().format("YYYY-MM-DD_hh:mm:ss");
    await fs.appendFile("./public/server.log", `\n${method} ${url} ${data}`);
    next();
});

// app.use((req, res, next) => {
//     console.log("first middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("second middleware");
//     next();
// });


app.get("/products", async (req, res) => {
    res.json([]);
});

app.get("/books", async (req, res) => {
    res.json(books);
})

app.listen(3000);

