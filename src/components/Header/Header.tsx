import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import flagPl from '../../images/pl.svg';
import flagEn from '../../images/en.svg';
import flagDe from '../../images/de.svg';
import './Header.css';

export default function Header() {

  function scrollToSelection(id: string) {
    setExpanded(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function languageChange(language: string) {
    i18n.changeLanguage(language).then(() => {
      const newUrl = window.location.pathname.replace(/^\/[a-z]{2}/, `/${language}`) || `/${language}`;
      window.history.replaceState({}, '', newUrl);
    });
  }

  function displayFlag() {
    switch (i18n.language) {
      case 'en':
        return flagEn;
      case 'de':
        return flagDe;
      case 'pl':
        return flagPl;
    }
  }

  const [expanded, setExpanded] = useState(false);
  const {t, i18n} = useTranslation('common');

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="bg-light shadow-sm"
        expanded={expanded}
        data-testid="nav-bar"
      >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
            onClick={() => setExpanded(!expanded)}
            data-testid="nav-toggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#" data-testid="nav-link-clients" onClick={() => scrollToSelection('clients')}>{t('clients')}</Nav.Link>
              {/*<Nav.Link href="#projects" data-testid="nav-link-projects" onClick={() => setExpanded(false)}>{t('projects')}</Nav.Link>*/}
              <Nav.Link href="#" data-testid="nav-link-technologies" onClick={() => scrollToSelection('technologies')}>{t('technologies')}</Nav.Link>
              <Nav.Link href="#" data-testid="nav-link-tools" onClick={() => scrollToSelection('tools')}>{t('tools')}</Nav.Link>
              <Nav.Link href="#" data-testid="nav-link-contact" onClick={() => scrollToSelection('contact')}>{t('contact')}</Nav.Link>
              <NavDropdown title={<div className="float-start pe-1">
                <img className="thumbnailImage mb-1"
                      alt="language"
                      src={ displayFlag() }
                />
              </div>} id="basic-nav-dropdown" data-testid="basic-nav-dropdown">
                <NavDropdown.Item
                  data-testid="basic-nav-dropdown-en"
                  onClick={ () => { setExpanded(false); languageChange('en'); }}>
                  {t('english')}
                </NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item
                  data-testid="basic-nav-dropdown-pl"
                  onClick={ () => { setExpanded(false); languageChange('pl'); }}>
                  {t('polish')}
                </NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Item
                  data-testid="basic-nav-dropdown-de"
                  onClick={ () => { setExpanded(false); languageChange('de'); }}>
                  {t('deutsch')}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
