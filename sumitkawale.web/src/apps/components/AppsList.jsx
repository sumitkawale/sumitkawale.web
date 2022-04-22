import React from "react"
import { Link } from "react-router-dom"
import { getApps } from '../data'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function AppsList() {

    const AppCard = (props) => <React.Fragment>
        <Box sx={{ minWidth: 275, margin: 5 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {/* {props.name} */}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Description:
                    </Typography>
                    <Typography variant="body2">
                        "{props.description}"
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/apps/${props.appName}`}><Button size="small">{props.name}</Button></Link>
                </CardActions>
            </Card>
        </Box>
    </React.Fragment>

    return <>
        <hr />
        {
            getApps().map((val) => {
                return <AppCard key={`/apps/${val.appName}`} description={val.description} appName={val.appName} name={val.name} />
            })
        }
    </>
}
