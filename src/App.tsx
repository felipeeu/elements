import React, { useEffect, useState } from "react";
import { Header } from "./components/header";
import {getElements} from "./api"

const Main = React.lazy(() => import("./components/main"));

interface IStylesApp {
  appContainer: any;
}

const styles: IStylesApp = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

const App: React.FC<{}> = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
     getElements("http://localhost:4000/elements",setData);
  }, []);

  return (
    <div style={styles.appContainer}>
      <Header />
      <React.Suspense fallback={<h3>Carregando...</h3>}>
        <Main props={data} />
      </React.Suspense>
    </div>
  );
};

export default App;
