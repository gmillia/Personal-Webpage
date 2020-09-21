import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

//COMPONENTS
import { PortfolioCard } from '../../components';

const useStyles = makeStyles(theme => ({
    root: {
        background: '#ECEBF3'
    },
    card: {
        padding: 10
    },
    name: {
        paddingTop: 25,
        paddingBottom: 25,
        fontSize: 35,
        fontFamily: 'Francois One, sans-serif',
        textAlign: 'center'
    }
}))

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={0} item xs={12} alignContent='flex-start' justify="center" className={classes.root}>
            <Grid item xs={12} className={classes.name}>My Projects</Grid>
            <Grid item xs={10} md={4} className={classes.card}>
                <PortfolioCard name="OHSRank" link='https://ohsrank.web.app/' />
            </Grid>
            <Grid item xs={10} md={4} className={classes.card}>
                <PortfolioCard name="Stop Spot" link='https://github.com/gmillia/StopSpotDataPipeline' />
            </Grid>
            <Grid item xs={10} md={4} className={classes.card}>
                <PortfolioCard name='IRC' link='https://github.com/gmillia/IRC' />
            </Grid>
            <Grid item xs={10} md={4} className={classes.card}>
                <PortfolioCard name='Betting' link='https://github.com/gmillia/Betting' />
            </Grid>
            <Grid item xs={10} md={4} className={classes.card}>
                <PortfolioCard name='EPL' link='https://github.com/gmillia/FIFA-Rate-Prediction' />
            </Grid>
            <Grid item xs={10} md={4} className={classes.card}>
                <PortfolioCard name='Car Classifier' link='https://github.com/gmillia/Car-Classifier' />
            </Grid>
        </Grid>
    )
};

export default Portfolio;