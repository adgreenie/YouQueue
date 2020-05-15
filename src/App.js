import React, { useState, createContext, useEffect } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Switcher from "./components/welcome/Switcher"
import { getUsernameExists } from "./services/api-helper"
import "./style.scss"

export const AppContext = createContext()

function App() {
  const [activeUser, setActiveUser] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem("username")

    const checkUser = async (username) => {
      ;(await getUsernameExists(username))
        ? setActiveUser(username)
        : setActiveUser(false)
    }

    if (storedUser) {
      checkUser(storedUser)
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
