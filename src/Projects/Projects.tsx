import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import {Project} from "./Project/Project";

export type ProjectsType = {}

export const Projects: React.FC<ProjectsType> = ({}) => {

    return (
        <div className={style.projectsBlock}>

            <div className={`${styleContainer.container} ${style.projectsContainer}`}>

                <h2 className={style.title}>Projects</h2>

                <div className={style.projects}>
                    <Project title={'Social network'}
                             description={'Some description ......Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, soluta.'}/>
                    <Project title={'Calculator'}
                             description={'Some description ......Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, asperiores et facilis harum hic maxime minima saepe temporibus ullam velit.'}/>
                    <Project title={'Todo list'}
                             description={'Some description ......Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, blanditiis consectetur cumque facere non voluptas?'}/>

                </div>

            </div>

        </div>
    );
};