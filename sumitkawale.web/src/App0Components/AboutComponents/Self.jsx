import React, { useContext, useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';

import { AboutDataContext } from '../../App0'

const date1 = new Date('1/15/2002');
const date2 = new Date();
let year = Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)) / 365;

const Self = () => {
    const defaultData = {
        nextHashTags: " #javascript ",
        studyingInYear: "3<sup>rd</sup>",
        workingIn: "Shivankit TechSolutions",
        workingAs: "Web Developer intern",
        beComplete: false
    }

    const [selfData, updateSelfData] = useState(defaultData);

    let selfNewData = useContext(AboutDataContext)

    useEffect(() => {
        updateSelfData(selfNewData ?? defaultData)
        // eslint-disable-next-line
    }, [selfNewData])

    return <div id='self'>
        <h2>I'm Sumit Uttamrao Kawale.</h2>
        <h5>#full-stack-developer #frontend #backend {selfData.nextHashTags}</h5>
        <p>
            {
                selfData.beComplete
                    ?
                    parse(`I've Completed B.E in IT department in <abbr title="Pune Institute Of Computer Technology">PICT</abbr>`)
                    :
                    parse(`I'm Studying in B.E ${selfData.studyingInYear} year in IT department in <abbr title="Pune Institute Of Computer Technology">PICT</abbr>`)
            }.
            <br />
            Currently I'm working in <b>{selfData.workingIn}</b> as {selfData.workingAs}.
            <br />
            <br />
            <strong>I'm Highly Interested in JavaScript</strong>, I want to be professional in JavaScript development and some of its frameworks
        </p>
        <h3>I'm {parseInt(year)} years young</h3>
        <br />
        <Link to={"/resume"}>View My RESUME</Link>
    </div >
}

export default Self