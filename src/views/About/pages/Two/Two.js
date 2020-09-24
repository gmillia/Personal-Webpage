import React from 'react';
import Grid from '@material-ui/core/Grid';

//Local components
import { Education, Individual, Languages } from '../../components'
//Global components
import { Page } from '../../../../components'

//Background image
import EducationBackground from '../../../../assets/education/education.jpg';

/**
 * Page two of the about page
 */
const Two = () => {
    return (
        <Page background={EducationBackground}>
            <Education />
            <Grid container spacing={0} >
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