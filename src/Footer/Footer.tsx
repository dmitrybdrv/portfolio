import React from 'react';
import style from "./Footer.module.scss";
import styleContainer from "../Common/Styles/Container.module.scss";
import {GrLinkedinOption} from 'react-icons/gr'
import {FaTelegramPlane} from 'react-icons/fa'
import {TbBrandGithub} from 'react-icons/tb'

export type FooterType = {}

export const Footer: React.FC<FooterType> = ({}) => {

    return (
        <footer>

            <div className={`${styleContainer.container} ${style.footerContainer}`}>

                <div className={style.info}>

                    <span>Copyright © 2021. All rights reserved.</span>
                    <ul>
                        <li><a href="#"><GrLinkedinOption/></a></li>
                        <li><a href="#"><FaTelegramPlane/></a></li>
                        <li><a href="#"><TbBrandGithub/></a></li>
                    </ul>

                </div>
            </div>

        </footer>
    );
};