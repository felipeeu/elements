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
    <Route path="/" element={<App />}>
      <Route path="/:atomicNumber" element={<CardElement />} />
    </Route>
  )
);
