import React from "react";

const Square = ({ value, handleSquareClick, index }) => {
    const handleClick = () => {
        handleSquareClick(index);
    };
    return (
        <button className="board__square" onClick={handleClick}>
            {value}
        </button>
    );
};

export default Square;
