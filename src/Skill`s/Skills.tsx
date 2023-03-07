import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import react from '../Assets/img/icons/react.svg'


type SkillsPropsType = {}
export const Skills: React.FC<SkillsPropsType> = ({}) => {

    return (
        <div className={style.section}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <div className={style.title}>
                    <span>Skills</span>
                    <h3>Hard skills</h3>
                </div>



            </div>

        </div>
    );
};