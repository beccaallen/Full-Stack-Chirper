import * as React from "react"
import { NavLink } from "react-router-dom"

const Navbar: React.FC<NavbarProps>= props => {

	return (
		<nav className="d-flex justify-content-between align-items-center bg-white shadow p-3 nav">
            <h1><NavLink className="m-3 text-dark btn-link type-logo" to="/">Chirper</NavLink></h1>
            <span className="navlinks">
                <NavLink className="btn btn-link" to="/compose"> + Compose</NavLink>
            </span>
        </nav>
	)
}

interface NavbarProps {}

export default Navbar