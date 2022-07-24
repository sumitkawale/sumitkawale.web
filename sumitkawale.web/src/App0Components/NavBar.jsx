import React from "react";

// import SKlogo from "../media/SKlogo.png"
import "../App0Style/NavBar.css"

// const scrolll = (to, e) => {
//     let a = document.getElementById(to)
//     a.scrollIntoView({behavior:"smooth"})
// }

// const ScrollLink = (props) => {
//     return <>
//         <a onClick={e=>scrolll(props.to, e)}>{props.children}</a>
//     </>
// }

const NavBar = () => <nav id="navbar">
    <a href="/">
        SK
        {/* <img src={SKlogo} alt="logo" /> */}
    </a>
    <ul>
        <li><a href={"#about"}>About</a></li>
        <li><a href={"#projects"}>Projects</a></li>
        <li><a href={"#blogs"}>Blogs</a></li>
        <li><a href={"#contact"}>Contact</a></li>
    </ul>
</nav>

export default NavBar