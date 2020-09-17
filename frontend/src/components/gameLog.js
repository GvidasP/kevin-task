import React from "react";

const GameLog = ({ squares }) => {
    return (
        <div className="log">
            {squares.map((value, i) => {
                if (value) {
                    return (
                        <p key={i} className="log__message">
                            Square: {i} Value: {value}
                        </p>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default GameLog;
