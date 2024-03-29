import style from 'features/header/Header.module.scss'
import {Nav} from "features/header/nav/Nav";

export const Header = () => {
    return (
        <header className={style.header}>
            <div>
                <h3>Dmitry Bodrov</h3>
            </div>
            <div className={style.navigation}>
                <Nav/>
            </div>
        </header>
    );
};