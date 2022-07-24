import React from "react";
import SKlogo from "../media/SKlogo.png"
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

let NavBar = () => <nav id="navbar">
    <a href="/">
        SK
        {/* <img src={SKlogo} alt="logo" /> */}
    </a>
    <ul>
        <li><a href={"#1"}>About</a></li>
        <li><a href={"#2"}>Projects</a></li>
        <li><a href={"#3"}>Blogs</a></li>
        <li><a href={"#4"}>Contact</a></li>
    </ul>
</nav>

export default NavBar