import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//IMAGES
import EducationBackground from '../../../../assets/education/education.jpg';

//Components
import { EducationCard } from '../../../../components';

const useStyles = makeStyles(theme => ({
    root: {
        background: `url(` + EducationBackground + `) no-repeat center`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover !important',
        height: 'calc(100vh - 90px)'
    },
    wrapper: {
        height: '100%',
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.7)',
        fontFamily: 'Cinzel, serif',
    },
    name: {
        fontSize: 40,
        fontWeight: 100,
        fontFamily: 'Francois One, sans-serif',
        textAlign: 'center',
        textDecoration: 'underline'
    },
    content: {
        marginTop: 30
    },
    item: {
        padding: 15
    }
}))

const Education = () => {
    const classes = useStyles();

    return (
        <Grid container item spacing={0} xs={12}>
            <Grid item xs={12} className={classes.name}>
                EDUCATION
            </Grid>
            <Grid container spacing={0} item xs={12} direction="row" className={classes.content}>
                <Grid item xs={12} md={6} className={classes.item} >
                    <EducationCard school='Portland State University' years='2015-2020' diploma='Bachelor of Computer Science' /> 
                </Grid>
                <Grid item xs={12} md={6} className={classes.item}>
                    <EducationCard school='David Douglas High School' years='2011-2014' diploma='High School Diploma' />
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Education;