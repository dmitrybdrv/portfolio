import React from 'react';
import style from './Header.module.css'
import {Nav} from "../Nav/Nav";


export type HeaderType = {}


export const Header: React.FC<HeaderType> = ({}) => {


    return (
        <div className={style.header}>
            <Nav/>
        </div>
    );
};