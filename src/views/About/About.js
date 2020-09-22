import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

//Componentns
import { 
    PersonalCard,
    Skills,
    Education,
    Individual,
    Languages,
    Facts
} 
from './components';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 25,
        paddingBottom: 25,
        color: 'lightgrey'
    },
    wrapper: {

    },
    right: {
        display: 'flex',
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
        padding: 15,
        textAlign: 'left',
        borderBottom: '1px solid rgba(220,220,220,0.2)',
    },
    languages: {
        padding: 15,
        textAlign: 'left',
    },
    life: {
        display: 'flex',
        paddingTop: 50,

    },
    facts: {
        paddingRight: 10
    },
    factsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
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
                    <div className={classes.partName}>Skills:</div>
                    <Skills />
                    </Grid>
                    <Grid item xs={12} md={7} direction="column">
                        <Grid item xs={12} className={classes.education}>
                            <div className={classes.partName}>Education</div>
                            <Education />
                        </Grid>
                        <Grid item xs={12} className={classes.individual}>
                            <div className={classes.partName}>Individual</div>
                            <Individual />
                        </Grid>
                        <Grid item xs={12} className={classes.languages}>
                            <div className={classes.partName}>Languages</div>
                            <Languages />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.life}>
                    <Grid item xs={5} className={classes.facts}>
                        <div className={classes.partName}>Quick Facts: </div>
                        <Grid item xs={12} className={classes.factsWrapper}>
                            <Facts />
                        </Grid>
                    </Grid>
                    <Grid item xs={7}>
                        <PersonalCard introductory={false} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default About;