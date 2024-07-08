import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import App from "./App.tsx";
import "normalize.css";
import "./index.css";
import { persistor, store } from "./redux/store.ts";
import ScrollToTop from "@components/ScrollToTop/ScrollToTop.tsx";
import { PersistGate } from "redux-persist/integration/react";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter basename="/">
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
