import Container from "react-bootstrap/Container";
import React from "react";
import {useTranslation} from "react-i18next";

import "./Technologies.css"

export default function Technologies() {

  const [t] = useTranslation('common');

  return (
    <Container className="p-3 p-sm-5 mb-4 bg-light rounded-4 sectionItem" id="technologies">
      <h2 className="pb-3">{t('technologies')}</h2>
      <h5>Javascript</h5>
      <ul>
        <li>
          Vue.js, Vuetify, Vuex, REST API
        </li>
        <li>
          Angular {'>'} 10
        </li>
        <li>React, Gatsby</li>
        <li>jQuery</li>
      </ul>

      <h5>PHP</h5>
      <ul>
        <li>PHP {'>'} 5</li>
        <li>Symfony</li>
        <li>Wordpress (ACF, Genesis Custom Blocks)</li>
        <li>Drupal {'>'} 8</li>
      </ul>

      <h5>{t('databases')}</h5>
      <ul>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>Redis</li>
      </ul>
    </Container>
  )
}
