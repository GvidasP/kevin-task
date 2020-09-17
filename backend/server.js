const express = require("express");

const keys = require("./config/keys");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello world");
});

app.listen(keys.PORT, () => {
    console.log(`Server started on localhost:${keys.PORT}`);
});
