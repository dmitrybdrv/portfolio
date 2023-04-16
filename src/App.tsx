import React from 'react';
import style from './App.module.scss';
import {Header} from "./features/header/Header";
import {Main} from "./features/main/Main";
import {Skills} from "./features/skill`s/Skills";
import {Projects} from "./features/projects/Projects";
import {Contact} from "./features/contact/Contact";
import {Footer} from "./features/footer/Footer";


function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
