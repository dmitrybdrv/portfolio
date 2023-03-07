import React from 'react';
import style from './Contact.module.scss'
import styleContainer from "../Common/Styles/Container.module.scss";
import {FaLocationArrow} from 'react-icons/fa'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiTwotoneMail} from 'react-icons/ai'
import {ImEarth} from 'react-icons/im'

export type ContactType = {}

export const Contact: React.FC<ContactType> = ({}) => {


    return (

        <div className={style.section}>

            <div className={`${styleContainer.container} ${style.contactContainer}`}>

                <div className={style.title}>
                    <span>Contact</span>
                    <h3>GET IN TOUCH</h3>
                </div>


                <div className={style.wrapper}>

                    <div className={style.infoSide}>
                        <p>
                            Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and
                            8:00 p.m. ET, Monday through Friday
                        </p>

                        <ul>
                            <li><FaLocationArrow/><span>44 Place, Tokyo, Japan</span></li>
                            <li><FaLocationArrow/><span>Place, Tokyo, Japan</span></li>
                            <li><AiOutlinePhone/><span>+77 033 442 55 57</span></li>
                            <li><AiTwotoneMail/><span>dodo@gmail.com</span></li>
                            <li><ImEarth/><span>www.domain.com</span></li>
                        </ul>

                    </div>


                    <div className={style.formSide}>
                       <div className={style.input}><input type="text" placeholder={'Name'}/></div>
                       <div><input type="text" placeholder={'Email'}/></div>
                       <div><textarea  cols={1} rows={3} placeholder={'Message'}></textarea></div>
                        <button>Submit</button>
                    </div>

                </div>


            </div>
        </div>


    );
};