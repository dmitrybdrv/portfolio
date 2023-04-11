import React from 'react';
import style from "common/components/Title.module.scss";

type TitlePropsType = {
    title: string
    description: string
}
export const Title: React.FC <TitlePropsType> = ({title, description}) => {
 return (
     <div className={style.title}>
         <span>{title}</span>
         <h3>{description}</h3>
     </div>
 );
};