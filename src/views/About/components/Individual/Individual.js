import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

//Images
import Analytics from '../../../../assets/skills/analytics.jpeg'
import Leadership from '../../../../assets/skills/leadership.jpeg'
import Organization from '../../../../assets/skills/organization.jpeg'
import Communication from '../../../../assets/skills/communication.jpeg'

import { Skill } from '../../../../components';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 15,
        height: '100%',
        flex: 1
    },
    wrapper: {
        display: 'flex',
        alignItems: 'flex-start',
        background: 'rgba(130,106,237, 0.3)',
        padding: 15
    },
    name: {
        fontSize: 37,
        fontWeight: 100,
        fontFamily: 'Francois One, sans-serif',
        textAlign: 'end',
        textDecoration: 'overline'
    },
    personal: {
        padding: 15
    }
}))

const Individual = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} className={classes.root}>
            <Grid container spacing={0} className={classes.wrapper}>
                <Grid item xs={12} className={classes.name}>PERSONALITY</Grid>
                <Grid item xs={12} md={6} className={classes.personal} >
                    <Skill icon={Analytics} name="Analytics" />
                </Grid>
                <Grid item xs={12} md={6} className={classes.personal} >
                    <Skill icon={Leadership} name='Leadership' />
                </Grid>
                <Grid item xs={12} md={6} className={classes.personal} >
                    <Skill icon={Organization} name='Organization' />
                </Grid>
                <Grid item xs={12} md={6} className={classes.personal} >
                    <Skill icon={Communication} name='Communication' />
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Individual;