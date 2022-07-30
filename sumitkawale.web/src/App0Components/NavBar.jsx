import React from "react";

// import SKlogo from "../media/SKlogo.png"
import "../App0Style/NavBar.css"

const scroll = (to, e) => {
    let a = document.getElementById(to)
    a.scrollIntoView({ behavior: "smooth" })
}

const ScrollLink = (props) => {
    return <>
        <a className="animate" onClick={e => scroll(props.to, e)} href>{props.children}</a>
    </>
}

const gotoTop = e => {
    window.scrollBy(0, -100000000000)
}

const NavBar = () => <nav id="navbar">
    <a className="animate" href onClick={gotoTop}>
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