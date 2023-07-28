import react from 'assets/img/icons/react.svg'
import git from 'assets/img/icons/git.svg'
import postman from 'assets/img/icons/postman.svg'
import sass from 'assets/img/icons/sass.svg'
import tdd from 'assets/img/icons/test.svg'
import storybook from 'assets/img/icons/storybook-svgrepo-com.svg'
import js from 'assets/img/icons/javascript.svg'
import redux from 'assets/img/icons/redux.svg'
import typescript from 'assets/img/icons/typescript.svg'
import {Skill} from "features/skill`s/skill/Skill";
import {Title} from 'common/components/Title/Title';
import style from 'features/skill`s/Skills.module.scss'

/**
 * Skills - блок со списком изученных технологий
 */
export const Skills = () => {
    return (
        <div id='skills' className={style.section}>
            <div className={style.skillsContainer}>
                    <Title title={'Skills'} description={'Hard skills'}/>
                    <div className={style.skillWrapper}>
                            <div className={style.skillsDescription}>
                                <p>
                                   This is my skill set for today. 
                                    This is not a complete list, because in my free time I always try to learn something new about various features, technologies and programming tools. 
                                    As I gain new skills, the list will be updated.
                                </p>
                            </div>
                            <div className={style.slillset}>
                                <Skill title={'React'} image={react} description={''}/>
                                <Skill title={'Git'} image={git} description={''}/>
                                <Skill title={'PostmanAPI'} image={postman} description={''}/>
                                <Skill title={'Sass'} image={sass} description={''}/>
                                <Skill title={'TDD'} image={tdd} description={'Test-driven development'}/>
                                <Skill title={'Storybook'} image={storybook} description={''}/>
                                <Skill title={'Javascript'} image={js} description={''}/>
                                <Skill title={'Redux'} image={redux} description={'Redux/RTK'}/>
                                <Skill title={'Typescript'} image={typescript} description={''}/>
                            </div>
                    </div>
            </div>

        </div>);
};
