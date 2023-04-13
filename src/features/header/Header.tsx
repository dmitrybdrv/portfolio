import React from 'react';
import style from 'features/header/Header.module.scss'
import {Nav} from "features/header/nav/Nav";


export const Header: React.FC = () => {

    return (
        <header className={style.header}>
            <h3>Dmitry Bodrov</h3>
            <div className={style.navigation}>
                <Nav/>
            </div>
        </header>
    );
};