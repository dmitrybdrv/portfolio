import React from 'react';
import style from 'features/main/Main.module.scss'
import styleContainer from 'common/styles/Container.module.scss'
import me from 'assets/img/1.jpg'


export type MainType = {}


export const Main: React.FC<MainType> = ({}) => {


    return (

            <div className={styleContainer.container + ' ' + style.mainBlock}>

                <div className={style.greetingBlock}>
                    <span>Dmitry Bodrov</span>
                    <h3>FRONTEND DEVELOPER<br/>
                        AND FREELANCER</h3>
                    <div className={style.shortInfo}>
                        <ul>
                            <li>Web development</li>
                            <li>Digital Marketing</li>
                            <li>Graphic Design</li>
                        </ul>
                    </div>
                    <div className={style.counterInfo}>
                        <ul>
                            <li><div className={style.listInner}><h3>10+</h3><span>Years of <br/> Experience</span></div></li>
                            <li><div className={style.listInner}><h3>3K</h3><span>Happy <br/> Customers</span></div></li>
                        </ul>
                    </div>
                </div>

                <div className={style.profilePhoto}>

                        <img src={me} alt=""/>

                </div>

            </div>

    );
};