import React from "react";
import ReactDOM from "react-dom";
import Game2048 from "./src/js/2048";
import "./src/css/main.sass";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Game2048/>, wrapper) : false;