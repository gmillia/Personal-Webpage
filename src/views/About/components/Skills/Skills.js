import React from 'react';
import { makeStyles } from "@material-ui/styles";

//Skill component
import { Skill } from '../../../../components';

//ICONS
import One from '../../../../assets/skills/one.jpg';
import Two from '../../../../assets/skills/two.jpg';
import Three from '../../../../assets/skills/three.jpg';
import Four from '../../../../assets/skills/four.jpg';
import Five from '../../../../assets/skills/five.jpg';
import Six from '../../../../assets/skills/six.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    nameWrapper: {
        display: 'flex',
        selfAlign: 'stretch',
        fontSize: 40,
        fontWeight: 100,
        fontFamily: 'Francois One, sans-serif',
        margin: 15,
        letterSpacing: 21.67,
        height: 200,
        [theme.breakpoints.up('sm')]: {
            transform: 'rotate(180deg)',
            writingMode: 'vertical-rl',
        },
    },
}))

//Skill data
const skills = ['React', 'Node.js', 'Python', 'C++', 'SQL', 'HTML5']

/**
 * Helper function which returns svg Icon based on the name of the skill
 * @param {String} name name of the skill
 */
const getIcon = (name) => {
    switch(name.toUpperCase()) {
        case 'REACT': return One;
        case 'NODE.JS': return Two;
        case 'PYTHON': return Three;
        case 'C++': return Four;
        case 'SQL': return Five;
        case 'HTML5': return Six;
        default: return One;
    }
}

/**
 * Component which creates and returns skills
 */
const Skills = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.nameWrapper}>
                Skills
            </div>
            {
                skills.map((skillName, index) => {
                    return <Skill key={index} name={skillName} icon={getIcon(skillName)} isFirst={index===0} />
                })
            }
        </div>
    )
};

export default Skills;