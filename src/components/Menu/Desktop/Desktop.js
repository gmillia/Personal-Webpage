import React from 'react';

//Components
import { Navbar } from '../../Navbar';
import { NavbarButton } from '../../Buttons';

const Desktop = ({ options=[] }) => {
    return (
        <Navbar>
        {
            options.map((option, index) => {
                return <NavbarButton key={index} linkTo={option.path} name={option.name} />
            })
        }
        </Navbar>
    )
};

export default Desktop;