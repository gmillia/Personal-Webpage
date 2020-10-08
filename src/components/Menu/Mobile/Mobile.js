import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import clsx from 'clsx';

//Components
import { Navbar } from 'components';

//Icon
import MenuIcon from 'assets/menu.svg';
import HomeIcon from 'assets/home.svg';
import AboutIcon from 'assets/about.svg';
import PortfolioIcon from 'assets/portfolio.svg';
import ContactIcon from 'assets/email.svg';

const useStyles = makeStyles(theme => ({
    logo: {
        fontSize: 30,
        color: 'white',
        textDecoration: 'none',
        cursor: 'pointer'
    },
    options: {
        width: 250,
        height: '100%',
        background: 'rgba(0,0,0,0.8)',
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        color: 'white',
        fontSize: 14,
        textDecoration: 'none',
        '&:nth-child(1)': {
            marginTop: 30
        }
    },
    buttonIconWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    buttonTextWrapper: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 15
    },
    dividerRoot: {
        background: 'rgba(255,255,255,0.5)'
    },
    selected: {
        background: 'rgba(255,255,255,0.1)'
    }
}))

const Mobile = ({ options=[], selected='' }) => {
    const classes = useStyles();
    const [opened, setOpened] = useState(false);

    const toggleDrawer = (setTo) => {
        setOpened(!opened)
    }

    const button = (index, path, name, selected) => {
        let icon = MenuIcon;
        if(name.toUpperCase() === 'HOME') icon = HomeIcon;
        if(name.toUpperCase() === 'ABOUT') icon = AboutIcon;
        if(name.toUpperCase() === 'PORTFOLIO') icon = PortfolioIcon;
        if(name.toUpperCase() === 'CONTACT') icon = ContactIcon;

        return (
            <Link key={index} to={path} className={clsx(classes.button, selected === path ? classes.selected : '')} >
                <div className={classes.buttonIconWrapper}>
                    <img src={icon} alt=' ' width='15' height='15' />
                </div>
                <div className={classes.buttonTextWrapper}>{name}</div>
            </Link>
        )
    }

    return (
        <Navbar isDesktop={false} >
            <Link to='/' className={classes.logo}>
                IS
            </Link>
            <img src={MenuIcon} alt=' ' width='25' height='25' onClick={() => { toggleDrawer() }} />
            <Drawer
                anchor={'right'}
                open={opened}
                onClose={() => { toggleDrawer() }}
            >
                <div className={classes.options} onClick={() => { toggleDrawer() }} >
                {
                    options.map((option, index) => {
                        return button(index, option.path, option.name, selected)
                    })
                }
                <Divider classes={{root: classes.dividerRoot}} />
                </div>
            </Drawer>
        </Navbar>
    )
};

export default Mobile;