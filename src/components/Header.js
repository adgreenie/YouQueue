import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { withRouter } from "react-router"
import { AppContext } from "../App"
import { Collapse, Navbar, NavbarToggler, Nav, Button } from "reactstrap"

function Header(props) {
  const app = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const handleActive = (path) => {
    return path === props.location.pathname ? "active" : ""
  }

  return (
    <header>
      <Navbar color="black" light expand="md">
        <Link to="/home" className="title">
          YouQueue
        </Link>
        <NavbarToggler id="toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav-list" navbar>
            <Link className={handleActive("/userpage")} to="/userpage">
              My Page
            </Link>
            <Link className={handleActive("/friends")} to="/friends">
              My Friends
            </Link>
            <Link className={handleActive("/search")} to="/search">
              Search Users
            </Link>
          </Nav>
        </Collapse>
        {app.activeUser && <Button onClick={app.logOut}>Log Out</Button>}
      </Navbar>
    </header>
  )
}

export default withRouter(Header)
