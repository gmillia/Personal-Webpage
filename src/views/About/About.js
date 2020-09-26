import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

import { One, Two } from './pages';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        width: '100%',
    },
}))

const About = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} item xs={12} alignContent='flex-start' justify="center" className={classes.root}>
            <One />
        </Grid>
    )
};

export default About;