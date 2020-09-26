import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

//Local components
import { Languages } from './Languages';
import { Personal } from './Personal';
import { Skills } from './Skills';

//Global components
import { Page } from '../../../../components'

//Background image
import AboutOne from '../../../../assets/aboutOne.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    topWrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        height: 'auto',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            minHeight: '75%'
        }
    },
    bottomWrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        height: 'auto',
        width: '100%',
        background: 'rgba(0,0,0,0.5)',
        [theme.breakpoints.up('sm')]: {
            minHeight: '25%'
        }
    },
    contentWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    }
}))

/**
 * Page one of the about page
 */
const One = () => {
    const classes = useStyles();

    const topContent = () => {
        return (
            <Grid item xs={12} className={classes.topWrapper}>
                <Grid item xs={12} sm={6} className={classes.contentWrapper}>
                    <Languages />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.contentWrapper}>
                    <Personal />
                </Grid>
            </Grid>
        )
    }

    const bottomContent = () => {
        return (
            <Grid item xs={12} className={classes.bottomWrapper} >
                <Grid item xs={12} sm={6} className={classes.skillsWrapper}>
                    <Skills />
                </Grid>
                <Grid item xs={12} sm={2} className={classes.imageWrapper}></Grid>
                <Grid item xs={12} sm={4} className={classes.projectsWrapper}></Grid>
            </Grid>
        )
    }

    return (
        <Page full={true} background={AboutOne}>
            <Grid item xs={12} className={classes.root}>
            {topContent()}
            {bottomContent()}
            </Grid>
        </Page>
    )
};

export default One;