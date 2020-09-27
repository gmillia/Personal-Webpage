import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//Local components
import { Personality } from './Personality';
import { Soccer } from './Soccer';

//Global components
import { Page } from '../../../../components'

//Background image
import EducationBackground from '../../../../assets/aboutTwo.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 50%, rgba(255,255,255,0.5) 50%)'
    },
    wrapper:{
        display: 'flex',
        flexFlow: 'row wrap',
        padding: 30,
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 130
        }
    },
    left: {
        display: 'flex',
    }
}))

/**
 * Page two of the about page
 */
const Two = () => {
    const classes = useStyles()

    return (
        <Page background={EducationBackground} useBackground={true} wrapperDirection='to left' >
            <Grid item xs={12} className={classes.root}>
                <Grid item xs={12} className={classes.wrapper}>
                    <Grid item xs={12} sm={8} className={classes.left}>
                        <Personality />
                    </Grid>
                    <Grid item xs={12} sm={4} className={classes.right}>
                        <Soccer />
                    </Grid>
                </Grid>
            </Grid>
        </Page>
    )
};

export default Two;