//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
const YOURNAME="pb7";
//const CURRENTYEAR=2023;
const date = new Date();
//console.log(date);
const year= date.getFullYear();
console.log(year);

//It should display 2 paragraph HTML elements.
ReactDOM.render(
  <div>
<p> Created by {YOURNAME}  </p>
<p> Copyright {year}</p>

  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
