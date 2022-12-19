import React from 'react';
import style from './Main.module.css'
import styleContainer from '../Common/Styles/Container.module.css'


export type MainType = {}


export const Main: React.FC<MainType> = ({}) => {


    return (
        <div className={style.mainBlock}>

            <div className={styleContainer.container}>

                <div className={style.greetingBlock}>
                    <span>Hi there</span>
                    <h1>My name is Dmitry Bodrov</h1>
                    <p>I am a frontend developer</p>
                </div>

                <div className={style.profilePhoto}>
                    <em>Profile photo</em>
                </div>

            </div>

        </div>
    );
};