import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/styles";

//Components
import { NavbarButton } from '../Buttons';

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

const Navbar = () => {
    const [selected, setSelected] = useState();
    const classes = useStyles();

    //Need to setup initial by looking at the url
    useEffect(() => {
        let url = window.location.pathname;
        let view = url.split('/')[1];
        setSelected(view)
    })

    return (
        <div className={classes.root}>
            <NavbarButton linkTo='/' name='HOME' isSelected={selected === ''} />
            <NavbarButton linkTo='/about' name='ABOUT' isSelected={selected === 'about'} />
            <NavbarButton linkTo='/portfolio' name='PORTFOLIO' isSelected={selected === 'portfolio'} />
            <NavbarButton linkTo='/resume' name='RESUME' isSelected={selected === 'portfolio'} />
        </div>
    )
};

export default Navbar;