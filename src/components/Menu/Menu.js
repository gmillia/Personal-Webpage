import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//components
import Desktop from './Desktop';
import Mobile from './Mobile';

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
        path: '/contact',
        name: 'CONTACT'
    },
]

const Menu = () => {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        desktop ? <Desktop options={options} /> : <Mobile options={options} />
    )
};

export default Menu;