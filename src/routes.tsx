import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { CardElement } from "./components/CardElement";
import App from "./App";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/elements" element={<App />}>
      <Route path="/elements/:atomicNumber" element={<CardElement />} />
    </Route>
  )
);
