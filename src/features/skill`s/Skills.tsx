import React from 'react';
import style from 'features/skill`s/Skills.module.scss'
import styleContainer from 'common/styles/Container.module.scss'
import react from 'assets/img/icons/react.svg'
import git from 'assets/img/icons/git.svg'
import postman from 'assets/img/icons/postman.svg'
import sass from 'assets/img/icons/sass.svg'
import tdd from 'assets/img/icons/test.svg'
import storybook from 'assets/img/icons/storybook-svgrepo-com.svg'
import js from 'assets/img/icons/javascript.svg'
import redux from 'assets/img/icons/redux.svg'
import typescript from 'assets/img/icons/typescript.svg'
import {Skill} from "features/skill`s/skill/Skill";


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