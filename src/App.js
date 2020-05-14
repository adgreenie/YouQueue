import React, { useState, createContext, useEffect } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Switcher from "./components/welcome/Switcher"
import "./style.scss"

export const AppContext = createContext()

function App() {
  const [activeUsername, setActiveUsername] = useState(false)

  useEffect(() => {
    const storedUsername = localStorage.getItem("username")
    if (storedUsername) {
      setActiveUsername(storedUsername)
    }
  }, [])

  const storeUsername = (username) => {
    localStorage.setItem("username", username)
    setActiveUsername(username)
  }

  return (
    <AppContext.Provider value={{ activeUsername, storeUsername }}>
      <Header />
      {activeUsername ? <Main /> : <Switcher />}
    </AppContext.Provider>
  )
}

export default App
