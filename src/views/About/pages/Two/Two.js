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
        flex: '1 1 auto'

    }
}))

/**
 * Page two of the about page
 */
const Two = () => {
    const classes = useStyles()

    return (
        <Page background={EducationBackground} changeHeight={' + 30px'}>
            <Education />
            <Grid container spacing={0} className={classes.wrapper} >
                <Grid item xs={12} md={8}>
                    <Individual />
                </Grid>
                <Grid item xs={12} md={4} >
                    <Languages />
                </Grid>
            </Grid>
        </Page>
    )
};

export default Two;