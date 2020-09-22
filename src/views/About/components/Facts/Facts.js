import React from 'react';

//Fact component
import { Fact } from '../../../../components';

const facts = [
    'Born in Kiev, Ukraine.',
    'Moved to USA at 15.',
    'Played soccer since around 5 years old.',
    'Had a torn ACL, and had to quit after HS.',
    'Coached at the High School level since 2016. ',
    'Started coaching at the University in 2019',
    'Regular Ukrainian school really prepares one to become a programmer.',
    'Participated in various math and science tournaments at the young age and all throughout my time in Ukraine.',
    'Interest in programming and sports naturally forced me to write various personal projects related to sport analytics.'
];

const Facts = () => {
    return (
        facts.map((fact, index) => {
            return <Fact key={index} fact={fact} index={index} />
        })
    )
};

export default Facts;