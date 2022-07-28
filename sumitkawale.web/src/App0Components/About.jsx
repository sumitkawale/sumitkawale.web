import React from 'react'
import { Link } from 'react-router-dom'

import "../App0Style/About.css"
import SKme from "../media/SKme.jpg"

//////////////////////////////////////
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
////////////////////////////////////

const AboutSelf = () => {
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
        <h3>I'm 21 years young</h3>
        <br />
        <Link to={"/resume"}>View My RESUME</Link>
    </div >
}

let About = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <div id="aboutParent" style={{ paddingTop: "80px" }}>
        <h1>About my <span></span><span></span></h1>
        <div id="about">
            <img class='skImage' src={SKme} alt="My Pic" />
            <div class="aboutTabs">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Self" {...a11yProps(0)} />
                        <Tab label="Education" {...a11yProps(1)} />
                        <Tab label="Current Status" {...a11yProps(2)} />
                        <Tab label="Skills" {...a11yProps(2)} />
                        <Tab label="Experience" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <AboutSelf />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Education
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Current Status
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Skills
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Experience
                </TabPanel>
            </div>
        </div>
    </div>
}

export default About