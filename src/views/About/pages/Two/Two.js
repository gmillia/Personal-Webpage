import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//Local components
import { Education, Individual, Languages } from '../../components'
//Global components
import { Page } from '../../../../components'

//Background image
import EducationBackground from '../../../../assets/education/education.jpg';

const useStyles = makeStyles(theme => ({
    wrapper: {

        height: '100%'
    },
    individualWrapper: {
        [theme.breakpoints.up('sm')]: {
            minHeight: '70%',
        }
    }
}))

/**
 * Page two of the about page
 */
const Two = () => {
    const classes = useStyles()

    return (
        <Page background={EducationBackground} changeHeight={' + 30px'}>
            <Grid container spacing={4} className={classes.wrapper} >
                <Grid item xs={12}>
                    <Education />
                </Grid>
                <Grid item xs={12} className={classes.individualWrapper}>
                    <Individual />
                </Grid>

            </Grid>
        </Page>
    )
};

export default Two;