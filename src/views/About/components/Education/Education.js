import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Components
import { EducationCard } from '../../../../components';

const useStyles = makeStyles(theme => ({
    name: {
        fontSize: 40,
        fontWeight: 100,
        fontFamily: 'Francois One, sans-serif',
        textDecoration: 'underline',
        color: 'white', 

        textAlign: 'start',
        paddingTop: 15,
        [theme.breakpoints.up('sm')]: {
            transform: 'rotate(180deg)',
            writingMode: 'vertical-rl',
        },
    },
    first: {
        padding: '0px 15px 15px 0px'
    },
    second: {
        padding: '0px 0px 15px 0px'
    }
}))

const Education = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} >
            <Grid item xs={12} md={1} className={classes.name}>
                EDUCATION
            </Grid>
            <Grid item xs={12} md={6} className={classes.first}>
                <EducationCard school='Portland State University' years='2015-2020' diploma='Bachelor of Computer Science' /> 
            </Grid>
            <Grid item xs={12} md={5} className={classes.second}>
                <EducationCard school='David Douglas High School' years='2011-2014' diploma='High School Diploma' />
            </Grid>
        </Grid>
    )
};

export default Education;