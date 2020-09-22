import React from 'react';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        background: 'rgba(255,255,255,0.05)',
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        maxWidth: '100%',
        minHeight: 35,
        //border: '1px solid black',
        //borderColor: '#a9def9',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        cursor: 'pointer',
        transition: '0.3s, 0.3s',
        '&:hover': {
            //border: '1px dashed',
            //borderColor: '#a9def9',
            paddingLeft: 15,
            paddingRight: 15,
            background: 'rgba(255,255,255,0.2)',
        }
    },
    skillName: {
        paddingLeft: 15,
        paddingRight: 15,
        fontFamily: 'Cinzel, serif',
    }
}))

/**
 * Component that creates individual skill
 * @param {String} name name of the skill (e.g.: Javascript) 
 * @param {Node}   icon svg icon for the skill
 */
const Skill = ({ name, icon }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.iconWrapper}>
            { <img src={icon} alt=' ' width='30' height='30' /> }
            </div>
            <div className={classes.skillName}>
            {name}
            </div>
        </div>
    )
};

export default Skill;