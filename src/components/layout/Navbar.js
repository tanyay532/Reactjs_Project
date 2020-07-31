import React from 'react'
import propsType from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = ({ icon, title }) => {
    
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}
Navbar.defaultProps = {
    title: "Github-finder",
    icon: "fab fa-github"
};
Navbar.propsType = {
    title: propsType.string.isRequired,
    icon: propsType.string.isRequired
}

export default Navbar
