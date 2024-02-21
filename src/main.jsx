import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/appRoutes.jsx";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
