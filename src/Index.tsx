import * as React from "react";
import * as ReactDOM from "react-dom";

import { Note } from "./components/Note";
import { Board } from "./components/Board";


ReactDOM.render(
    //<Note>Hello People</Note>,
    <Board count={10}/>,
    document.getElementById("root")
);
