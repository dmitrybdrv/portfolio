import React from 'react';
import style from "features/footer/Footer.module.scss";
import {GrLinkedinOption} from 'react-icons/gr'
import {FaTelegramPlane} from 'react-icons/fa'
import {TbBrandGithub} from 'react-icons/tb'
import { Slide } from 'react-awesome-reveal';

export const Footer: React.FC = () => {

    return (
        <footer>

            <div className={style.footerContainer}>
                <Slide direction={'right'}>
                    <div className={style.info}>
                        <span>Copyright © 2021. All rights reserved.</span>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/dmitry-bodrov/" target={'_blank'} rel="noopener noreferrer"><GrLinkedinOption/></a></li>
                            <li><a href="https://t.me/DMITRYBDRV" target={'_blank'} rel="noopener noreferrer"><FaTelegramPlane/></a></li>
                            <li><a href="https://github.com/dmitrybdrv" target={'_blank'} rel="noopener noreferrer"><TbBrandGithub/></a></li>
                        </ul>
                    </div>
                </Slide>
            </div>

        </footer>
    );
};