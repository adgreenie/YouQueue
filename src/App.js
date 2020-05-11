import React, { useState, createContext } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import "./style.scss";

export const AppContext = createContext()

function App() {
  const [activeUsername, setActiveUsername] = useState(false);

  return (
    <AppContext.Provider value={ {activeUsername} }>
      <Header />
      {activeUsername ? <Main /> : <Login setActiveUsername={setActiveUsername} />}
    </AppContext.Provider>
  );
}

export default App;
