const express = require("express");
const cors = require("cors");

const keys = require("./config/keys");

const app = express();
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.use(express.json());

app.get("/api", (req, res) => {
    res.status(200).send("Hello world");
});

let moves = Array(9).fill(null);

app.post("/api", async (req, res) => {
    moves = req.body;
    res.status(200).send(req.body);
});

app.get("/api/log", (req, res) => {
    res.status(200).send(moves);
});

app.listen(keys.PORT, () => {
    console.log(`Server started on localhost:${keys.PORT}`);
});
