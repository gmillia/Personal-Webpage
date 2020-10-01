import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

//COMPONENTS
import { Page, Card } from 'components';

//Images/Background
import Background from 'assets/portfolio/b4.webp';
import OHSRankBackground from 'assets/portfolio/ohsrank.webp';
import StopSpotBackground from 'assets/portfolio/stopspot.webp';
import IRCBackground from 'assets/portfolio/irc.webp';
import BettingBackground from 'assets/portfolio/betting.webp';

//Stack icons
import ReactIcon from 'assets/portfolio/react.png';
import NodeIcon from 'assets/portfolio/node.png';
import CSSIcon from 'assets/portfolio/css.png';
import MongoIcon from 'assets/portfolio/mongodb.png';
import ReduxIcon from 'assets/portfolio/redux.svg';
import PythonIcon from 'assets/portfolio/python.svg';
import DockerIcon from 'assets/portfolio/docker.png';
import SQLIcon from 'assets/portfolio/sql.svg';
import MLIcon from 'assets/portfolio/ml.svg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        //background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.5))'
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
    },
    back: {
        zIndex: 1,
        position: 'absolute',
        top: 50,
        left: 0,
        flex: 1,
        minHeight: theme.page.height,
        width: '100%'
    },
    front: {
        zIndex: 2,
        position: 'absolute',
        top: 50,
        left: 0,
    },
    withBorder: {
        border: '1 px solid rgba(255,255,255,0.1)'
    }
}))

const Portfolio = () => {
    const classes = useStyles();

    return (
        <Page background={Background} useBackground={true} darken={true} useGradient={true} >
            <Grid container spacing={0} item xs={12} alignContent='flex-start' justify="center" className={classes.root}>
                <Grid container spacing={0} item xs={11} md={8} alignContent='flex-start' justify="center">
                    <Grid item xs={12} sm={6} className={classes.card}>
                        <Card 
                            name='OHSRank' 
                            description='Website provides predictions and statistics for Oregon High School sport teams.' 
                            image={OHSRankBackground} 
                            stack={[ReactIcon, NodeIcon, CSSIcon, MongoIcon, ReduxIcon]}
                            linkTo='https://ohsrank.web.app/'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.card}>
                        <Card 
                            name='Stop Spot' 
                            description='Analytical pipeline for local bus company.' 
                            image={StopSpotBackground} 
                            stack={[PythonIcon, DockerIcon, SQLIcon]}
                            linkTo='https://github.com/gmillia/StopSpotDataPipeline'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.card}>
                        <Card 
                            name='IRC' 
                            description='Internet relay chat supporting multiple clients.' 
                            image={IRCBackground} 
                            stack={[PythonIcon]}
                            linkTo='https://github.com/gmillia/IRC'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.card}>
                        <Card 
                            name='Betting' 
                            description='Program scrapes game lines and makes game predictions using Poisson Process.' 
                            image={BettingBackground} 
                            stack={[NodeIcon]}
                            linkTo='https://github.com/gmillia/Betting'
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Page>
        /*
        <Grid container spacing={0} item xs={12} alignContent='flex-start' justify="center" className={classes.root}>
            <Grid container spacing={0} item xs={11} md={8} alignContent='flex-start' justify="center">
                <Grid item xs={12} className={classes.name}>My Projects</Grid>
                <Grid item xs={10} md={6} className={classes.card}>
                    <PortfolioCard name="OHSRank" link='https://ohsrank.web.app/' />
                </Grid>
                <Grid item xs={10} md={6} className={classes.card}>
                    <PortfolioCard name="Stop Spot" link='https://github.com/gmillia/StopSpotDataPipeline' />
                </Grid>
                <Grid item xs={10} md={8} className={classes.card}>
                    <PortfolioCard name='IRC' link='https://github.com/gmillia/IRC' />
                </Grid>
                <Grid item xs={10} md={4} className={classes.card}>
                    <PortfolioCard name='Betting' link='https://github.com/gmillia/Betting' />
                </Grid>
                <Grid item xs={10} md={5} className={classes.card}>
                    <PortfolioCard name='EPL' link='https://github.com/gmillia/FIFA-Rate-Prediction' />
                </Grid>
                <Grid item xs={10} md={7} className={classes.card}>
                    <PortfolioCard name='Car Classifier' link='https://github.com/gmillia/Car-Classifier' />
                </Grid>
            </Grid>
        </Grid>
        */
    )
};

export default Portfolio;