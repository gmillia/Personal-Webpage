import React from 'react';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import { Visibility } from 'components';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//tests
import { BackgroundImage, Foreground } from 'components';
import WorkingSkills from 'assets/about/workingSkills.webp';
import OtherSkills from 'assets/about/otherSkills.webp';
import TouchedSkills from 'assets/about/touchedSkills.webp';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        color: 'white',
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
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('sm'));

    const skillColumn = (background, header, content, timeout) => {
        return (
            <Slide in={true} direction='right' timeout={timeout} >
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
            </Slide>
        )
    }

    return (
        <Visibility partialVisibility="top" offset={{top: desktop ? -190 : -450}} >
            <Grid item xs={12} className={classes.root} >
                <Grid item xs={12} className={classes.skillsWrapper}>
                    <Grid item xs={12} className={classes.header}>Skills</Grid>
                    {skillColumn(WorkingSkills, 'Working', 'JavaScript / Python / C++ / React / HTML5', 1500)}
                    {skillColumn(OtherSkills, 'Other', 'MongoDB / SQL / NoSQL / Firebase / Bootstrap / CSS', 1000)}
                    {skillColumn(TouchedSkills, 'Touched', 'Java / C / SCSS', 500)}
                </Grid>
            </Grid>
        </Visibility>
    )
};  

export default Skills;