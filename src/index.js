import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "../src/feature/store";
import reportWebVitals from "./reportWebVitals";

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="w-full h-screen pt-16 flex items-center justify-center">
            <div className="animate-ping text-orange ">
              <div className=" md:w-[135px] md:h-[84px] animate-pulse md:animate-ping text-orange ">
                <img
                  src={"/assets/logo.svg"}
                  className="w-full h-full"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        }
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
