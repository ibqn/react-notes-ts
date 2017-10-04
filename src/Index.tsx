import * as React from "react";
import * as ReactDOM from "react-dom";

import { Note } from "./components/Note";

ReactDOM.render(
    <Note compiler="TypeScript 2.5.x" framework="React 16.x"></Note>,
    document.getElementById("root")
);