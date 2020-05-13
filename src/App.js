import React, { useState, createContext } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Switcher from "./components/welcome/Switcher"
import "./style.scss"

export const AppContext = createContext()

function App() {
  const [activeUsername, setActiveUsername] = useState(false)

  return (
    <AppContext.Provider value={{ activeUsername, setActiveUsername }}>
      <Header />
      {activeUsername ? <Main /> : <Switcher />}
    </AppContext.Provider>
  )
}

export default App
