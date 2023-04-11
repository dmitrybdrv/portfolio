import React, {useEffect, useState} from 'react';
import style from 'features/main/Main.module.scss'
import {Slide} from "react-awesome-reveal";
import me from 'assets/img/me2.jpg'

export const Main: React.FC = () => {


    return (

        <div id={'main'} className={style.section}>

            <Slide>
                <div className={style.greetingBlock}>
                    <span>Dmitry Bodrov</span>
                    <h3>Hi, I`m Dmitry<br/>
                        frontend developer</h3>
                    <div className={style.shortInfo}>
                        <ul>
                            <div>
                                <li>Web development</li>
                            </div>
                            <div>
                                <li>UI/UX</li>
                            </div>
                            <div>
                                <li>Optimizing performance</li>
                            </div>
                        </ul>
                    </div>
                    <div className={style.counterInfo}>
                        <ul>
                            <li>
                                <div className={style.listInner}><h3>Never</h3><span>Give up</span></div>
                            </li>
                            <li>
                                <div className={style.listInner}><h3>Some</h3><span>Happy <br/> Customers</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Slide>

            <Slide direction={'right'}>
                <div className={style.profilePhoto}>
                    <img className={style.photo1} src={me} alt="photo2"/>
                </div>
            </Slide>

        </div>
    );
};