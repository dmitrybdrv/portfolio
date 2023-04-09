import React from 'react';
import style from 'features/skill`s/skill/Skill.module.scss'


export type SkillType = {
    title: string

    image?: string,
}

export const Skill: React.FC<SkillType> = ({title, image}) => {



    return (

        <div className={style.skill}>

            <div className={style.title}>
                {title}
            </div>

            <div className={style.image}>
                <img src={image} alt="skill"/>
            </div>
{/*            <div className={style.innerBox}>
                <div className={style.imageBox}>
                    <img src={image} alt=""/>
                </div>
                <div className={style.cat}>
                    <span>{title}</span>
                </div>
            </div>*/}
        </div>
    );
};