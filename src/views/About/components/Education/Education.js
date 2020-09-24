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
        paddingLeft:15,

    },
}))

const Education = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} className={classes.name}>
                EDUCATION
            </Grid>
            <EducationCard school='Portland State University' years='2015-2020' diploma='Bachelor of Computer Science' /> 
            <EducationCard school='David Douglas High School' years='2011-2014' diploma='High School Diploma' />
        </Grid>
    )
};

export default Education;