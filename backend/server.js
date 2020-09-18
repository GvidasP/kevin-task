const express = require("express");
const cors = require("cors");

const keys = require("./config/keys");
require("./database");

const Moves = require("./models/moves");

const app = express();
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.use(express.json());

let moves = Array(9).fill(null);

app.post("/api", (req, res) => {
    moves = req.body;

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
            new Moves({
                moves,
                winner: moves[a],
            }).save();
            res.status(200).send({ winner: moves[a], moves });
            return;
        }
    }
    res.status(200).send(moves);
});

app.get("/api", (req, res) => {
    res.status(200).send(moves);
});

app.delete("/api", (req, res) => {
    moves = Array(9).fill(null);
    res.status(200);
});

app.listen(keys.PORT, () => {
    console.log(`Server started on localhost:${keys.PORT}`);
});
