import React from 'react';
import {Project} from "features/projects/carousel/project/Project";
import {ProjectsType} from 'common/CarouselData';
import Carousel from "nuka-carousel"
import styled from "styled-components";


type CarouselPropsType = {
    projects: Array<ProjectsType>
}

const Wrapper = styled.div`
  @media (max-width: 1200px) {
    display: inline-block;
    justify-content: center;
    background: red;
    width: 80%;
  }
`;

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
        slidesToShow: 3,
        withoutControls: true
    }




    return (
        <Wrapper>
            <Carousel {...settings}>
                {myProjects}
            </Carousel>
        </Wrapper>

    );
};