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
const Visibility = ({ children, active=true, minTopValue=0, partialVisibility=true, offset={}, onChange }) => {
    const classes = useStyles();

    /**
     * Helpe function which returns value of visibility to the callback.
     * @param {Boolean} newVisibility 
     */
    const handleChange = (newVisibility) => {
        if(onChange) onChange(newVisibility)
    }

    return (
        <VisibilitySensor partialVisibility={partialVisibility} active={active} minTopValue={minTopValue} offset={offset} onChange={(changed) => handleChange(changed)} >  
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