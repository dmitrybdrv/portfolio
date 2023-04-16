import React from 'react';
import style from 'features/projects/Projects.module.scss'
import {Title} from 'common/components/Title';
import {Slide} from 'react-awesome-reveal';
import {projects} from 'assets/CarouselData'
import {Carousel} from './carousel/Carousel';


export const Projects: React.FC = () => {


    return (
        <div id={'projects'} className={style.section}>

            <div className={style.projectsContainer}>
                <Slide direction={'right'}>
                    <Title title={'Portfolio'} description={'SELECTED WORKS'}/>
                    <Carousel projects={projects}/>
                </Slide>
            </div>

        </div>
    );
};
