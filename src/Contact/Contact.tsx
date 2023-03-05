import React from 'react';
import style from './Contact.module.css'
import styleContainer from "../Common/Styles/Container.module.scss";


export type ContactType = {}

export const Contact: React.FC<ContactType> = ({}) => {


    return (

        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.contactTitle}>Contact</h2>

                <div className={style.contactForm}>

                    <form>
                        <div><input type="text" placeholder={'Your name'}/><span>Name</span></div>
                        <div><input type="email" placeholder={'Your email address'}/><span>Email</span></div>
                        <textarea name="Message" id="textarea" cols={28} rows={10} placeholder={'Send your message to me!)'}></textarea>
                        <div><input type="submit"/></div>
                    </form>

                </div>
            </div>
        </div>


    );
};