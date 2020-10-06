import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        paddingLeft: 15,
        paddingRight: 15,
        height: 50,
        minHeight: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: props => props.desktop ? 'space-evenly' : 'space-between',
        background: 'black',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        borderBottom: '1px solid rgba(255,255,255,0.05)'
    },
}))

const Navbar = ({children, isDesktop=true }) => {
    const classes = useStyles({desktop: isDesktop});

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
};

export default Navbar;