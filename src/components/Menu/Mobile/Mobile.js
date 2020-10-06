import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

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
        color: 'white'
    },
    options: {
        width: 250,
        height: '100%',
        background: 'black',
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        color: 'white',
        fontSize: 16,
        textDecoration: 'none',
        '&:nth-child(1)': {
            paddingTop: 30
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
    }
}))

const Desktop = ({ options=[] }) => {
    const classes = useStyles();
    const [opened, setOpened] = useState(false);

    const toggleDrawer = (setTo) => {
        setOpened(!opened)
    }

    const button = (index, path, name) => {
        let icon = MenuIcon;
        if(name.toUpperCase() === 'HOME') icon = HomeIcon;
        if(name.toUpperCase() === 'ABOUT') icon = AboutIcon;
        if(name.toUpperCase() === 'PORTFOLIO') icon = PortfolioIcon;
        if(name.toUpperCase() === 'CONTACT') icon = ContactIcon;

        return (
            <Link key={index} to={path} className={classes.button} >
                <div className={classes.buttonIconWrapper}>
                    <img src={icon} alt=' ' width='20' height='20' />
                </div>
                <div className={classes.buttonTextWrapper}>{name}</div>
            </Link>
        )
    }

    return (
        <Navbar isDesktop={false} >
            <div className={classes.logo}>IS</div>
            <img src={MenuIcon} alt=' ' width='25' height='25' onClick={() => { toggleDrawer() }} />
            <Drawer
                anchor={'right'}
                open={opened}
                onClose={() => { toggleDrawer() }}
            >
                <div className={classes.options} onClick={() => { toggleDrawer() }} >
                {
                    options.map((option, index) => {
                        return button(index, option.path, option.name)
                    })
                }
                <Divider classes={{root: classes.dividerRoot}} />
                </div>
            </Drawer>
        </Navbar>
    )
};

export default Desktop;