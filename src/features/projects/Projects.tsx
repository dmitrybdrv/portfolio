import React from 'react';
import style from 'features/projects/Projects.module.scss'
import proj4 from 'assets/img/proj4.jpg'
import proj5 from 'assets/img/proj5.jpg'
import proj6 from 'assets/img/proj6.jpg'
import {GrCaretNext, GrCaretPrevious} from 'react-icons/gr'
import {Project} from "features/projects/project/Project";
import {Title} from 'common/components/Title';
import {Slide} from 'react-awesome-reveal';


export type ProjectsType = {}

export const Projects: React.FC<ProjectsType> = ({}) => {

    return (
        <div id={'projects'} className={style.section}>

                <div className={style.projectsContainer}>

                    <Slide>

                    <Title title={'Portfolio'} description={'SELECTED WORKS'}/>

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
                    </Slide>

                </div>

        </div>
    );
};