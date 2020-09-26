import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';

//tests
import { BackgroundImage, Foreground } from '../../../../../components';
import WorkingSkills from '../../../../../assets/workingSkills.jpg';
import OtherSkills from '../../../../../assets/otherSkills.jpg';
import TouchedSkills from '../../../../../assets/touchedSkills.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 105,
        }
    },
    header: {
        fontSize: 24,
        paddingBottom: 25,
    },
    skillsWrapper: {
        display: 'flex',
        flexFlow: 'row wrap'
    },
    skillLevel: {
        height: '100%',
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10,
        color: 'white',
        flex: 1
    },
    skillLevelHeader: {
        width: 'auto',
        display: 'inline-block',
        fontSize: 16,
        color: "rgba(255,255,255,0.6)",
        paddingBottom: 2,
        marginBottom: 8,
        borderBottom: '1px solid gold'
    },
    skillLevelContent: {
        height: '100%',
        width: "100%",
        fontSize: 16,
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const Skills = () => {
    const classes = useStyles();

    const skillColumn = (background, header, content) => {
        return (
            <Grid item xs={12} sm={4} style={{display: 'flex', flexDirection: 'column'}}>
                <div><span className={classes.skillLevelHeader}>{header}</span></div>
                <BackgroundImage background={background} minHeight={150} >
                    <Foreground>
                        <Grid item xs={12} className={classes.skillLevel}>
                            <div className={classes.skillLevelContent}>
                                <div>{content}</div>
                            </div>
                        </Grid>
                    </Foreground>
                </BackgroundImage>
            </Grid>
        )
    }

    return (
        <Grid item xs={12} className={classes.root} >

            <Grid item xs={12} className={classes.skillsWrapper}>
                {skillColumn(WorkingSkills, 'Working', 'JavaScript / Python / C++ / React / HTML5')}
                {skillColumn(OtherSkills, 'Other', 'MongoDB / SQL / NoSQL / Firebase / Bootstrap / CSS')}
                {skillColumn(TouchedSkills, 'Touched', 'Java / C / SCSS')}
            </Grid>
        </Grid>
    )
};  

export default Skills;