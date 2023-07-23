import React from 'react';
import style from 'features/projects/ProjectCarousel/project/Project.module.scss'


export type ProjectType = {
    image: string
    title: string
    projectLink: string
    description: string
}
/**
 * Project - item карусели проектов
 * @param image - катринка проекта
 * @param projectLink - ссылка проекта
 * @param title - заголовок проекта
 * @param description - описание проекта
 */
export const Project: React.FC<ProjectType> = ({image, projectLink, title, description}) => {


    return (
        <div className={style.proj}>
            <div className={style.card}>
                 <img src={image} alt="project"/>
                <div className={style.info}>
                    <h3><a href={projectLink} target={'_blank'} rel={'noreferrer'}>{title}</a></h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>

    );
};

