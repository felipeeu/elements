import React from "react";
import { Outlet } from "react-router-dom";
import { PeriodicTable } from "./components/PeriodicTable";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
};

const App: React.FC<{}> = () => {
  return (
    <>
      <h1 style={{ position: "absolute" }}>Periodic Table of Elements</h1>
      <div style={styles.container}>
        <Outlet />
        <PeriodicTable />
      </div>
      <h3 className="text-center"> By Felipe Domingues</h3>
    </>
  );
};

export default App;
