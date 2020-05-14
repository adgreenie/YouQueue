import React, { useContext } from "react"
import { AppContext } from "../App"

function Settings() {
  const app = useContext(AppContext)

  return <>{app.activeUser}'s Settings</>
}

export default Settings
