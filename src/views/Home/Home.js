import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Fade } from '@material-ui/core';

//COMPONENTS
import { Page, AnimateText, Delay } from 'components'

//Images
import Background from 'assets/abstract.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row',
        flexWrap: 'wrap',
        background: 'linear-gradient(360deg, rgba(0,0,0,0.5) 50%, rgba(255,255,255,0.5) 50%)'
    },
    left: {
        display: 'flex',
        flexDirection: 'column',

    },
    right: {
        display: 'flex',
        background: 'rgba(0,0,0,0.5)'
    },
    leftWrapper: {
        display: 'flex',


    },
    firstName: {
        fontSize: 80,
        display: 'flex',
        color: 'black',
        lineHeight: '0.9',
        alignItems: 'flex-end'
    },
    lastName: {
        display: 'flex',
        fontSize: 55,
        color: 'white'
    },
})) 

const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Page background={Background} useBackground={true} darken={false} >
            <Grid item xs={12} className={classes.root}>
                <Grid item xs={12} sm={6} className={classes.left}>
                    <Grid item xs={12} className={classes.firstName} >
                        <AnimateText textArray={'ILLIA'.split('')} />
                    </Grid>
                    <Grid item xs={12} className={classes.lastName} >
                        <Delay delayBy={1300}>
                            <AnimateText textArray={'SHERSHUN'.split('')} />
                        </Delay>
                    </Grid>
                </Grid>
                <Fade in={true} timeout={3500} >
                    <Grid item xs={12} sm={6} className={classes.right} ></Grid>
                </Fade>
            </Grid>
        </Page>
    )
};

export default Home;