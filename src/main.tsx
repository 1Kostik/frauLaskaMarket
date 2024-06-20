import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import App from "./App.tsx";
import "normalize.css";
import "./index.css";
import { store } from "./redux/store.ts";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);
