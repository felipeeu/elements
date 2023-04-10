import React from "react";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

interface IStylesApp {
  appContainer: any;
}

const styles: IStylesApp = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const App: React.FC<{}> = () => {
  return (
    <div style={styles.appContainer}>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
