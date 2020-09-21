import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithLayout = ({ layout: Layout, view: View }) => {
    return (
        <Route
            render={() =>
                <Layout>
                    <View />
                </Layout>
            }
        />
    );
};

export default RouteWithLayout;