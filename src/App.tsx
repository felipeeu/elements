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
      <div style={styles.container}>
        <Outlet />
        <PeriodicTable />
      </div>
    </>
  );
};

export default App;
