import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SchedulingProvider } from "./context/SchedulingContext";

ReactDOM.render(
  <React.StrictMode>
    <SchedulingProvider>
      <App />
    </SchedulingProvider>
  </React.StrictMode>,
  document.getElementById("reach-scheduling")
);
