import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

//Components
import { EducationCard } from '../../../../components';

const useStyles = makeStyles(theme => ({
    root:{
        height: '100%'
    },
    name: {
        width: '100%',
        fontSize: 40,
        fontWeight: 100,
        fontFamily: 'Francois One, sans-serif',
        textDecoration: 'underline',
        color: 'white', 
        textAlign: 'center',
        paddingBottom: 16,
        [theme.breakpoints.up('sm')]: {
            transform: 'rotate(180deg)',
            writingMode: 'vertical-rl',
            textAlign: 'end',
            width: 'auto',
            paddingLeft: 16,
            paddingBottom: 0
        },
    },
    card: {
        flex: 1,
        '&:nth-child(2)': {
            paddingBottom: 16,
            [theme.breakpoints.up('sm')]: {
                paddingRight: theme.spacing(4),
                paddingBottom: 0
            }
        }
    }
}))

const Education = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} className={classes.root}>
            <Grid className={classes.name}>
                EDUCATION
            </Grid>
            <Grid item xs={12} md={7} className={classes.card}>
                <EducationCard school='Portland State University' years='2015-2020' diploma='Bachelor of Computer Science' /> 
            </Grid>
            <Grid item xs={12} md={5} className={classes.card}>
                <EducationCard school='David Douglas High School' years='2011-2014' diploma='High School Diploma' />
            </Grid>
        </Grid>
    )
};

export default Education;