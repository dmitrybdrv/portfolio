import React from 'react';
import style from 'features/skill`s/Skills.module.scss'
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
import {Title} from 'common/components/Title';
import {Slide} from 'react-awesome-reveal';


export const Skills: React.FC = () => {

    return (
        <div id='skills' className={style.section}>

            <div className={style.skillsContainer}>

                <Slide direction={'left'}>
                    <Title title={'Skills'} description={'Hard skills'}/>
                    <div className={style.skillWrapper}>
                            <div className={style.skillsDescription}>
                                <p>
                                    This is my hard skills set for today. Of course this is not the end of the list,
                                    because
                                    i trying spend all of my free time to getting new information about new features,
                                    technologies and programming tools. As i getting new skills, the list will be
                                    increase.
                                </p>
                            </div>
                            <div className={style.slillset}>
                                <Skill title={'React'} image={react} description={''}/>
                                <Skill title={'Git'} image={git} description={''}/>
                                <Skill title={'PostmanAPI'} image={postman} description={''}/>
                                <Skill title={'Sass'} image={sass} description={''}/>
                                <Skill title={'TDD'} image={tdd} description={'Test-driven development'}/>
                                <Skill title={'Storybook'} image={storybook} description={''}/>
                                <Skill title={'Javascript'} image={js} description={''}/>
                                <Skill title={'Redux'} image={redux} description={'Redux/RTK'}/>
                                <Skill title={'Typescript'} image={typescript} description={''}/>
                            </div>
                    </div>
                </Slide>

            </div>

        </div>);
};