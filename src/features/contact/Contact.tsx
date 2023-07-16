import React, {useState} from 'react';
import style from 'features/contact/Contact.module.scss'
import {FaLocationArrow} from 'react-icons/fa'
import {AiOutlinePhone, AiTwotoneMail} from 'react-icons/ai'
import {ImEarth} from 'react-icons/im'
import {Title} from "common/components/Title";
import {Slide} from "react-awesome-reveal";

export type ContactType = {}

export const Contact: React.FC<ContactType> = ({}) => {
    const [onHover, setHoverOn] = useState(false)

    return (

        <section id={'contact'} className={style.section}>

            <Slide direction={'left'}>
                <div className={style.contactContainer}>

                    <Title title={'Contact'} description={'GET IN TOUCH'}/>

                    <div className={style.wrapper}>

                        <div className={style.infoSide}>
                            <p>
                                Please fill out the form on this section to contact with me. I will get back to you,
                                thank you for your patience.
                            </p>

                            <ul>
                                <li><FaLocationArrow/><span>Moscow, Russia</span></li>
                                <li>
                                    <AiOutlinePhone/>
                                    <span>+7-909-948{onHover
                                        ? <span onDoubleClick={() => setHoverOn(!onHover)}>{'09-13'}</span>
                                        : <span className={style.showNum}
                                                onDoubleClick={() => setHoverOn(!onHover)}>{'double click here!'}</span>}
                                    </span>
                                </li>
                                <li><AiTwotoneMail/><span>127.0.1.2@protonmail.com</span></li>
                                <li><ImEarth/><span>soon...</span></li>
                            </ul>

                        </div>

                        <div className={style.formSide}>
                            <div className={style.input}><input type="text" placeholder={'Name'}/></div>
                            <div><input type="text" placeholder={'Email'}/></div>
                            <div><textarea cols={1} rows={3} placeholder={'Message'}></textarea></div>
                            <button>Submit</button>
                        </div>

                    </div>

                </div>
            </Slide>

        </section>

    );
};