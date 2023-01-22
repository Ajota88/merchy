import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css";
import "./index.scss";
import { store } from "./store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
