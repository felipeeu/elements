import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { CardElement } from "./components/CardElement";
import { PeriodicTable } from "./components/PeriodicTable";
import App from "./App";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="table" element={<PeriodicTable />} />
      <Route path=":atomicNumber" element={<CardElement />} />
    </Route>
  )
);
