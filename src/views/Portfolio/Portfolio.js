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
    }
}))

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={0} item xs={12} alignContent='center' justify="center" className={classes.root}>
            <Grid item xs={10} md={4} className={classes.card}>
                <PortfolioCard name="OHSRank" link='https://ohsrank.web.app/' />
            </Grid>
            <Grid item xs={10} md={4} className={classes.card}>
                <PortfolioCard />
            </Grid>
            <Grid item xs={10} md={4} className={classes.card}>
                <PortfolioCard />
            </Grid>
        </Grid>
    )
};

export default Portfolio;