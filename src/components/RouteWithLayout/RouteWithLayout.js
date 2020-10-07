import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithLayout = ({ layout: Layout, view: View }) => {
    return (
        <Route
            render={({match}) =>
                <Layout match={match}>
                    <View />
                </Layout>
            }
        />
    );
};

export default RouteWithLayout;