import style from 'features/header/nav/Nav.module.scss';
import {Link} from 'react-scroll';

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link to={'main'} activeClass={style.active} spy={true} smooth={true} offset={0} duration={500}>
                Main
            </Link>
            <Link to={'skills'} activeClass={style.active} spy={true} smooth={true} offset={0} duration={500}>
               Skills
            </Link>
            <Link to={'projects'} activeClass={style.active} spy={true} smooth={true} offset={0} duration={500}>
                Projects
            </Link>
            <Link to={'contact'} activeClass={style.active} spy={true} smooth={true} offset={0} duration={500}>
                Contact
            </Link>
        </div>
    );
};