import React, { useContext } from "react";

import Avatar from '@mui/material/Avatar';
import parse from 'html-react-parser';
import LinearProgress from '@mui/material/LinearProgress';

import { AboutDataContext } from '../../App0'

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
            <a href={props.link}>
                <Avatar
                    {...stringAvatar(props.logoTxt)}
                    alt={props.alt}
                    src={props.logo}
                    style={{ background: "#f7df1e", fontWeight: "bold", color: "#323330" }}
                    sx={{ width: 80, height: 80 }}
                />
            </a>
        </span>
        <div>
            <h2><a href={props.link}>{parse(props.clg)}</a></h2>
            <h3>{props.courseDetail} in <strong>{props.branch}</strong></h3>
            <p className="date">
                {props.from} - {props.to}
            </p>
            <p className="other">
                <i>{props.status} </i>
                {props.grade && parse(` with <b> ${props.grade} </b>`)}
            </p>
        </div>
    </div>
}

const Education = () => {

    let educationData = useContext(AboutDataContext)
    // console.warn(educationData)

    return <div id='education'>
        {
            educationData ? educationData.map((v) => {
                return <Card
                    clg={v.clg}
                    link={v.link}
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
            }) : <>
                <LinearProgress />
            </>
        }
    </div>
}

export default Education