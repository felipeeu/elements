import React from "react";
import Routes from "../routes.js";

export const Main = props => (
  <main>
    <Routes payload={props.payload} />
  </main>
);
