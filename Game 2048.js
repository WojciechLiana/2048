import React from "react";
import ReactDOM from "react-dom";
import Game from "./src/js/2048.js"


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Game/>, wrapper) : false;