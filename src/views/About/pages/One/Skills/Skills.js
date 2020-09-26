import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '100%',
        height: "100%",
        color: 'white',
        padding: 25
    },
    skillLevel: {
        
    },
    header: {
        fontSize: 20,
        paddingBottom: 10,
        paddingLeft: 105
    },
    skills: {
        fontSize: 15,
        display: 'flex',
        flexFlow: 'row wrap'
    }
}));

const Skills = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.root} >
            <div className={classes.header}>Skills</div>
            <Grid item xs={12} sm={4} className={classes.skillLevel}>

            </Grid>
            <Grid item xs={12} sm={4} className={classes.skillLevel}>

            </Grid>
            <Grid item xs={12} sm={4} className={classes.skillLevel}>

            </Grid>
        </Grid>
    )
};  

export default Skills;