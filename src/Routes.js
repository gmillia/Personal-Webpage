import React from 'react';
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from './components';

//Layouts
import Desktop from './layout/Desktop';

//VIEWS
import {
    Home
}
from './views'

const Routes = () => {
    return (
        <Switch>
            <RouteWithLayout 
                layout={Desktop}
                view={Home}
                path='/'
                exact
            />
        </Switch>
    )
};

export default Routes;