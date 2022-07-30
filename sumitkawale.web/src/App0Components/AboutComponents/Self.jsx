import React from "react"
import { Link } from 'react-router-dom'

const date1 = new Date('1/15/2002');
const date2 = new Date();
let year = Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)) / 365;

const Self = () => {
    return <div id='self'>
        <h2>I'm Sumit Uttamrao Kawale.</h2>
        <h5>#full-stack-developer #frontend #backend </h5>
        <p>
            I'm Studying in B.E 3<sup>rd</sup> year of Engineering in IT department in <abbr title={"Pune Institute Of Computer Technology"}>PICT</abbr>.
            <br />
            Currently I'm working in <b>Shivankit TechSolutions</b> as Web Developer intern.
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