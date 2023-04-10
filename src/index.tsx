import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorker from "./serviceWorker";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import ElementContext from "./context/ElementsContext";
import { elements as data } from "./data.json";

interface dataInterface {
  data: Array<object>;
}

const dataToContext: dataInterface = {
  data: data,
};
const domContainer = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <ElementContext.Provider value={dataToContext}>
      <RouterProvider router={router} />
    </ElementContext.Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
