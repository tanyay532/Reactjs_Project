import React from 'react'
import propsType from 'prop-types'

const Navbar = ({ icon, title }) => {

    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
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
