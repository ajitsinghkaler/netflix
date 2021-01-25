import React from "react";
import { render } from "react-dom";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import "normalize.css";
import { GlobalStyles } from "./global-styles";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
