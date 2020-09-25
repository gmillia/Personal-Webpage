import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//Images
import Analytics from '../../../../assets/skills/analytics.jpeg'
import Leadership from '../../../../assets/skills/leadership.jpeg'
import Organization from '../../../../assets/skills/organization.jpeg'
import Communication from '../../../../assets/skills/communication.jpeg'

import { BackgroundImage, Foreground } from '../../../../components';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        display: 'flex',
        flexFlow: 'row wrap',
    },
    wrapper: {
        background: 'rgba(130,106,237, 0.3)',
        flex: 1,
        padding: 8
    },
    name: {
        width: '100%',
        fontSize: 40,
        fontWeight: 100,
        fontFamily: 'Francois One, sans-serif',
        color: "white",
        textAlign: 'center',
        textDecoration: 'underline',
        paddingBottom: 16,
        [theme.breakpoints.up('sm')]: {
            transform: 'rotate(360deg)',
            writingMode: 'vertical-rl',
            textAlign: 'start',
            paddingBottom: 0,
            paddingLeft: 16,
            width: 'auto'
        },
    },
    personal: {
        padding: 4
    },
}))

const Individual = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Grid container spacing={0} className={classes.root}>
            {
                matches ? null : <Grid className={classes.name}>PERSONALITY</Grid>
            }
            <Grid container spacing={0} className={classes.wrapper}>
                <Grid item xs={12} md={6} className={classes.personal} >
                    <BackgroundImage background={Analytics} minHeight='200px'>
                        <Foreground>Analytics</Foreground>
                    </BackgroundImage>
                </Grid>
                <Grid item xs={12} md={6} className={classes.personal} >
                    <BackgroundImage background={Leadership} minHeight='200px'>
                        <Foreground>Leadership</Foreground>
                    </BackgroundImage>
                </Grid>
                <Grid item xs={12} md={6} className={classes.personal} >
                    <BackgroundImage background={Organization} minHeight='200px'>
                        <Foreground>Organization</Foreground>
                    </BackgroundImage>
                </Grid>
                <Grid item xs={12} md={6} className={classes.personal} >
                    <BackgroundImage background={Communication} minHeight='200px' >
                        <Foreground>Communication</Foreground>
                    </BackgroundImage>
                </Grid>
            </Grid>
            {
                matches ? <Grid className={classes.name}>PERSONALITY</Grid> : null
            }
        </Grid>
    )
};

export default Individual;