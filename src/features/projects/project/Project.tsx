import React from 'react';
import style from 'features/projects/project/Project.module.scss'

export type ProjectType = {
    title: string
    description: string
    image: string
}

export const Project: React.FC<ProjectType> = ({title, description, image}) => {


    return (
        <div className={style.flip_card}>

            <div className={style.flip_image} style={{backgroundSize: "cover", backgroundImage: `url(${image})`}}>{title}</div>

        </div>
    );
};

