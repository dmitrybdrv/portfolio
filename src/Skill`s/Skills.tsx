import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import {Skill} from "./skill/Skill";


export type SkillsType = {}

export const Skills: React.FC<SkillsType> = ({}) => {


    return (
        <div className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>

                <h2 className={style.title}>SkillSet</h2>

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

        </div>
    );
};