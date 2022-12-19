import React from 'react';
import style from './Skill.module.css'


export type SkillType = {
    title: string
    description: string
}

export const Skill: React.FC<SkillType> = ({title, description}) => {

    return (

        <div className={style.skill}>

            <div className={style.skillIcon}></div>
            <h3 className={style.skillTitle}>{title}</h3>
            <span className={style.skillDescription}>{description}</span>

        </div>
    );
};