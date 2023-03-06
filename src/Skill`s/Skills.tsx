import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import typescript from '../Assets/img/icons/typescript.svg'
import react from '../Assets/img//icons/react.svg'
import scss from '../Assets/img/icons/sass.svg'
import redux from '../Assets/img/icons/redux.svg'
import tdd from '../Assets/img//icons/test.svg'
import storybook from '../Assets/img/icons/storybook-svgrepo-com.svg'
import nodejs from '../Assets/img/icons/nodejs.svg'
import postman from '../Assets/img/icons/postman.svg'
import swagger from '../Assets/img/icons/swagger.svg'
import git from '../Assets/img/icons/git.svg'
import js from '../Assets/img/icons/javascript.svg'


export type SkillsType = {}

export const Skills: React.FC<SkillsType> = ({}) => {


    return (
        <section>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <div className={style.title}>
                    <span>Skills</span>
                    <h3>PROGRAMMING SKILLS</h3>
                </div>


                <div className={style.skills}>
                    <Skill title={'React'} image={react}/>
                    <Skill title={'Typescript'} image={typescript}/>
                    <Skill title={'SASS'} image={scss}/>
                    <Skill title={'TDD'} image={tdd}/>
                    <Skill title={'Redux'} image={redux}/>
                    <Skill title={'StoryBook'} image={storybook}/>
                    <Skill title={'NodeJS'} image={nodejs}/>
                    <Skill title={'Postman'} image={postman}/>
                    <Skill title={'Swagger'} image={swagger}/>
                    <Skill title={'Git'} image={git}/>
                    <Skill title={'JavaScript'} image={js}/>


                </div>

            </div>

        </section>
    );
};