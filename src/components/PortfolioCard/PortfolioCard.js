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
import OHSRank from '../../assets/ohsrank.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        background: '#383F51',
        color: 'white',
        textAlign: 'center',
    },
    media: {
        height: 150 
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const getImage = (name) => {
    switch(name.toUpperCase()) {
        case 'OHSRANK': return OHSRank;
        default: return OHSRank;
    }
};

const getText = (name) => {
    switch(name.toUpperCase()) {
        case 'OHSRANK': return (
            'Website provides predictions and statistics for Oregon High School sport teams.'
        )
        default: return (
            'Project Description'
        )
    }
}

const PortfolioCard = ({ name='', link='' }) => {
    const classes = useStyles();

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
                <Button variant='outlined' color="inherit">LEARN MORE</Button>
            </CardActions>
        </Card>
    )
};

export default PortfolioCard;