import React, { useEffect, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Resume from 'assets/resume/Resume.pdf'

//components
import Desktop from './Desktop';
import Mobile from './Mobile';
import { NavbarButton } from 'components';

import { useLocation } from 'hooks';

const options = [
    {
        path: '/',
        name: 'HOME'
    },
    {
        path: '/about',
        name: 'ABOUT'
    },
    {
        path: '/portfolio',
        name: 'PORTFOLIO'
    },
    {
        path: Resume,
        name: 'RESUME'
    },
    {
        path: '/contact',
        name: 'CONTACT'
    },
]

const Menu = () => {
    const location = useLocation();
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));
    const [selected, setSelected] = useState();

    useEffect(() => {
        setSelected(location.split('#')[1])
    }, [location])

    return (
        desktop 
        ? <Desktop options={options} selected={selected} /> 
        : <Mobile options={options} selected={selected} />
    )
};

export default Menu;