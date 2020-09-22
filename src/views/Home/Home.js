import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

//Images
import Background from '../../assets/background.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        fontFamily: 'Raleway, sans-serif',
        background: `url(` + Background + `) no-repeat center center fixed`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
        color: 'white'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15
    },
    intro: {
        fontSize: 15,
        fontWeight: 200,
        paddingBottom: 15
    },
    name: {
        fontSize: 35,
        fontWeight: 400,
        paddingBottom: 15
    },
    outro: {
        fontSize: 24,
        fontWeight: 300,
        paddingBottom: 20
    },
    link: {
        textDecoration: 'none'
    },
    button: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30,
        fontSize: 16,
        border: '1px solid black',
        borderColor: '#00e1b7',
        background: 'rgba(64, 145, 108, 0.1)',
        fontWeight: 100,
        cursor: 'pointer',
        color: 'white',
        '&:hover': {
            border: '1px dashed',
            borderColor: '#00e1b7',
            paddingLeft: 35,
            paddingRight: 35,
            transition: '0.3s'
        }
    }
}))

const Home = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} item xs={12} alignItems="center" justify="center" className={classes.root}>
            <Grid item xs={12} className={classes.wrapper}>
                <div className={classes.name}>ILLIA SHERSHUN</div>
                <div className={classes.outro}>Full-Stack Developer</div>
                <Link to='/about' className={classes.link}>
                    <button className={classes.button}>READ MORE</button>
                </Link>
            </Grid>
        </Grid>
    )
};

export default Home;