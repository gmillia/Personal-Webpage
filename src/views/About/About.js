import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

//Componentns
import { 
    PersonalCard,
    Skills,
    Education
} 
from './components';

const useStyles = makeStyles(theme => ({
    root: {
        paddingBottom: 25
    },
    wrapper: {

    },
    right: {
        display: 'flex',
        color: 'lightgrey'
    },
    skills: {
        borderRight: '1px solid rgba(220,220,220,0.2)',
        paddingLeft: 15,
        paddingRight: 15
    },
    partName: {
        fontSize: 30,
        fontWeight: 100,
        fontFamily: 'Francois One, sans-serif',
        paddingBottom: 20
    },
    education: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        textAlign: 'left',
        borderBottom: '1px solid rgba(220,220,220,0.2)',
    },
    individual: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        textAlign: 'left',
    }
}))

const About = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} item xs={12} alignContent='flex-start' justify="center" className={classes.root}>
            <Grid container spacing={0} item xs={12} md={10} alignContent='flex-start' justify="center" className={classes.wrapper} >
                <Grid item xs={12} md={5} className={classes.left}>
                    <PersonalCard />
                </Grid>
                <Grid item xs={12} md={7} className={classes.right}>
                    <Grid item xs={12} md={5} className={classes.skills}>
                    <div className={classes.partName}>SKILLS:</div>
                    <Skills />
                    </Grid>
                    <Grid item xs={12} md={7} direction="column">
                        <Grid item xs={12} className={classes.education}>
                            <div className={classes.partName}>Education</div>
                            <Education />
                        </Grid>
                        <Grid item xs={12} className={classes.individual}>
                            <div className={classes.partName}>Individual</div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default About;