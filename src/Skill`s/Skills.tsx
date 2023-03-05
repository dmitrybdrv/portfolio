import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import {Skill} from "./skill/Skill";


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
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque enim id nemo tempore voluptates voluptatibus.'}/>
                    <Skill title={'TypeScript'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque error fugiat, harum omnis pariatur reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque error fugiat, harum omnis !!!!!!!!!  fugiat, harum omnis pariatur reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque error fugiat, harum omnis'}/>
                    <Skill title={'CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores consequatur cumque cupiditate deleniti dicta, eum facere inventore, iusto obcaecati provident veritatis!'}/>
                    <Skill title={'TDD'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, ut.'}/>
                    <Skill title={'StoryBook'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque error fugiat, harum omnis pariatur reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque error fugiat, harum omnis !!!!!!!!!  fugiat, harum omnis pariatur reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque error fugiat, harum omnis'}/>
                    <Skill title={'NodeJS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut, autem fugit perspiciatis suscipit unde!'}/>

                </div>

            </div>

        </section>
    );
};