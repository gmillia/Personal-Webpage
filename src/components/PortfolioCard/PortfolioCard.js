import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

//IMAGES
import OHSRank from '../../assets/ohsrank.jpg';
import StopSpot from '../../assets/stopspot.jpg';
import Relay from '../../assets/relay.jpg';
import Betting from '../../assets/betting.jpg';
import EPL from '../../assets/ml.jpg';
import Car from '../../assets/car.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        background: '#383F51',
        color: 'white',
        textAlign: 'center',
        minHeight: 315
    },
    media: {
        height: 150 
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    }
}))

const getImage = (name) => {
    switch(name.toUpperCase()) {
        case 'OHSRANK': return OHSRank;
        case 'STOP SPOT': return StopSpot;
        case 'IRC': return Relay;
        case 'BETTING': return Betting;
        case 'EPL': return EPL;
        case 'CAR CLASSIFIER': return Car;
        default: return OHSRank;
    }
};

const getText = (name) => {
    switch(name.toUpperCase()) {
        case 'OHSRANK': return (
            'Website provides predictions and statistics for Oregon High School sport teams.'
        )
        case 'STOP SPOT': return (
            'Analytical pipeline for local bus company.'
        )
        case 'IRC': return (
            'Simple Internet Relay chat (socket programming in Python).'
        )
        case 'BETTING': return (
            'Porgram that scrapes soccer lines and makes simple game predictions using Poisson Process.'
        )
        case 'EPL': return (
            'Pogram which makes score predictions from English Premiere League using Machine Learning.'
        )
        case 'CAR CLASSIFIER': return (
            'Machine Learning program that classifies car based on its picture.'
        )
        default: return (
            'Project Description'
        )
    }
}

const getCollapse = (name) => {
    switch(name.toUpperCase()) {
        default: return (
            'More information about the project'
        )
    }
}

const PortfolioCard = ({ name='', link='' }) => {
    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    image={getImage(name)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{name.length > 0 ? name : 'Project Name'}</Typography>
                    <Typography variant="body2" color="inherit" component="p">
                    {getText(name)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
                <Button variant="outlined" color='secondary' href={link} rel="noopener noreferrer" target="_blank">VISIT</Button>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                {getCollapse(name)}
            </Collapse>
        </Card>
    )
};

export default PortfolioCard;