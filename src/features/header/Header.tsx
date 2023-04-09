import React from 'react';
import style from 'features/header/Header.module.scss'
import {Nav} from "features/nav/Nav";


export type HeaderType = {}


export const Header: React.FC<HeaderType> = ({}) => {


    return (
        <header className={style.header}>
            <h3>Dmitry Bodrov</h3>
            <Nav/>
        </header>
    );
};