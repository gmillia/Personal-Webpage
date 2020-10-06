import React from 'react';
import { makeStyles } from "@material-ui/styles";

//COMPONENTS
import { Menu } from '../components';

//IMAGE

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(#000000, #242424)',
        minHeight: '100vh',
        height: 'auto'
    }
}))

const Desktop = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Menu />
            {children}
        </div>
    )
};

export default Desktop;