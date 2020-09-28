import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Components
import { BackgroundImage, Foreground } from '../../../../../components';

//Bacgkround
import Analytics from '../../../../../assets/skills/analytics.jpeg';
import Leadership from '../../../../../assets/skills/leadership.jpeg';
import Organization from '../../../../../assets/skills/organization.jpeg';
import Communication from '../../../../../assets/skills/communication.jpeg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        [theme.breakpoints.up('sm')]: {
            flexWrap: 'nowrap',
            flexDirection: "row",
        }
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
        fontFamily: 'Nanum Myeongjo, serif',
        fontSize: 24,
        paddingBottom: 20,
        [theme.breakpoints.up('sm')]: {
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
        [theme.breakpoints.up('sm')]: {
            display: "block",
            fontSize: 70,
            lineHeight: 0.95
        }
    }
}))

const Personality = () => {
    const classes = useStyles();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    const quality = (background, text, dark) => {
        return (
            <Grid item xs={12} sm={6} className={classes.quality}>
                <BackgroundImage background={background} minHeight={200}>
                    <Foreground align="center" justify="center" dark={dark} >{text}</Foreground>
                </BackgroundImage>
            </Grid>
        )
    }

    return (
        <Grid item xs={12} className={classes.root} >
            <div className={classes.header}>QUALITITES</div>
            <Grid item xs={12} className={classes.wrapper}>
                <Grid item xs={12} className={classes.contentWrapper} >
                    <div className={classes.pageHeader}>INNOVATE</div>
                    <Grid item xs={12} className={classes.topContent}>
                        {quality(Analytics, 'Analytics', false)}
                        {quality(Leadership, 'Leadership', true)}
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.contentWrapper} >
                    <Grid item xs={12} className={classes.bottomContent}>
                        {quality(Organization, 'Organization', desktop ? true : false)}
                        {quality(Communication, 'Communication', desktop ? false : true)}
                    </Grid>
                    <div className={classes.pageHeader} style={{textAlign: 'end', color: 'black'}} >CREATE</div>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Personality;