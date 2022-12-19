import React from 'react';
import style from './Contact.module.css'
import styleContainer from "../Common/Styles/Container.module.css";


export type ContactType = {}

export const Contact: React.FC<ContactType> = ({}) => {


    return (

        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.contactTitle}>Contact</h2>

                <div className={style.contactForm}>

                    <form>
                        <div><input type="text"/> Name</div>
                        <div><input type="email"/> Email</div>
                        <textarea name="Message" id="textarea" cols={30} rows={10}></textarea>
                        <div><input type="submit"/></div>
                    </form>

                </div>
            </div>
        </div>


    );
};