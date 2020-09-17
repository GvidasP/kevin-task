import React from "react";

import Board from "./board.js/board";

const Container = () => {
    return (
        <div className="container">
            <Board />
            {/* <GameLog log={log} /> */}
        </div>
    );
};

export default Container;
