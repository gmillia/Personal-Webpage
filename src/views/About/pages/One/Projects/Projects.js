import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

//Button
import { Underline as Button } from 'components';

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
            <Grid item xs={12} className={classes.buttonWrapper}>
                <Button linkTo='/portfolio' name='View' />
            </Grid>
        </Grid>
    )
};  

export default Projects;