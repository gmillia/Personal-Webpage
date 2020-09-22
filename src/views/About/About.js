import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

//IMAGE
import Me from '../../assets/me.png'

//ICONS
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { CallReceived } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1
    },
    wrapper: {
        height: '-webkit-fill-available'
    },
    left: {
        background: `url(` + Me + `) no-repeat center`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        height: '100%'
    },
    right: {
        height: '100%'
    },
    leftContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(93,223,253, 0.6)',
        color: 'black',
        fontFamily: 'Cinzel, serif',
        height: '100%'
    },
    intro: {
        fontSize: 30,
        fontWeight: 700,
        paddingTop: 230
    },
    introInfo: {
        paddingTop: 15,
        paddingBottom: 15
    },
    links: {
        paddingTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

const About = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} item xs={12} alignContent='flex-start' justify="center" className={classes.root}>
            <Grid container spacing={0} item xs={12} md={8} alignContent='flex-start' justify="center" className={classes.wrapper} >
                <Grid item xs={12} md={5} className={classes.left}>
                    <div className={classes.leftContent}>
                        <div className={classes.intro}>Hey, I'm Illia.</div>
                        <div className={classes.introInfo}>full-stack developer from Portland, OR</div>
                        <Link to='/contact' style={{textDecoration: 'none'}}>
                            <Button variant='contained' color='primary'>GET IN TOUCH</Button>
                        </Link>
                        <div className={classes.links}>
                            <IconButton href='https://github.com/gmillia' target='_blank'>
                                <GitHubIcon fontSize='small'/>
                            </IconButton>
                            <IconButton href='https://www.linkedin.com/in/illia-shershun/' target='_blank'>
                                <LinkedInIcon />
                            </IconButton>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={7} className={classes.right}></Grid>
            </Grid>
        </Grid>
    )
};

export default About;