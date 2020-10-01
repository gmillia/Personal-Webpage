import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

import { Page } from 'components';
import { Work } from './Work';
import { Skills } from './Skills'
import Background from 'assets/resume/background.webp'

const useStyles = makeStyles(theme => ({
    root: {

    }
}));

const Resume = ({ name='Project Name', linkTo='/', description='Project Description', image, stack=[] }) => {
    const classes = useStyles();

    return (
        <Page  >
            <Grid item xs={12} className={classes.root} >
                <Work />
                <Skills />
            </Grid>
        </Page>
    )
};  

export default Resume;