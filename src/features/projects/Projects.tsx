import React, {useEffect, useRef, useState} from 'react';
import style from 'features/projects/Projects.module.scss'
import {Title} from 'common/components/Title';
import {Slide} from 'react-awesome-reveal';
import sn from 'assets/img/socialN.jpg'
import cntr from 'assets/img/counter.jpg'
import {motion} from "framer-motion";
import td from 'assets/img/todo.jpg'
import empt from 'assets/img/Empty.jpg'
import {Project} from "./project/Project";


export const Projects: React.FC = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef() as React.MutableRefObject<HTMLInputElement>


    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])



    return (
        <div id={'projects'} className={style.section}>

                <div className={style.projectsContainer}>


                    <Title title={'Portfolio'} description={'SELECTED WORKS'}/>
                        <div className={style.projectsWrapper}>

                            <motion.div
                                ref={carousel}
                                className={style.carousel}
                                whileTap={{cursor: 'grabbing'}}>

                                <motion.div
                                    drag={'x'}
                                    dragConstraints={{right: 0, left: - width}}
                                    className={style.inner_}>

                                    <Project image={sn} description={'Social network'} projectLink={'https://dmitrybdrv.github.io/Social_network/'}/>
                                    <Project image={cntr} description={'Counter'} projectLink={'https://dmitrybdrv.github.io/counter/'}/>
                                    <Project image={td} description={'To do list'} projectLink={'https://dmitrybdrv.github.io/todo_list/#/login'}/>
                                    <Project image={empt} description={'In progress...'} projectLink={'https://www.timeanddate.com/worldclock/'}/>

                                </motion.div>
                            </motion.div>

                        </div>

                </div>

        </div>
    );
};