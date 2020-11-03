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
}));

const Work = ({ icon, workPlace='', workDetails='' }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} className={classes.root} >
            <Grid item xs={12} sm={6}>
                <WorkComponent icon={PSU} workPlace="Portland State University" workDetails='Soccer Coach' />
            </Grid>
            <Grid item xs={12} sm={6}>
                <WorkComponent icon={DDHS} workPlace="David Douglas High School" workDetails='Soccer Coach' />
            </Grid>
        </Grid>
    )
};  

export default Work;