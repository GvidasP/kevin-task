import React from "react";

const GameLog = ({ squares }) => {
    // React.useEffect(() => console.log(squares), [squares]);

    return (
        <div className="log">
            {squares.map((value, i) => {
                if (value)
                    return (
                        <p key={i} className="log__message">
                            Square: {i} Value: {value}
                        </p>
                    );
            })}
        </div>
    );
};

export default GameLog;
