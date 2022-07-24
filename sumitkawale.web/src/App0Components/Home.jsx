import React, { useEffect, useRef, useState } from "react";
import Typewriter from 'typewriter-effect/dist/core';

import "../App0Style/Home.css"
import gif from "../media/developer-developers.gif"

const Home = () => {
    return <div id="home">
        <div className="text">
            {/* <h2>Hi,</h2> */}
            <h2>Hi, I'm Sumit,</h2>
            <h3>I'm web developer</h3>
            <h4>I design & code beautifully simple things and love what I do.</h4>
        </div>

        <img src={gif} />
    </div>
}

export default Home