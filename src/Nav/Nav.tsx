import React from 'react';
import style from './Nav.module.css'


export type NavType = {}


export const Nav: React.FC<NavType> = ({}) => {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
        </div>
    );
};