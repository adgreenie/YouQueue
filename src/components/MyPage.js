import React, { useContext } from "react"
import { AppContext } from "../App"

function MyPage() {
  const app = useContext(AppContext)

  return <>{app.activeUser}'s Page</>
}

export default MyPage
