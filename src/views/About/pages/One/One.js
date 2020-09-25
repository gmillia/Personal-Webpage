import React from 'react';
import Grid from '@material-ui/core/Grid';

//Local components
import { Skills } from '../../components'
//Global components
import { Page, PersonalCard } from '../../../../components'

//Background image
import Background from '../../../../assets/cosmos.jpeg';

/**
 * Page one of the about page
 */
const One = () => {
    return (
        <Page background={Background}  >
            <Grid container spacing={0}>
                <Grid item xs={12} md={5} >
                    <PersonalCard />
                </Grid>

            </Grid>
        </Page>
    )
};

export default One;