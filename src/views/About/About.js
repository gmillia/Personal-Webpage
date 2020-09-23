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
        paddingTop: 25,
        paddingBottom: 25,
        color: 'lightgrey'
    },
    pageItem: {
        paddingBottom: 15,
        borderBottom: '1px solid rgba(220,220,220,0.2)',
    },
    pageTwoRoot: {
        background: `url(` + EducationBackground + `) no-repeat center`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover !important',
        height: 'calc(100vh - 90px)'
    },
    pageTwoWrapper: {
        height: '100%',
        //flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.7)',
        fontFamily: 'Cinzel, serif',
    },
}))

const About = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} item xs={12} alignContent='flex-start' justify="center" className={classes.root}>
            <Grid container spacing={0} item xs={12} md={10} alignContent='flex-start' justify="center" className={classes.wrapper} >
                <Grid item xs={12} md={5} className={classes.pageItem}>
                    <PersonalCard />
                </Grid>
                <Grid item xs={12} md={7} className={classes.pageItem}>
                    <Skills />
                </Grid>
                <Grid container spacing={0} item xs={12} className={classes.pageTwoRoot}>
                    <Grid container spacing={0} item xs={12} className={classes.pageTwoWrapper}>
                        <Grid item xs={12}>
                            <Education />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <div style={{display:'flex',alignSelf:'stretch', width:'100%',height:'100px',background:'white'}}></div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Languages />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default About;