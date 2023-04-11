import React from 'react';
import style from 'features/contact/Contact.module.scss'
import {FaLocationArrow} from 'react-icons/fa'
import {AiOutlinePhone, AiTwotoneMail} from 'react-icons/ai'
import {ImEarth} from 'react-icons/im'
import {Title} from "common/components/Title";
import {Slide} from "react-awesome-reveal";

export type ContactType = {}

export const Contact: React.FC<ContactType> = ({}) => {


    return (

        <section id={'contact'} className={style.section}>

            <Slide>
                <div className={style.contactContainer}>

                    <Title title={'Contact'} description={'GET IN TOUCH'}/>

                    <div className={style.wrapper}>

                        <div className={style.infoSide}>
                            <p>
                                Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and
                                8:00 p.m. ET, Monday through Friday
                            </p>

                            <ul>
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
            </Slide>

        </section>

    );
};