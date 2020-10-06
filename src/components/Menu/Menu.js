import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//components
import Desktop from './Desktop';
import Mobile from './Mobile';

const Menu = () => {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        desktop ? <Desktop /> : <Mobile />
    )
};

export default Menu;