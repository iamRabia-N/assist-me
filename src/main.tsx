import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { persistedStore, store } from "./store/index.ts";
import { PersistGate } from "redux-persist/integration/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
