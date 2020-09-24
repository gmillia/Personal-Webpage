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

//IMAGES
import EducationBackground from '../../assets/education/education.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        color: 'lightgrey'
    },
    pageWrapper:{
        minHeight: theme.page.height,
        margin: theme.page.margin
    },
    pageTwoRoot: {
        background: `url(` + EducationBackground + `) no-repeat center`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover !important',
        minHeight: theme.page.height,
        margin: theme.page.margin
    },
    pageTwoWrapper: {
        backgroundColor: 'rgba(0,0,0, 0.7)',
        fontFamily: 'Cinzel, serif',

    },
}))

const About = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} item xs={12} alignContent='flex-start' justify="center" className={classes.root}>
            <Grid container spacing={0} item xs={12} md={10} alignContent='flex-start' justify="center" className={classes.wrapper} >
                <Grid item container spacing={0} xs={12} className={classes.pageWrapper}>
                    <Grid item xs={12} md={5} >
                        <PersonalCard />
                    </Grid>
                    <Grid item xs={12} md={7} >
                        <Skills />
                    </Grid>
                </Grid>
                <Grid container spacing={0} className={classes.pageTwoRoot}>
                    <Grid item xs={12} className={classes.pageTwoWrapper}>
                        <Education />
                        <Grid container spacing={0} >
                            <Grid item xs={12} md={8}>
                                <Individual />
                            </Grid>
                            <Grid item xs={12} md={4} >
                                <Languages />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default About;