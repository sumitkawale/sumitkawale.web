import React from "react";

// import SKlogo from "../media/SKlogo.png"
import "../App0Style/NavBar.css"

const scrolll = (to, e) => {
    let a = document.getElementById(to)
    a.scrollIntoView({ behavior: "smooth" })
}

const ScrollLink = (props) => {
    return <>
        <a onClick={e => scrolll(props.to, e)}>{props.children}</a>
    </>
}

const NavBar = () => <nav id="navbar">
    <a href="/">
        SK
        {/* <img src={SKlogo} alt="logo" /> */}
    </a>
    <ul>
        <li><ScrollLink to={"aboutParent"}>About</ScrollLink></li>
        <li><ScrollLink to={"projects"}>Projects</ScrollLink></li>
        <li><ScrollLink to={"blogs"}>Blogs</ScrollLink></li>
        <li><ScrollLink to={"contact"}>Contact</ScrollLink></li>
    </ul>
</nav>

export default NavBar