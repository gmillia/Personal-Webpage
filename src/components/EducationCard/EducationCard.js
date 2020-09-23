import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'rgba(96, 48, 140, 0.3)',
        minHeight: 200,
        width: '100%',
        padding: 25,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    school: {
        marginBottom: 25,
        fontSize: 30,
        fontWeight: 700
    },
    years: {
        paddingBottom: 10,
        fontSize: 20
    },
    diploma: {
        paddingTop: 5,
        paddingBottom: 5,
        borderTop: '1px solid rgba(255,255,255,0.5)',
        borderBottom: '1px solid rgba(255,255,255,0.5)',
    }   
}))

const EducationCard = ({ school='School Name', years='0000-9999', diploma='Diploma of Moon' }) => {
    const classes = useStyles({});

    return (
        <Grid container item spacing={0} xs={12} className={classes.root} >
            <Grid item xs={12} className={classes.school} >{school}</Grid>
            <Grid item xs={12} className={classes.years} >{years}</Grid>
            <Grid item xs={12} className={classes.diploma} >{diploma}</Grid>
        </Grid>
    )
};

export default EducationCard;