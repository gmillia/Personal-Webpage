import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from "@material-ui/styles";

//Components
import { Navbar } from 'components';
import { NavbarButton } from 'components';

//Icon
import MenuIcon from 'assets/menu.svg';

const useStyles = makeStyles(theme => ({
    options: {
        width: 250
    }
}))

const Desktop = ({ options=[] }) => {
    const classes = useStyles();
    const [opened, setOpened] = useState(false);

    const toggleDrawer = (setTo) => {
        setOpened(setTo)
    }

    return (
        <Navbar isDesktop={false} >
            Fake
            <img src={MenuIcon} alt=' ' width='35' height='35' onClick={() => { toggleDrawer(true) }} />
            <Drawer
                anchor={'right'}
                open={opened}
                onClose={() => { toggleDrawer(false) }}
            >
                <div className={classes.options}>

                </div>
            </Drawer>
        </Navbar>
    )
};

export default Desktop;