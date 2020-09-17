import React, { useState, useEffect } from "react";
import axios from "axios";

import Square from "./square";
import { API_KEY } from "../../utils/api";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [nextIsX, setNextIsX] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            axios
                .get(`${API_KEY}/log`)
                .then((res) => {
                    setSquares(res.data);
                })
                .catch((err) => console.log(err));
        };
        fetchData();

        console.log("useEffect");
    }, []);

    const handleSquareClick = async (index) => {
        const board = [...squares];

        if (board[index]) return;

        board[index] = nextIsX ? "X" : "O";

        axios.post(API_KEY, board);

        setNextIsX(!nextIsX);
        setSquares(board);
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
            {nextIsX ? <p>X turn</p> : <p>O turn</p>}
        </React.Fragment>
    );
};

export default Board;
