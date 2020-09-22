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

//Componentns
import { Skill } from '../../components';

const useStyles = makeStyles(theme => ({
    root: {

    },
    wrapper: {

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
        display: 'flex',
        color: 'white'
    },
    leftContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(93,223,253, 0.6)',
        color: 'black',
        fontFamily: 'Cinzel, serif',
        minHeight: 'calc(100vh - 50px)',
        height: '100%'
    },
    intro: {
        fontSize: 30,
        fontWeight: 700,
        paddingTop: 230
    },
    introInfo: {
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: 'center'
    },
    links: {
        paddingTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    skills: {
        borderRight: '1px solid rgba(220,220,220,0.2)',
        paddingLeft: 15,
        paddingRight: 15
    },
    skillsName: {
        fontSize: 30,
        fontWeight: 100,
        fontFamily: 'Francois One, sans-serif',
        paddingBottom: 20
    }
}))

const skills = ['JavaScript', 'Python', 'Java', 'C++', 'C', 'React', 'HTML', 'SQL', 'No SQL', 'Bootstrap', 'CSS', 'Git', 'GCP', 'Firebase', 'jQuery' ]

const About = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} item xs={12} alignContent='flex-start' justify="center" className={classes.root}>
            <Grid container spacing={0} item xs={12} md={10} alignContent='flex-start' justify="center" className={classes.wrapper} >
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
                <Grid item xs={12} md={7} className={classes.right}>
                    <Grid item xs={12} md={6} className={classes.skills}>
                    <div className={classes.skillsName}>SKILLS:</div>
                    {
                        skills.map((skillName, index) => {
                            return <Skill key={index} name={skillName} />
                        })
                    }
                    </Grid>
                    <Grid item xs={12} md={6} direction="column">
                        <Grid item xs={12}>
                            Education
                        </Grid>
                        <Grid item xs={12}>
                            Personal
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default About;