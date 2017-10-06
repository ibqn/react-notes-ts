import * as React from "react";
import * as ReactDOM from "react-dom";

import { Board } from "./components/Board";


ReactDOM.render(
    <Board count={10}/>,
    document.getElementById("root")
);
