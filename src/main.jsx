import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./Firbase/Context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-white  text-dark">
    <div className="max-w-6xl mx-auto">
      <AuthProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthProvider>
    </div>
    ,
  </div>
);
