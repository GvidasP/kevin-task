import React from "react";

const startGame = ({ handleStartGame }) => {
    return (
        <button className="board__start" onClick={handleStartGame}>
            Start game
        </button>
    );
};

export default startGame;
