import React from "react";
// import axios from "axios";

// import { API_KEY } from "../utils/api";

const GameLog = ({ log }) => {
    // const [log, setLog] = React.useState([]);

    // React.useEffect(() => {
    //     const fetchData = () => {
    //         axios
    //             .get(`${API_KEY}/log`)
    //             .then((res) => {
    //                 setLog(res.data);
    //                 console.log(res.data);
    //             })
    //             .catch((err) => console.log(err));
    //     };

    //     fetchData();
    // }, []);
    return (
        <div className="log">
            {log.map((item) => (
                <p key={item.index} className="log__message">
                    Square: {item.index} Value: {item.value}
                </p>
            ))}
        </div>
    );
};

export default GameLog;
