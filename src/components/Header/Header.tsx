import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import flagPl from '../../images/pl.png';
import flagEn from '../../images/en.png';
import './Header.css';

export default function Header() {

  function languageChange(language: string) {
    i18n.changeLanguage(language).then(() => {
      console.log(i18n.language);
    });
  }

  const [expanded, setExpanded] = useState(false);
  const {t, i18n} = useTranslation('common');

  return (
    <>
      <Navbar expand="lg" fixed="top" className="bg-light shadow-sm" expanded={expanded}>
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light"
                         onClick={() => setExpanded(!expanded)}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#clients" onClick={() => setExpanded(false)}>{t('clients')}</Nav.Link>
              <Nav.Link href="#projects" onClick={() => setExpanded(false)}>{t('projects')}</Nav.Link>
              <Nav.Link href="#technologies" onClick={() => setExpanded(false)}>{t('technologies')}</Nav.Link>
              <Nav.Link href="#tools" onClick={() => setExpanded(false)}>{t('tools')}</Nav.Link>
              <Nav.Link href="#contact" onClick={() => setExpanded(false)}>{t('contact')}</Nav.Link>
              <NavDropdown title={<div className="float-start pe-1">
                <img className="thumbnailImage mb-1"
                     alt="language"
                     src={(i18n.language === 'en') ? flagEn : flagPl}
                />
              </div>} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => {
                  setExpanded(false);
                  languageChange('en')
                }}>{t('english')}</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item onClick={() => {
                  setExpanded(false);
                  languageChange('pl')
                }}>{t('polish')}</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
