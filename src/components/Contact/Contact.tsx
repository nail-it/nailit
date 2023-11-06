import Container from "react-bootstrap/Container";
import CopyButton from "../CopyButton/CopyButton";
import React, {useState} from "react";
import ToastsShowcase from "../Toasts";

import './Contact.css';
import {useTranslation} from "react-i18next";

export default function Contact() {
  const [showNotification, setShowNotification] = useState(false);
  const [t, i18n] = useTranslation('common');


  const reactionToCopy = (data: string) => {
    console.log(data);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  }

  function displayEmailAddress() {
    return (
      <>
        {(i18n.language == 'pl') ?
          (<><a href={'mailto:kontakt@nailit.pl'}>kontakt@nailit.pl</a> <CopyButton text='kontakt@nailit.pl'
                                                                                    cb={reactionToCopy}/></>)
          :
          (<><a href={'mailto:contact@nailit.eu'}>contact@nailit.eu</a> <CopyButton text='contact@nailit.eu'
                                                                                    cb={reactionToCopy}/></>)
        }
      </>
    )
  }

  return (
    <Container className="p-3 p-sm-5 mb-4 bg-light rounded-4 sectionItem" id="contact">

      <h2 className="pb-3">{t('contact')}</h2>
      <p>
        NAIL IT TOMASZ GWÓŹDŹ<br/>
        {t('company.address')}
        <br/>
        30-419 Kraków
      </p>

      <p>
        NIP: 813 33 78 612 <CopyButton text='8133378612' cb={reactionToCopy}/>
        <br/>
        REGON: 367897141
      </p>

      <h5>{t('bank.account')}</h5>

      <p>
        Nest Bank:<br/>
        96 1870 1045 2078 1018 0382 0001 (PLN) <CopyButton text='96187010452078101803820001'
                                                           cb={reactionToCopy}/><br/>
        69 1870 1045 2078 1018 0382 0002 (EUR) <CopyButton text='69187010452078101803820002'
                                                           cb={reactionToCopy}/><br/>
      </p>

      <h5>{t('telephone')}/e-mail/{t('homepage')}</h5>
      <p>
        tel.: <a href={'tel:+48600749237'}>(+48) 600-749-237</a> <CopyButton text='+48600749237'
                                                                             cb={reactionToCopy}/>
      </p>
      <p>
        {displayEmailAddress()}
      </p>
      <p>
        <a href="https://tomasz.gwozdz.info">https://tomasz.gwozdz.info</a>
      </p>

      <div className="mapIcon d-none d-md-block">
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" fill="currentColor" className="bi bi-map"
             viewBox="0 0 16 16" opacity="0.1" transform="rotate(10 50 100)">
          <clipPath id="cut-off-bottom">
            <rect x="0" y="0" width="16" height="16"/>
          </clipPath>
          <path clipPath="url(#cut-off-bottom)" fillRule="inherit"
                d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
        </svg>
      </div>

      <ToastsShowcase text='Skopiowano do schowka' show={showNotification}/>
    </Container>
  );

}
