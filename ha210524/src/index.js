import React, { useState } from "react"; // Import React and useState
//import Date from 'react-date-object'; // Import Date object

import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";

let myname = "Welt";
let otherPerson = "Marc";
//let today = Date;

let customStyle = {
  color: "brown",
  fontSize: "50px",
  border: "1px solid black",
};

function addieren(zahl1, zahl2) {
  return zahl1 + zahl2;
}

// customStyle.color = "violet"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* Attribute werden in React in CamelCase Schreibweise geschrieben
Achtung: class wird bei react zu className */}
    <h1 className="heading" contentEditable="true">
      {" "}
      Hallo {myname}
    </h1>
    <h2>Ich bin der {otherPerson}</h2>
    <h3 style={{ color: "blue" }}>
      Meine Lieblingszahl ist: {Math.round(Math.random() * 10)}
    </h3>
    <h3 style={customStyle}>Das wurde mit Inline CSS über JSX gestyled</h3>
    <h3>Das Ergebnis der Berechnung ist: {addieren(6, 81)}</h3>
    
  </>

  //<React.StrictMode>
  //<App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
