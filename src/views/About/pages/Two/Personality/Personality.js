import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Grow } from '@material-ui/core';
import { Fade } from '@material-ui/core';

//Components
import { BackgroundImage, Foreground, Visibility } from 'components';

//Bacgkround
import Analytics from 'assets/skills/analytics.jpeg';
import Leadership from 'assets/skills/leadership.jpeg';
import Organization from 'assets/skills/organization.jpeg';
import Communication from 'assets/skills/communication.jpeg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'Cinzel, serif',
        fontSize: 24,
        paddingBottom: 20,
        [theme.breakpoints.up('sm')]: {
            fontFamily: 'Nanum Myeongjo, serif',
            fontSize: 35,
            fontWeight: 700,
            textOrientation: 'upright',
            writingMode: 'vertical-rl',
            //Text transformation
            background: 'linear-gradient(white 50%, black 50%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            paddingRight: 20,
            paddingBottom: 0,
        }
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: "column",
        color: 'white'
    },
    topContent: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: "flex-end",
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
        }
    },
    bottomContent: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: "flex-end",
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
        }
    },
    quality: {
        display: "flex", 
        flex: 1, 
        width: 'inherit'
    },
    pageHeader: {
        display: 'none',
        color: "white",
        [theme.breakpoints.up('sm')]: {
            display: "block",
            fontSize: 70,
            lineHeight: 0.95
        }
    },
    topHeader: {
        flex: 0,
    },
    bottomHeader: {
        flex: 0,
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        [theme.breakpoints.up('sm')]: {
            flexWrap: 'nowrap'
        }
    }
}))

const Personality = () => {
    const classes = useStyles();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    const header = (last=false, text='') => {
        return (
            <Visibility>
                <Fade in={true} timeout={last ? 3000 : 500}>
                    <div className={classes.pageHeader} style={{ textAlign: last ? 'end' : 'start', color: last ? 'black' : 'white' }}>
                        {text}
                    </div>
                </Fade>
            </Visibility>
        )
    }

    const qualityHeader = () => {
        return (
            <Visibility>
                <Fade in={true} timeout={1500}>
                    <div className={classes.header}>{ desktop ? 'QUALITIES' : 'Qualities' }</div>
                </Fade>
            </Visibility>
        )
    }

    const quality = (background, text, dark, offset) => {
        return (
            <Visibility>
                <Grow in={true} timeout={offset}>
                    <Grid item xs={12} sm={6} className={classes.quality}>
                        <BackgroundImage background={background} minHeight={200}>
                            <Foreground align="center" justify="center" dark={dark} >{text}</Foreground>
                        </BackgroundImage>
                    </Grid>
                </Grow>
            </Visibility>
        )
    }


    return (
        <Grid item xs={12} className={classes.root}>
            <Grid item xs={12} className={classes.topHeader}>
                {header(false, 'INNOVATE')}
            </Grid>
            <Grid item xs={12} className={classes.content} >
                {qualityHeader()}
                <Grid item xs={12} className={classes.wrapper}>
                    <Grid item xs={12} className={classes.topContent}>
                        {quality(Analytics, 'Analytics', false, 500)}
                        {quality(Leadership, 'Leadership', true, 1500)}
                    </Grid>
                    <Grid item xs={12} className={classes.bottomContent}>
                        {quality(Organization, 'Organization', desktop ? true : false, 2500)}
                        {quality(Communication, 'Communication', desktop ? false : true, 3500)}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.bottomHeader} >{header(true, 'CREATE')}</Grid>
        </Grid>
    )
};

export default Personality;