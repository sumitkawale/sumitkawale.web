import React from "react";

const Card = props => {
    return <div className="card">
        <h2>JavaScript</h2>
        <div className="progress">
            <span><span></span></span>
        </div>
    </div>
}

const Skills = () => {
    return <div id='skills'>
        <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
}

export default Skills