import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

//Icon
import RightArrow from '../../../../../assets/rightArrow.svg'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        height: '100%',
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 15,
            paddingRight: 15,
        }
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        background: "rgba(0,0,0,0.1)",
        color: 'white',
    },
    header: {
        display: 'block',
        fontSize: 24,
        paddingBottom: 25,
        paddingTop: 25,
        [theme.breakpoints.up('sm')]: {
            paddingTop: 0,
        }
    },
    text: {
        flex: 1,
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row wrap',
        paddingBottom: 1,
        paddingTop: 15,
        [theme.breakpoints.up('sm')]: {
            paddingTop: 'auto'
        }
    },
    button: {
        color: "white",
        background: 'transparent',
        width: 'auto',
        border: 'none',
        outline: 'none',
        fontSize: 16,
        cursor: 'pointer',
        paddingBottom: 2,
        borderBottom: '1px solid white',
        display: 'flex',
        flexDirection: 'row wrap'
    },
    arrowWrapper: {
        paddingLeft: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    link: {
        textDecoration: 'none',
    },
    wrapper: {
        display: 'flex',
        alignItems: 'flex-end'
    }
}));

const Projects = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.root} >
            <Grid item xs={12} className={classes.header}>Projects</Grid>
            <Grid item xs={12} className={classes.text}>
                Using those skills, I have written various projects throughout the years. 
            </Grid>
            <Grid item xs={12} className={classes.wrapper}>
                <Link to='/portfolio' className={classes.link}>
                    <div className={classes.buttonWrapper}>
                        <span className={classes.button}>
                            View
                            <div className={classes.arrowWrapper}>
                                <img src={RightArrow} alt=' ' width='15' height='15' />
                            </div>
                        </span>
                    </div>
                </Link>
            </Grid>
        </Grid>
    )
};  

export default Projects;