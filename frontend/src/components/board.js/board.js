import React, { useState, useEffect } from "react";
import axios from "axios";

import Square from "./square";
import { API_KEY } from "../../utils/api";
import GameLog from "../gameLog";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [nextIsX, setNextIsX] = useState(true);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            axios
                .get(`${API_KEY}`)
                .then((res) => {
                    console.log(res.data);
                    setSquares(res.data);
                })
                .catch((err) => console.log(err));
        };
        fetchData();
    }, []);

    const handleSquareClick = async (index) => {
        const board = [...squares];

        if (board[index]) return;

        board[index] = nextIsX ? "X" : "O";

        axios
            .post(API_KEY, board)
            .then((res) => {
                setWinner(res.data.winner);
            })
            .catch((err) => console.log(err));

        setNextIsX(!nextIsX);
        setSquares(board);
    };

    const renderTurn = () => {
        if (!winner) return nextIsX ? <p>X turn</p> : <p>O turn</p>;
    };

    return (
        <React.Fragment>
            <div className="board">
                {squares.map((value, index) => {
                    return (
                        <Square
                            value={value}
                            handleSquareClick={handleSquareClick}
                            key={index}
                            index={index}
                        />
                    );
                })}
            </div>
            {renderTurn()}
            {winner && <h3>Winner is {winner}</h3>}
            <GameLog squares={squares} />
        </React.Fragment>
    );
};

export default Board;
