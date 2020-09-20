const express = require("express");
const cors = require("cors");
const path = require("path");

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
            res.status(200).json({ winner: moves[a], moves });
            return;
        }
    }
    if (!moves.includes(null)) {
        console.log({ winner: "tie", moves });
        res.status(200).json({ winner: "tie", moves });
        return;
    }
    res.status(200).json(moves);
});

app.get("/api", (req, res) => {
    res.status(200).json(moves);
});

app.delete("/api", (req, res) => {
    moves = Array(9).fill(null);
    res.status(200);
});

app.use(express.static(path.join(__dirname, "../backend/client")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../backend/client"));
});

app.listen(keys.PORT, () => {
    console.log(`Server started on localhost:${keys.PORT}`);
});
