import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Login from './components/Login'
import './style.scss'

function App() {
  const [username, setUsername] = useState(false)

  return (
    <>
      <Header />
      {username ? <Main /> : <Login />}
    </>
  )
}

export default App
