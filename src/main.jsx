import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-white h-full text-dark">
    <div className="max-w-6xl mx-auto">
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>
    ,
  </div>
);
