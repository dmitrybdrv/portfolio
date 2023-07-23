import React, {useState} from 'react';
import style from 'features/contact/Contact.module.scss'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import {IoMdMail} from 'react-icons/io'
import {ImEarth} from 'react-icons/im'
import {Title} from "common/components/Title/Title"
import {Form} from "common/components/form/Form"

/**
 * Contact - блок описывающий отправку сообщений.
 */
export const Contact = () => {

    const [visibleDigits, setVisibleDigits] = useState(false)
    const number = process.env.REACT_APP_NUMBER
    const emailAddress = process.env.REACT_APP_EMAIL_ADDRESS

    return (
        <section id={'contact'} className={style.section}>
            <div className={style.contactContainer}>
                <Title title={'Contact'} description={'GET IN TOUCH'}/>
                <div className={style.wrapper}>
                    <div className={style.infoSide}>
                        <p>
                            Please fill out the form on this section to contact with me. I will get back to you,
                            thank you for your patience.
                        </p>
                        <ul>
                            <li><ImEarth/><span>Moscow, Russia</span></li>
                            <li>
                                <AiOutlinePhone/>
                                <span>{number}{visibleDigits
                                    ? <span onClick={() => setVisibleDigits(!visibleDigits)}>{'0913'}</span>
                                    : <span className={style.showNum}
                                            onClick={() => setVisibleDigits(!visibleDigits)}>{'click here!'}</span>}
                                    </span>
                            </li>
                            <li><IoMdMail/><span>{emailAddress}</span></li>
                            <li><BsFillCameraVideoFill/><span>soon...</span></li>
                        </ul>
                    </div>
                    <Form/>
                </div>
            </div>
        </section>
    );
};