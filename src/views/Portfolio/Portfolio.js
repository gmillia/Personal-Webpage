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
import MLBackground from 'assets/portfolio/ml.webp';
import CarBackground from 'assets/portfolio/car.webp';

//Stack icons
import ReactIcon from 'assets/skills/react.png';
import NodeIcon from 'assets/skills/node.png';
import CSSIcon from 'assets/skills/css.png';
import MongoIcon from 'assets/skills/mongodb.png';
import ReduxIcon from 'assets/skills/redux.svg';
import PythonIcon from 'assets/skills/python.svg';
import DockerIcon from 'assets/skills/docker.png';
import SQLIcon from 'assets/skills/sql.svg';
import MLIcon from 'assets/skills/ml.svg';

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
                <Grid container spacing={0} item xs={12} md={8} alignContent='flex-start' justify="center">
                    <Grid item xs={12} sm={6} xl={4} className={classes.card}>
                        <Card 
                            name='OHSRank' 
                            description='Website provides predictions and statistics for Oregon High School sport teams.' 
                            image={OHSRankBackground} 
                            stack={[ReactIcon, NodeIcon, CSSIcon, MongoIcon, ReduxIcon]}
                            linkTo='https://ohsrank.web.app/'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={4} className={classes.card}>
                        <Card 
                            name='Stop Spot' 
                            description='Analytical pipeline for local bus company.' 
                            image={StopSpotBackground} 
                            stack={[PythonIcon, DockerIcon, SQLIcon]}
                            linkTo='https://github.com/gmillia/StopSpotDataPipeline'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={4} className={classes.card}>
                        <Card 
                            name='IRC' 
                            description='Internet relay chat supporting multiple clients.' 
                            image={IRCBackground} 
                            stack={[PythonIcon]}
                            linkTo='https://github.com/gmillia/IRC'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={4} className={classes.card}>
                        <Card 
                            name='Betting' 
                            description='Program scrapes game lines and makes game predictions using Poisson Process.' 
                            image={BettingBackground} 
                            stack={[NodeIcon]}
                            linkTo='https://github.com/gmillia/FIFA-Rate-Prediction'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={4} className={classes.card}>
                        <Card 
                            name='EPL' 
                            description='Program makes game predictions for English Premiere League using Machine Learning algorithm.' 
                            image={MLBackground} 
                            stack={[PythonIcon, MLIcon]}
                            linkTo='https://github.com/gmillia/Betting'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={4} className={classes.card}>
                        <Card 
                            name='Car Classifier' 
                            description='Machine Learning program which classifies cars based on its pictures.' 
                            image={CarBackground} 
                            stack={[PythonIcon, MLIcon]}
                            linkTo='https://github.com/gmillia/Car-Classifier'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} xl={4} className={classes.card}>
                        <Card 
                            name='React Task App' 
                            description='Simple Task app that allows user to add/remove/modify tasks. ' 
                            image={CarBackground} 
                            stack={[ReactIcon, CSSIcon]}
                            linkTo='https://github.com/gmillia/Creative-Softwares'
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Page>
    )
};

export default Portfolio;