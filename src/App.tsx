import React from 'react';

import Container from 'react-bootstrap/Container';

import {useTranslation} from "react-i18next";

import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Clients from "./components/Clients/Clients";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Tools from "./components/Tools";

const App: React.FC = () => {

    const {t} = useTranslation('common');

    const getCurrentDate = () => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        return today.getFullYear();
    }

    return (
        <Container>
            <Header />

            <div className="position-relative overflow-hidden pt-4 mt-2 p-md-2 m-md-5 text-center">
                <img src="/logo_nailit_s.png" alt="nail it" className="p-5 pt-5 pb-4"/>
                <p className="fs-5 text-muted">
                  {t('motto')}<br/>
                  {t('motto.sub')}
                </p>
                <p>
                    <a href="#projects" className="btn btn-primary mx-3">{t('see.projects')}</a>
                    <a href="#contact" className="btn btn-secondary my-2">{t('contact')}</a>
                </p>
            </div>

            <Projects></Projects>

            <div className="row equal">
              <div className="col-12 col-md-6">
                <Technologies></Technologies>
              </div>
              <div className="col-12 col-md-6">
                <Tools></Tools>
              </div>
            </div>

            <Clients />

            <Contact/>

            <p className="text-end p-3">
                &copy; nail it {getCurrentDate()}
            </p>
        </Container>
    );
};

export default App;
