import React from 'react';
import style from './Skill.module.scss'
import {ReactNode} from 'react'
import test from '../../Assets/img/r1.jpg'


export type SkillType = {
    title: string

    image?: string,
}

export const Skill: React.FC<SkillType> = ({title, image}) => {



    return (

        <div className={style.skill}>
            <div className={style.innerBox}>
                <div className={style.imageBox}>
                    <img src={image} alt=""/>
                </div>
                <div className={style.cat}>
                    <span>{title}</span>
                </div>
            </div>
        </div>
    );
};