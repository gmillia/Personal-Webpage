import React from 'react';
import { makeStyles } from "@material-ui/styles";

//COMPONENTS
import { Navbar } from '../components';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
}))

const Desktop = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar />
            {children}
        </div>
    )
};

export default Desktop;