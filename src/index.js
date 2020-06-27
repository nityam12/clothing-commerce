import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux"; //component from redux which gives reducer and action
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { store, persistor } from "./redux/store";
// browsersRouter is a component that needs to be wrapped in a
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
