import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ApplicationsProvider } from "./context/ApplicationContext";
import { InterviewProvider } from "./context/InterviewContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ApplicationsProvider>
          <InterviewProvider>
            <App />
            <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#0f172a",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              },
            }}
            />
          </InterviewProvider>
        </ApplicationsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);