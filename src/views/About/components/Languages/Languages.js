import React from 'react';

//ICONS
import EnglishIcon from '../../../../assets/english.svg';
import RussianIcon from '../../../../assets/russia.svg';
import UkrainianIcon from '../../../../assets/ukraine.svg';
import SkillIcon from '../../../../assets/skill.svg';

//Skill component
import { Skill } from '../../../../components';

const languages = ['English', 'Russian', 'Ukrainian', ]

/**
 * Helper function which returns svg Icon based on the name of the skill
 * @param {String} name name of the skill
 */
const getIcon = (name) => {
    switch(name.toUpperCase()) {
        case 'ENGLISH': return EnglishIcon;
        case 'RUSSIAN': return RussianIcon;
        case 'UKRAINIAN': return UkrainianIcon;
        default: return SkillIcon;
    }
}

const Languages = () => {
    return (
        languages.map((language, index) => {
            return <Skill key={index} name={language} icon={getIcon(language)} />
        })
    )
};

export default Languages;