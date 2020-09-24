import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

//Skill component
import { Skill } from '../../../../components';

//ICONS
import ProgrammingOne from '../../../../assets/skills/programming1.jpeg';
import ProgrammingTwo from '../../../../assets/skills/programming2.jpg';
import ProgrammingThree from '../../../../assets/skills/programming3.jpg';
import ProgrammingFour from '../../../../assets/skills/programming4.jpg';
import ProgrammingFive from '../../../../assets/skills/programming5.jpg';
import ProgrammingSix from '../../../../assets/skills/programming6.jpeg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        minHeight: theme.page.height,
        paddingLeft: 15,
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 0
        }
    },
    nameWrapper: {
        fontSize: 40,
        fontWeight: 100,
        fontFamily: 'Francois One, sans-serif',
        letterSpacing: 45,
        paddingLeft: 15,
        [theme.breakpoints.up('sm')]: {
            height: 'calc((100vh - 135px) / 4)',
            letterSpacing: 'calc((((100vh - 135px) / 4) - 114px) / 5)', //get height: (100vh - 135px) / 5, subtract regular space that letters take (114 px), and divide by 5 (number of spaces we need)
            transform: 'rotate(180deg)',
            writingMode: 'vertical-rl',
        },
    },
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    skill: {
        padding: '0px 0px 15px 15px',
        [theme.breakpoints.down('xs')]: {
            padding: 15,
        }
    },
    lastSkill: {
        padding: '0px 0px 0px 15px',
        [theme.breakpoints.down('xs')]: {
            padding: 15,
        }
    }
}))

/**
 * Component which creates and returns skills
 */
const Skills = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={0} item xs={12} className={classes.root} alignContent='flex-start'>
            <Grid item xs={12} md={1} className={classes.nameWrapper}>
                SKILLS
            </Grid>
            <Grid item xs={12} md={11} className={classes.skill}>
                <Skill name='React' icon={ProgrammingOne} />
            </Grid>
            <Grid item xs={12} md={8} className={classes.skill}>
                <Skill name='Node.js' icon={ProgrammingTwo} />
            </Grid>
            <Grid item xs={12} md={4} className={classes.skill}>
                <Skill name='Python' icon={ProgrammingThree} />
            </Grid>
            <Grid item xs={12} md={5} className={classes.skill}>
                <Skill name='C++' icon={ProgrammingFour} />
            </Grid>
            <Grid item xs={12} md={7} className={classes.skill}>
                <Skill name='SQL' icon={ProgrammingFive} />
            </Grid>
            <Grid item xs={12} className={classes.lastSkill}>
                <Skill name='HTML5' icon={ProgrammingSix} />
            </Grid>
        </Grid>
    )
};

export default Skills;