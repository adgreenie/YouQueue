import React, { useState, createContext, useEffect } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Switcher from "./components/welcome/Switcher"
import "./style.scss"

export const AppContext = createContext()

function App() {
  const [activeUser, setActiveUser] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem("username")
    if (storedUser) {
      setActiveUser(storedUser)
    }
  }, [])

  const storeUser = (username) => {
    localStorage.setItem("username", username)
    setActiveUser(username)
  }

  const logOut = () => {
    localStorage.removeItem("username")
    setActiveUser(false)
  }

  return (
    <AppContext.Provider value={{ activeUser, storeUser, logOut }}>
      <Header />
      {activeUser ? <Main /> : <Switcher />}
    </AppContext.Provider>
  )
}

export default App
