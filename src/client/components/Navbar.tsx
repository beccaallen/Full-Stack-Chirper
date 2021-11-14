import * as React from "react"
import { NavLink } from "react-router-dom"

const Navbar: React.FC<NavbarProps>= props => {

	return (
		<nav className="d-flex justify-content-between align-items-center shadow">
            <h1 className="m-3">Chirper</h1>
            <span className="navlinks">
                <NavLink className="btn btn-link" to="/">Home</NavLink>
                <NavLink className="btn btn-link" to="/compose">Compose</NavLink>
            </span>
        </nav>
	)
}

interface NavbarProps {}

export default Navbar