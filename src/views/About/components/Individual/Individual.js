import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

//Images
import Analytics from '../../../../assets/skills/analytics.jpeg'
import Leadership from '../../../../assets/skills/leadership.jpeg'
import Organization from '../../../../assets/skills/organization.jpeg'
import Communication from '../../../../assets/skills/communication.jpeg'

import { BackgroundImage, Foreground } from '../../../../components';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0px 15px 0px 0px',
        height: '100%',

    },
    wrapper: {
        background: 'rgba(130,106,237, 0.3)',
        padding: 15,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    name: {
        paddingBottom: 15,
        fontSize: 37,
        fontWeight: 100,
        fontFamily: 'Francois One, sans-serif',
        textAlign: 'end',
        textDecoration: 'underline',
        textUnderlineOffset: 0,
        color: 'white',
        flex: 0
    },
    personal: {
        '&:nth-child(1)': {
            paddingRight: 7.5,
            paddingBottom: 7.5
        },
        '&:nth-child(2)': {
            paddingLeft: 7.5,
            paddingBottom: 7.5
        },
        '&:nth-child(3)': {
            paddingTop: 7.5,
            paddingRight: 7.5
        },
        '&:nth-child(4)': {
            paddingTop: 7.5,
            paddingLeft: 7.5
        },
    },
    content: {
        flex: 1
    },
}))

const Individual = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.root}>
            <Grid item xs={12} className={classes.wrapper}>
                <Grid item xs={12} className={classes.name}>PERSONALITY</Grid>
                <Grid container spacing={0} className={classes.content}>
                    <Grid item xs={12} md={6} className={classes.personal} >
                        <BackgroundImage background={Analytics}>
                            <Foreground>Analytics</Foreground>
                        </BackgroundImage>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.personal} >
                        <BackgroundImage background={Leadership}>
                            <Foreground>Leadership</Foreground>
                        </BackgroundImage>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.personal} >
                        <BackgroundImage background={Organization}>
                            <Foreground>Organization</Foreground>
                        </BackgroundImage>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.personal} >
                        <BackgroundImage background={Communication}>
                            <Foreground>Communication</Foreground>
                        </BackgroundImage>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Individual;