import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

import { Page } from 'components';
import { Work } from './Work';
import { Skills } from './Skills'
import Background from 'assets/resume/background.webp'

const useStyles = makeStyles(theme => ({
    /*
    root: {
        color: "white",
        width: '100%'
    },
    wrapper: {
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        background: "yellow",
        '&:nth-child(2)': {
            background: 'red'
        },
        padding: '15px 15px 15px 15px',
        [theme.breakpoints.up('sm')]: { 
            padding: '50px 200px 50px 200px',
        }
    },
    name: {
        flex: 1,
        fontSize: 30,
        color: 'black',
        paddingBottom: 15,
        [theme.breakpoints.up('sm')]: { 
            paddingBottom: 25
        }
    }
    */
    root: {
        flexGrow: 1
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        background: "yellow",
        '&:nth-child(2)': {
            background: 'red'
        },
        padding: '15px 15px 15px 15px',
        [theme.breakpoints.up('sm')]: { 
            padding: '50px 200px 50px 200px',
        }
    },
    name: {

        fontSize: 30,
        color: 'black',
        paddingBottom: 15,
        [theme.breakpoints.up('sm')]: { 
            paddingBottom: 25
        }
    }
}));

const Resume = ({ name='Project Name', linkTo='/', description='Project Description', image, stack=[] }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid container spacing={0} className={classes.wrapper}>
                    <Grid item className={classes.name}>Work</Grid>
                    <Work />
                </Grid>
            </Grid>
        </div>
        /*
        <Page>
            <Grid container spacing={0} className={classes.root} >
                <Grid item className={classes.wrapper}>
                    <Grid item xs={12} className={classes.name}> Work </Grid>
                    <Grid item >
                        <Work />
                    </Grid>
                </Grid>
                <Grid container spacing={0} className={classes.wrapper}>
                    <Grid item className={classes.name}> Skills </Grid>
                    <Skills />
                </Grid>
            </Grid>
        </Page>
        */
    )
};  

export default Resume;