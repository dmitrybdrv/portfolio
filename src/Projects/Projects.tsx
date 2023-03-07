import React from 'react';
import style from './Projects.module.scss'
import styleContainer from "../Common/Styles/Container.module.scss";
import {Project} from "./Project/Project";
import proj4 from '../Assets/img/proj4.jpg'
import proj5 from '../Assets/img/proj5.jpg'
import proj6 from '../Assets/img/proj6.jpg'
import {GrCaretPrevious} from 'react-icons/gr'
import {GrCaretNext} from 'react-icons/gr'
import proj1 from '../Assets/img/proj1.jpg'
import proj2 from '../Assets/img/proj2.jpg'
import proj3 from '../Assets/img/proj3.jpg'

export type ProjectsType = {}

export const Projects: React.FC<ProjectsType> = ({}) => {

    return (
        <div className={style.section}>

            <div className={styleContainer.container + ' ' + style.projectsContainer}>


                <div className={style.title}>
                    <span>Portfolio</span>
                    <h3>SELECTED WORKS</h3>
                </div>

                <div className={style.projectsWrapper}>

                    <div className={style.projects}>

                        <Project title={'Social network'}
                                 description={'Some description. Lorem ipsum dolor'}
                                 image={proj4}/>

                        <Project title={'Calculator'}
                                 image={proj5}
                                 description={'Some description ......Lorem ipsum dolor sit amet, ' +
                                     'nima saepe temporibus ullam velit.'}/>

                        <Project title={'Todo list'}
                                 image={proj6}
                                 description={'Some description ....' +
                                     '..Lorem ipsum dolor sit amet, consectetur ' +
                                     'adipisicing elit. Atque, blanditiis consectetur cumque facere non voluptas?'}/>






                    </div>
                    <div className={style.pagination}>
                        <div className={style.step}>
                            <span><GrCaretPrevious/></span>
                            <span><GrCaretNext/></span>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    );
};