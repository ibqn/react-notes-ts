import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript 2.5.x" framework="React 16.x" />,
    document.getElementById("root")
);