import React from 'react';
import style from 'features/skill`s/skill/Skill.module.scss'

export type SkillType = {
    title: string
    description: string
    image?: string,
}
/**
 * Skill - компонент - технология блока Skills
 * @param title - заголовок технологии
 * @param image - иконка технологии
 * @param description - описание технологии
 */
export const Skill: React.FC<SkillType> = ({title, image, description}) => {
    return (
        <div className={style.wrapper}>
                <div className={style.card}>
                    <img src={image} alt="skill"/>
                    <div className={style.info}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>

        </div>
    );
};