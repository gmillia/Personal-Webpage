import React from 'react';

//Components
import { Navbar } from '../../Navbar';
import { NavbarButton } from '../../Buttons';

const Desktop = ({ options=[], selected='' }) => {
    return (
        <Navbar>
        {
            options.map((option, index) => {
                return <NavbarButton key={index} linkTo={option.path} name={option.name} isSelected={selected === option.path} />
            })
        }
        </Navbar>
    )
};

export default Desktop;