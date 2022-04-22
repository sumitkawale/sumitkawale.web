import React from 'react'
import { useParams } from "react-router-dom"
import { getApp } from '../data'

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}));

export default function App() {
    let params = useParams();

    let data = getApp(params.app)
    if (data) {
        let link = data.link
        console.log(link)
        return <>
            <Div>{params.app}</Div>
            <Button color="secondary" variant="outlined" onClick={() => { window.location.href = link; }}>Open</Button>
        </>
    } else {
        return <>
            <h1>{params.app} Not Found</h1>
        </>
    }
}
