import React, { useState, createContext, useEffect } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Switcher from "./components/welcome/Switcher"
import { getAllPosts } from "./services/api-helper"
import { formatDate } from "./services/formatDate"
import "./style.scss"

export const AppContext = createContext()

function App() {
  const [activeUsername, setActiveUsername] = useState(false)

  useEffect(() => {
    const makeAPICall = async () => {
      // const resp = await getAllPosts()
      // const date = new Date(resp[0].date)
      // console.log("formatDate(date)", formatDate(date))
    }
    makeAPICall()
  }, [])

  return (
    <AppContext.Provider value={{ activeUsername, setActiveUsername }}>
      <Header />
      {activeUsername ? <Main /> : <Switcher />}
    </AppContext.Provider>
  )
}

export default App
