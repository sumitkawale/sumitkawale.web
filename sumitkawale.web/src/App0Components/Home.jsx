import React from "react";

import "../App0Style/Home.css"

import gif from "../media/developer-developers.gif"
import github from "../media/github.svg"
import discord from "../media/discord.svg"
import instagram from "../media/instagram.svg"
import linkedin from "../media/linkedin.svg"
import twitter from "../media/twitter.svg"

const Home = () => {
    return <div id="home">
        <div className="text">
            <h2>Hi, I'm Sumit,</h2>
            <h3>I'm web developer</h3>
            <h4>I design & code passionately and I love what I do.</h4>{/* I design & code beautifully simple things and love what I do. */}
            <div className="socialMedia">
                <a href="https://github.com/sumitkawale" target={"_blank"} rel="noreferrer"><img src={github} alt="github_icon" /></a>
                <a href="https://www.linkedin.com/in/sumit-kawale/" target={"_blank"} rel="noreferrer"><img src={linkedin} alt="linkedin_icon" /></a>
                <a href="https://twitter.com/SumitKawale18/" target={"_blank"} rel="noreferrer"><img src={twitter} alt="twitter_icon" /></a>
                <a href="https://discord.com/users/sumitkawale#7825" target={"_blank"} rel="noreferrer"><img src={discord} alt="discord_icon" /></a>
                <a href="https://www.instagram.com/sumitkawale1/" target={"_blank"} rel="noreferrer"><img src={instagram} alt="instagram_icon" /></a>
            </div>
        </div>

        <img className="gif" src={gif} alt="gif" />
    </div>
}

export default Home