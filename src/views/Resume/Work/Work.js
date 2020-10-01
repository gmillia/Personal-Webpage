import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

//COMPONENT
import { Work as WorkComponent} from 'components';

//ICONS
import PSU from 'assets/resume/psu.png';
import DDHS from 'assets/resume/ddhs.png';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    name: {
        color: 'white',
        fontSize: 25
    },
    wrapper: {
        padding: 10
    }
}));

const Work = ({ icon, workPlace='', workDetails='' }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.root} >
            <Grid item xs={12} className={classes.name} > Work </Grid>
            <Grid item className={classes.wrapper} >
                <WorkComponent icon={PSU} workPlace="Portland State University" workDetails='Soccer Coach' />
            </Grid>
            <Grid item className={classes.wrapper} >
                <WorkComponent icon={DDHS} workPlace="David Douglas High School" workDetails='Soccer Coach' />
            </Grid>
        </Grid>
    )
};  

export default Work;