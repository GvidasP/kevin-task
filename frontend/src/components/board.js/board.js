import React, { useState, useEffect } from "react";
import axios from "axios";

import Square from "./square";
import { API_KEY } from "../../utils/api";
import GameLog from "../gameLog";
import ResetGameButton from "../buttons/resetGame";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [nextIsX, setNextIsX] = useState(true);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            axios
                .get(`${API_KEY}`)
                .then((res) => {
                    setSquares(res.data);
                })
                .catch((err) => console.log(err));
        };
        fetchData();
    }, [winner]);

    const handleSquareClick = async (index) => {
        const board = [...squares];

        if (board[index]) return;
        if (winner) return;

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

    const handleResetGame = () => {
        axios.delete(API_KEY).catch((err) => console.log(err));
        setWinner(null);
        setSquares(Array(9).fill(null));
        setNextIsX(true);
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
            {winner && <ResetGameButton handleResetGame={handleResetGame} />}
        </React.Fragment>
    );
};

export default Board;
