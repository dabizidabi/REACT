import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Hover from "./components/Hover";
import List from "./components/List";
import TestData from "./components/TestData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Hover />
    <Hover />
    <Hover />
    <List />
    <TestData />
  </React.StrictMode>,
);
