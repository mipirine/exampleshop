const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("server started"));

app.use(express.static("build"));

const items = [
    {
        name: "laptop",
        price: 500
    },
    {
        name: "desktop",
        price: 700
    }
];

app.get("/api/items", (req, res) => {
    res.send(items);
});