import Container from "react-bootstrap/Container";
import React from "react";
import {useTranslation} from "react-i18next";

export default function Tools () {

  const [t] = useTranslation('common');

  return (
    <Container className="p-3 p-sm-5 mb-4 bg-light rounded-4 sectionItem" id="tools">
    <h2 className="pb-3">{t('tools')}</h2>
    <h5>IDE</h5>
    <ul>
      <li>WebStorm</li>
      <li>PHPStorm</li>
      <li>DataGrip</li>
    </ul>
    <h5>PMS</h5>
    <ul>
      <li>JIRA</li>
      <li>Confluence</li>
    </ul>

    <h5>{t('repository')}</h5>
    <ul>
      <li>Azure DevOps</li>
      <li>Bitbucket</li>
      <li>Github - <a href="https://github.com/nail-it">{t('check.repository')}</a></li>
    </ul>

    <h5>Interface Design Tool</h5>
    <ul>
      <li>Figma</li>
    </ul>

    <h5>{ t('instant.messengers') }</h5>
    <ul>
      <li>Microsoft Teams</li>
      <li>Slack</li>
    </ul>

    <h5>{t('hardware')}</h5>
    <ul>
      <li>MacBook</li>
    </ul>
  </Container>)
}
