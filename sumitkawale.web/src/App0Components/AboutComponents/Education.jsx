import React, { useEffect, useState } from "react";

import Avatar from '@mui/material/Avatar';

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor("name"),
        },
        children: `${name}`,
    };
}

const Card = (props) => {
    return <div className="educationCard">
        <span className="avatar">
            <Avatar
                {...stringAvatar(props.logoTxt)}
                alt={props.alt}
                src={props.logo}
                style={{ background: "#f7df1e", fontWeight: "bold", color: "#323330" }}
                sx={{ width: 80, height: 80 }}
            />
        </span>
        <div>
            <h2>{props.clg}</h2>
            <h3>{props.courseDetail} in <strong>{props.branch}</strong></h3>
            <p className="date">
                {props.from} - {props.to}
            </p>
            <p className="other">
                <i>{props.status} </i>
                <b>{props.grade && ` with ${props.grade} `}</b>
            </p>
        </div>
    </div>
}

const Education = () => {
    const [data, updateData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3030/education")
            .then(d => d.json())
            .then(d => { console.log(d); updateData(d); })
            .catch(e => console.warn(e))
    }, [])

    return <div id='education'>
        {
            data.map((v) => {
                return <Card
                    clg={v.clg}
                    courseDetail={v.courseDetail}
                    branch={v.branch}
                    from={v.from}
                    to={v.to}
                    status={v.status}
                    grade={v.grade}
                    logo={"http://localhost:3030" + v.logo}
                    logoTxt={v.logoTxt}
                    alt={v.alt}
                />
            })
        }
    </div>
}

export default Education