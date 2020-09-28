import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import { Fade } from '@material-ui/core';

import { FakeEmpty } from 'components';

const useStyles = makeStyles(theme => ({
    root: {
        color: 'white',
        padding: 30,
        [theme.breakpoints.up('sm')]: {
            padding: 0,
            paddingLeft: 15,
            borderLeft: '2px solid rgba(0,0,0,0.5)'
        }
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 45,
        lineHeight: 0.8,
        paddingBottom: 15,
        [theme.breakpoints.up('sm')]: {
            fontSize: 75
        }
    },
    text: {
        display: 'flex',
        flexFlow: 'row wrap',
        fontSize: 18,
        color: 'rgb(220,220,220)'
    }
}));

const Personal = () => {
    const classes = useStyles();

    return (
        <Fade in={true} timeout={4000}>
            <Grid item xs={12} className={classes.root} >
                <Grid item className={classes.header}>
                    <span style={{color: 'black'}}>Kiev</span>
                    <span>Portland</span>
                </Grid>
                <Grid item xs={12} sm={8} className={classes.text}>
                    Having moved from Ukraine to USA, I have graduated Portland State University with a Bachelor of Computer Science degree.
                </Grid>
            </Grid>
        </Fade>
    )
};  

export default Personal;