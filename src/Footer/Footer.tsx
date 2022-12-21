import React from 'react';
import style from "./Footer.module.css";
import styleContainer from "../Common/Styles/Container.module.css";


export type FooterType = {}

export const Footer: React.FC<FooterType> = ({}) => {

    return (
        <div className={style.footerBlock}>

            <div className={`${styleContainer.container} ${style.footerContainer}`}>

                <h2 className={style.footerTitle}>Bodrov Dmitry</h2>


                <div className={style.footerSocialContainer}>
                    <div className={style.socialItem}></div>
                    <div className={style.socialItem}></div>
                    <div className={style.socialItem}></div>
                    <div className={style.socialItem}></div>
                </div>
                <span className={style.footerPrivacy}>© Design Portfolio 2022</span>

            </div>

        </div>
    );
};