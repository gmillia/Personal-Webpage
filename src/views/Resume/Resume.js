import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

import { Page } from 'components';
import { Work } from './Work';
import { Skills } from './Skills'
import Background from 'assets/resume/background.webp'

const useStyles = makeStyles(theme => ({
    root: {
        color: "white",
        padding: '50px 15px 15px 15px'
    },
    rowRoot: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: '15px 0px 15px 0px'
    },
    name: {
        color: 'white',
        fontSize: 25
    },
}));

const Resume = ({ name='Project Name', linkTo='/', description='Project Description', image, stack=[] }) => {
    const classes = useStyles();

    const row = (name, component) => {
        return (
            <Grid item xs={12} className={classes.rowRoot}>
                <Grid item xs={12} sm={3}>{name}</Grid>
                <Grid item xs={12} sm={9}>{component}</Grid>
            </Grid>
        )
    }

    return (
        <Page  >
            <Grid item xs={12} className={classes.root} >
                {row('Work', <Work />)}
                {row('Skills', <Skills />)}
            </Grid>
        </Page>
    )
};  

export default Resume;