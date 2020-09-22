import React from 'react';
import { makeStyles } from "@material-ui/styles";

//ICONS
import BootstrapIcon from '../../assets/bootstrap.svg';
import CIcon from '../../assets/c.svg';
import CssIcon from '../../assets/css.svg';
import GithubIcon from '../../assets/github.svg';
import HtmlIcon from '../../assets/html.svg';
import JavaIcon from '../../assets/java.svg';
import JavascriptIcon from '../../assets/javascript.svg';
import MysqlIcon from '../../assets/mysql.svg';
import NodeIcon from '../../assets/nodejs.svg';
import PythonIcon from '../../assets/python.svg';
import ReactIcon from '../../assets/react.svg';
import SkillIcon from '../../assets/skill.svg';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        maxWidth: '100%',
        minHeight: 35,
        border: '1px solid black',
        borderColor: '#00e1b7',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        cursor: 'pointer',
        '&:hover': {
            border: '1px dashed',
            borderColor: '#00e1b7',
            paddingLeft: 15,
            paddingRight: 15,
            transition: '0.3s'
        }
    },
    skillName: {
        paddingLeft: 15,
        paddingRight: 15,
        fontFamily: 'Cinzel, serif',
    }
}))

const getIcon = (name) => {
    switch(name.toUpperCase()) {
        case 'BOOTSTRAP': return BootstrapIcon;
        case 'C': case 'C++': return CIcon;
        case 'CSS': return CssIcon;
        case 'GIT': case 'GITHUB': return GithubIcon;
        case 'HTML': return HtmlIcon;
        case 'JAVA': return JavaIcon;
        case 'JS': case 'JAVASCRIPT': return JavascriptIcon;
        case 'MYSQL': case 'SQL': return MysqlIcon;
        case 'NODE': return NodeIcon;
        case 'PYTHON': return PythonIcon;
        case 'REACT': return ReactIcon;
        default: return SkillIcon;
    }
}



const Skill = ({ name }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.iconWrapper}>
            { <img src={getIcon(name)} alt=' ' width='30' height='30' /> }
            </div>
            <div className={classes.skillName}>
            {name}
            </div>
        </div>
    )
};

export default Skill;