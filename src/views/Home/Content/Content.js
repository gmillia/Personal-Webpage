import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';

import Right from '../../../assets/right.svg'
import RightWhite from '../../../assets/rightWhite.svg'

const useStyles = makeStyles(theme => ({
    content: {
        color: "white",
        display: "flex",
        alignItems: 'center',
        flexFlow: 'row wrap',
    },
    contentLeft: {
        display: "flex",
        flexDirection: 'column',
        fontSize: 45,
        [theme.breakpoints.up('sm')]: {
            fontSize: 75
        }
    },
    contentRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    separatorContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    separator: {
        width: '100%',
    },
    separatorLeft: {
        width: '60%',
    },
    separatorContent: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(0.5),
    },
    info: {
        display: 'flex',
        alignSelf: 'flex-end'
    }
})) 

const Content = () => {
    const classes = useStyles();
    const [icon, setIcon] = useState(Right);
    const [borderColor, setBorderColor] = useState('1px solid rgba(255,255,255,0.5)');

    return (
        <Grid item xs={12} className={classes.content}>
            <Grid item className={classes.contentLeft}>
                <div>Illia</div>
                <Grid item xs={12} className={classes.separatorContainer}>
                    <div className={classes.separatorLeft} style={{borderBottom: borderColor}} />
                </Grid>
                <div>Shershun</div>
            </Grid>
            <Grid item className={classes.contentRight}>
                <div className={classes.separator} style={{borderBottom: borderColor}} />
                <div className={classes.separatorContent}>
                    <Link to='/about'>
                        <img 
                            src={icon} 
                            alt=' ' 
                            width="50" 
                            height="50" 
                            onMouseEnter={() => { setIcon(RightWhite); setBorderColor('1px solid rgba(255,255,255,1)') }} 
                            onMouseOut={() => { setIcon(Right); setBorderColor('1px solid rgba(255,255,255,0.5)') }}
                        />
                    </Link>
                </div>
                <div className={classes.separator} style={{borderBottom: borderColor}} />
            </Grid>
        </Grid>
    )
};

export default Content;