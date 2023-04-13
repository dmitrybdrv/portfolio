import React from 'react';
import style from 'features/projects/project/Project.module.scss'
import sn from "../../../assets/img/socialN.jpg";
import {motion} from "framer-motion";



export type ProjectType = {
    image: string
    description: string
    projectLink: string
}

export const Project: React.FC<ProjectType> = ({image, description, projectLink}) => {



    return (
        <motion.div className={style.item}>
            <div className={style.aboutItem}>
                <span>
                    <a href={projectLink} target={'_blank'}>
                         {description}
                    </a>
                </span>
            </div>
                <img src={image} alt="project"/>

        </motion.div>
    );
};

