import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//IMAGES
import HS from '../../../../assets/ddhs.png';
import PSU from '../../../../assets/psu.png'

//Components
import { EducationCard } from '../../../../components';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    }
}))

const Education = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <EducationCard icon={HS} header='David Douglas High School' text='2011-2014' />
            <EducationCard icon={PSU} header='Portland State University' text='2015-2020' />
        </div>
    )
};

export default Education;