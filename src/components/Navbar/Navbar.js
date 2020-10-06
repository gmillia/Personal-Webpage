import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: 50,
        minHeight: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        background: 'black',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        borderBottom: '1px solid rgba(255,255,255,0.05)'
    },
}))

const Navbar = ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};

export default Navbar;