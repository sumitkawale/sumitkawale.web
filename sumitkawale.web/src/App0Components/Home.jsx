import React from "react";

import "../App0Style/Home.css"

import gif from "../media/developer-developers.gif"
import github from "../media/github.svg"
import discord from "../media/discord.svg"
import instagram from "../media/instagram.svg"
import linkedin from "../media/linkedin.svg"
import twitter from "../media/twitter.svg"

window.addEventListener("load", (e) => {
    const elements = document.querySelectorAll(".animateText")
    elements.forEach(element => {
        const letters = element.innerHTML.split("")
        element.innerHTML = ""
        let word = document.createElement("div")
        letters.map((l, i) => {
            let span = document.createElement("span")
            span.className = "animateLetter animate"
            span.innerHTML = l === " " ? "&nbsp" : l
            word.appendChild(span)
            console.log("ok")
            if (l === " ") {
                element.appendChild(word)
                word = document.createElement("div")
            }
            if (i === letters.length - 1) {
                element.appendChild(word)
            }
            return "";
        })
    });
})

const Home = () => {
    return <div id="home">
        <div className="text">
            <h2 className="animateText">Hi, I'm Sumit,</h2>
            <h3 className="animateText">I'm web developer</h3>
            <h4 className="animateText">I design and code passionately and I love what I do.</h4>{/* I design & code beautifully simple things and love what I do. */}
            <div className="socialMedia">
                <a href="https://github.com/sumitkawale" target={"_blank"} rel="noreferrer">
                    <img className="animateLetter animate" src={github} alt="github_icon" />
                </a>
                <a href="https://www.linkedin.com/in/sumit-kawale/" target={"_blank"} rel="noreferrer">
                    <img className="animateLetter animate" src={linkedin} alt="linkedin_icon" />
                </a>
                <a href="https://twitter.com/SumitKawale18/" target={"_blank"} rel="noreferrer">
                    <img className="animateLetter animate" src={twitter} alt="twitter_icon" />
                </a>
                <a href="https://discord.com/users/sumitkawale#7825" target={"_blank"} rel="noreferrer">
                    <img className="animateLetter animate" src={discord} alt="discord_icon" />
                </a>
                <a href="https://www.instagram.com/sumitkawale1/" target={"_blank"} rel="noreferrer">
                    <img className="animateLetter animate" src={instagram} alt="instagram_icon" />
                </a>
            </div>
        </div>
        <img className="gif" src={gif} alt="gif" />
    </div>
}

export default Home