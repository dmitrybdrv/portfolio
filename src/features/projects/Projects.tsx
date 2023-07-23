import style from 'features/projects/Projects.module.scss'
import {Title} from 'common/components/Title/Title';
import {projects} from 'common/CarouselData'
import {ProjectCarousel} from "./ProjectCarousel/ProjectCarousel";

/**
 * Projects - реализация блока с описанием и проектами пользователя
 */
export const Projects = () => {
    return (
        <div id={'projects'} className={style.section}>
            <div className={style.projectsContainer}>
                <div className={style.projectsWrapper}>
                    <div className={style.projectsLeft}>
                        <Title title={'Portfolio'} description={'SELECTED WORKS'}/>
                        <p>
                            Here you can find my projects, and most of them are available for testing. I've put in a lot of
                            effort to create interesting projects, and I hope you enjoy using and exploring them. Enjoy your
                            browsing!
                        </p>
                    </div>
                    <div className={style.projectsRight}>
                        <ProjectCarousel projects={projects}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
