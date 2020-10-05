import React from 'react';
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from './components';

//Layouts
import Desktop from './layout/Desktop';

//VIEWS
import {
    About,
    Contact,
    Home,
    Portfolio,
    Resume
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
            <RouteWithLayout 
                layout={Desktop}
                view={About}
                path='/about'
                exact
            />
            <RouteWithLayout 
                layout={Desktop}
                view={Contact}
                path='/contact'
                exact
            />
            <RouteWithLayout 
                layout={Desktop}
                view={Portfolio}
                path='/portfolio'
                exact
            />
            <RouteWithLayout 
                layout={Desktop}
                view={Contact}
                path='/contact'
                exact
            />
            <Redirect to="/" />
        </Switch>
    )
};

export default Routes;