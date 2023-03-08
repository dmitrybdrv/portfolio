import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import {Skill} from "./skill/Skill";
import react from '../Assets/img/icons/react.svg'
import git from '../Assets/img/icons/git.svg'
import postman from '../Assets/img/icons/postman.svg'
import sass from '../Assets/img/icons/sass.svg'
import tdd from '../Assets/img/icons/test.svg'
import storybook from '../Assets/img/icons/storybook-svgrepo-com.svg'
import js from '../Assets/img/icons/javascript.svg'
import redux from '../Assets/img/icons/redux.svg'
import typescript from '../Assets/img/icons/typescript.svg'


type SkillsPropsType = {}
export const Skills: React.FC<SkillsPropsType> = ({}) => {

    return (
        <div className={style.section}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <div className={style.title}>
                    <span>Skills</span>
                    <h3>Hard skills</h3>
                </div>

                <div className={style.skillWrapper}>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fugiat illo nostrum
                            placeat quo. Amet consequuntur dicta eum labore minima molestias quisquam quo sed ullam!
                        </p>
                    </div>
                    <Skill title={'React'} image={react}/>
                    <Skill title={'Git'} image={git}/>
                    <Skill title={'Postman'} image={postman}/>
                    <Skill title={'Sass'} image={sass}/>
                    <Skill title={'TDD'} image={tdd}/>
                    <Skill title={'Storybook'} image={storybook}/>
                    <Skill title={'JS'} image={js}/>
                    <Skill title={'Redux'} image={redux}/>
                    <Skill title={'Typescript'} image={typescript}/>
                </div>


            </div>

        </div>
    );
};