import React from "react";

import Board from "./board.js/board";
import GameLog from "./gameLog";

const Container = () => {
    const [log, setLog] = React.useState([]);

    const handleLog = (data) => {
        setLog(data);
    };

    return (
        <div className="container">
            <Board />
            <GameLog log={log} />
        </div>
    );
};

export default Container;
