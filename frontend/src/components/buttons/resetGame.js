import React from "react";

const ResetGameButton = ({ handleResetGame }) => {
    return (
        <button onClick={handleResetGame} className="board__start">
            Start Over
        </button>
    );
};

export default ResetGameButton;
