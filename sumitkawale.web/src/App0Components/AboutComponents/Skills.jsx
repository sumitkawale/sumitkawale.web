import React from "react";

const Card = props => {
    return <div className="card">
        <h3 className={props.color}>{props.title}</h3>
        <ul>
            {
                props.list.map(val => {
                    return <li>{val}</li>
                })
            }
        </ul>
    </div>
}

const Skills = () => {
    const FrontEnd = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Angular (beginner)",
        "BootStrap"
    ]

    const BackEnd = [
        "NodeJS",
        "Express",
        "Django",
        "PHP"
    ]

    const Database = [
        "MySQL",
        "MongoDB",
        "SQLite",
        "PostgreSQL"
    ]

    const Other = [
        "git",
        "AWS (beginner)",
        "MongodbAtlas",
        "LocalTunnel",
    ]

    return <div id='skills'>
        <div className="cards">
            <Card title="FrontEnd" color="" list={FrontEnd} />
            <Card title="BackEnd" color="color2" list={BackEnd} />
            <Card title="Database" color="color3" list={Database} />
            <Card title="Other" color="color1" list={Other} />
        </div>
    </div>
}

export default Skills