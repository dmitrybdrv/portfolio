import React from 'react';
import style from './Project.module.css'

export type ProjectType = {
    title: string
    description: string
}

export const Project: React.FC<ProjectType> = ({title, description}) => {

    return (
        <div className={style.project}>

            <div className={style.projectContainer}>
                <a href="#" className={style.projectContainerButton}>Explore</a>
            </div>

            <h3 className={style.projectTitle}>{title}</h3>

            <span className={style.projectDescription}>{description}</span>

        </div>
    );
};