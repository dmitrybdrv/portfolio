import style from 'features/main/Main.module.scss'
import me from 'assets/img/profile.png'
import ReactTypingEffect from 'react-typing-effect';

export const Main = () => {
    return (
        <div id={'main'} className={style.section}>
                <div className={style.greetingBlock}>
                    <span>Dmitry Bodrov</span>
                    <h3>Hi, I`m Dmitry<br/>
                        frontend developer</h3>
                    <div className={style.shortInfo}>
                        <ul>
                            <div>
                                <li><ReactTypingEffect
                                    text={'Web development'}
                                    className={style.typing}
                                    eraseDelay={3000}
                                /></li>
                            </div>
                            <div>
                                <li><ReactTypingEffect
                                    text={'UI/UX'}
                                    className={style.typing}
                                    eraseDelay={2000}
                                /></li>
                            </div>
                            <div>
                                <li><ReactTypingEffect
                                    text={'Optimizing performance'}
                                    className={style.typing}/></li>
                            </div>
                        </ul>
                    </div>
                    <div className={style.counterInfo}>
                        <ul>
                            <li>
                                <div className={style.listInner}><h3>Do what</h3><span>you<br/>love</span></div>
                            </li>
                            <li>
                                <div className={style.listInner}><h3>Love</h3><span>what<br/>you do</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.profilePhoto}>
                <div className={style.loader}>
                </div>
                <img className={style.photo} src={me} alt={'my avatar'}/>
            </div>
        </div>);
};