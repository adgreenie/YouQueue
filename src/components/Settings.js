import React, { useContext, useState } from "react"
import { AppContext } from "../App"
import { Button } from "reactstrap"
import { deleteUser } from "../services/api-helper"

function Settings() {
  const app = useContext(AppContext)
  const [step, setStep] = useState([0, "Delete User"])

  const handleDelete = async () => {
    switch (step[0]) {
      case 0:
        setStep([1, "Are you sure?"])
        break
      case 1:
        setStep([2, "This will delete everything you've shared and recieved"])
        break
      case 2:
        setStep([3, "Promise you want to delete your account?"])
        break
      case 3:
        await deleteUser(app.activeUser)
        app.logOut()
    }
  }

  return (
    <div className="settings">
      <Button color="danger" onClick={handleDelete}>
        {step[1]}
      </Button>
    </div>
  )
}

export default Settings
