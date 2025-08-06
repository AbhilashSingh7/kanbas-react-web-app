// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Kambaz/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <UserProvider>
          <App />
        </UserProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
