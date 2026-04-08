import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ApplicationsProvider } from "./context/ApplicationContext";
import { InterviewProvider } from "./context/InterviewContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ApplicationsProvider>
          <InterviewProvider>
            <App />
          </InterviewProvider>
        </ApplicationsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);