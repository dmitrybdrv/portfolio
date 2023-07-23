import React from 'react';
import Carousel from "nuka-carousel"
import {ProjectsType} from 'common/CarouselData';
import {Project} from "features/projects/ProjectCarousel/project/Project";
import style from './ProjectCarousel.module.scss'


type CarouselPropsType = {
    projects: Array<ProjectsType>
}

/**
 * ProjectCarousel - компонент - "карусель" проектов пользователя
 * @param projects - массив проектов
 */
export const ProjectCarousel: React.FC<CarouselPropsType> = ({projects}) => {

    const myProjects = projects.map(el =>
            <Project
                key={el.id}
                image={el.pic}
                title={el.title}
                projectLink={el.way}
                description={el.description}
            />
       )

    const settings = {
        autoplay: true,
        autoplayInterval: 4000,
        wrapAround: true,
        slidesToShow: 1,
        withoutControls: true,
        cellSpacing: 20,
    }

    return (
            <Carousel {...settings} className={style.projectCarouselContainer}>
                {myProjects}
            </Carousel>
    );
};