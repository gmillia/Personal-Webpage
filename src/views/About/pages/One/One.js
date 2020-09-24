import React from 'react';
import Grid from '@material-ui/core/Grid';

//Local components
import { Skills } from '../../components'
//Global components
import { Page, PersonalCard } from '../../../../components'

/**
 * Page one of the about page
 */
const One = () => {
    return (
        <Page>
            <Grid container spacing={0}>
                <Grid item xs={12} md={5} >
                    <PersonalCard />
                </Grid>
                <Grid item xs={12} md={7} >
                    <Skills />
                </Grid>
            </Grid>
        </Page>
    )
};

export default One;