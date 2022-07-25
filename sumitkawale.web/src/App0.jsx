import React from 'react'

import "./App0Style/App0Style.css"

import Header from './App0Components/NavBar'
import Home from './App0Components/Home'
import About from './App0Components/About'

const wave2 = {
    transform: "rotate(180deg) translateY(2px)",
}

export default function App() {
    return <>
        <Header />
        <svg style={{ ...wave2 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f7df1e" fill-opacity="1" d="M0,96L20,85.3C40,75,80,53,120,58.7C160,64,200,96,240,117.3C280,139,320,149,360,176C400,203,440,245,480,256C520,267,560,245,600,202.7C640,160,680,96,720,96C760,96,800,160,840,165.3C880,171,920,117,960,128C1000,139,1040,213,1080,234.7C1120,256,1160,224,1200,197.3C1240,171,1280,149,1320,154.7C1360,160,1400,192,1420,208L1440,224L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>
        </svg>
        <Home />
        <div id='content'>
            <div style={{ paddingTop: "90px" }}>
                <About />
            </div>
        </div>
        {/* ------------------ */}
        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />        <br />
    </>
}
