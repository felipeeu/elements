import React, { useContext, useEffect, useState } from "react";
import { Header } from "./components/header";
import { getElements } from "./api";
import ElementContext from "./context/elements_context"

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
  
  interface dataInterface {
    data: Array<object>
  }

  const dataToContext:dataInterface ={
    data:data
  } 

  useEffect(() => {
    getElements("http://localhost:4000/elements", setData);
  }, []);

  return (
    <div style={styles.appContainer}>
      <Header />
      <React.Suspense fallback={<h3>Carregando...</h3>}>
        <ElementContext.Provider value= {dataToContext}>
          <Main props={data} />
        </ElementContext.Provider>
      </React.Suspense>
    </div>
  );
};

export default App;
