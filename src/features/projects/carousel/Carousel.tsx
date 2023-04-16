import React from 'react';
import {Project} from "features/projects/carousel/project/Project";
import {ProjectsType} from 'assets/CarouselData';
import Slider from "react-slick";
import style from './Carousel.module.scss'



type CariouselPropsType = {
    projects: Array<ProjectsType>
}
export const Carousel: React.FC<CariouselPropsType> = ({projects}) => {


   const myProjects = projects.map(el =>
       <Project
           key={el.id}
           image={el.pic}
           title={el.title}
           projectLink={el.way}
           description={el.description}
       />)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };


    return (
        <div>
            <Slider {...settings} className={style.slider}>
                {myProjects}
            </Slider>
        </div>

    );
};