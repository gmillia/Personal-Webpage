import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Slide from '@material-ui/core/Slide';
import { Fade } from '@material-ui/core';

//COMPONENTS
import { Page, Visibility, BackgroundImage, AnimateText } from 'components'

//Images
import Background from 'assets/abstract.jpg';
import TopBackground from 'assets/ml.jpg';
import MiddleBackground from 'assets/ohsrank.jpg';
import BottomBackground from 'assets/stopspot.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',

    },
    left: {
        display: 'flex',
    },
    firstName: {
        fontSize: 40,

    },
    lastName: {
        fontSize: 35,
        writingMode: 'vertical-rl',
        textOrientation: 'upright',
    },
    back: {
        position: 'absolute',
        top: 50,
        left: 0,
        display: 'flex',
        width: '100%',
        height: theme.page.height,
    },
    front: {
        display: 'flex',
    },
    backLeft: {
        background: 'rgba(0,0,0,0.5)'
    }
})) 

const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Page background={Background} useBackground={true} darken={false} >
            <Grid item xs={12} className={classes.root}>
                <Grid item xs={12} className={classes.back}>
                    <Fade in={true} timeout={3000}>
                        <Grid item xs={12} sm={6} className={classes.backLeft} ></Grid>
                    </Fade>
                </Grid>
                <Grid item xs={12} className={classes.front}>
                    <Grid item xs={12} sm={6} className={classes.left}>
                        <div className={classes.firstName}>
                            <AnimateText textArray={'ILLIA'.split('')} />
                        </div>
                        <div className={classes.lastName}>
                            <AnimateText textArray={'SHERSHUN'.split('')} />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Page>
    )
};

export default Home;