import React from 'react';

//Components
import { Navbar } from '../../Navbar';
import { NavbarButton } from '../../Buttons';

const Desktop = () => {
    return (
        <Navbar>
            <NavbarButton linkTo='/' name='HOME'  />
            <NavbarButton linkTo='/about' name='ABOUT'  />
            <NavbarButton linkTo='/portfolio' name='PORTFOLIO'  />
            <NavbarButton linkTo='/contact' name='CONTACT'  />
        </Navbar>
    )
};

export default Desktop;