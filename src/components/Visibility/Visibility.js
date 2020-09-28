import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VisibilitySensor from 'react-visibility-sensor';

const useStyles = makeStyles(theme => ({
    hidden: {
        display: 'flex',
        width: '100%',
        height: '100%',
        visibility: 'hidden'
    }
}))
/**
 * Hides children component(s) while keeping the space in the page. In Mobile views, elements that are fading in, seem to be appearing out of nowhere, thus
 * taking space and shifting elements. If we wrap element in FakeEmpty, we keep its dimensions on the page, thus it just fades in.
 */
const Visibility = ({ children, active=true }) => {
    const classes = useStyles();

    

    return (
        <VisibilitySensor partialVisibility={true} active={active} >  
        {
            ({isVisible}) => 
                isVisible ? 
                    children 
                    : 
                    <div className={classes.hidden}>{children}</div>
        }
        </VisibilitySensor>
    )
}

export default Visibility;