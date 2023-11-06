import Container from "react-bootstrap/Container";
import React from "react";
import {useTranslation} from "react-i18next";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './Clients.css';

export default function Clients() {
  const [t] = useTranslation('common');

  const handleDragStart = (e: any) => e.preventDefault();

  const items = [
    <div className="clients" onDragStart={handleDragStart} >
      <span className="position-absolute top-50 start-50 translate-middle">Bonial International GmbH</span>
    </div>,
    <div className="clients" onDragStart={handleDragStart} >
      <span className="position-absolute top-50 start-50 translate-middle">Adon Production AG</span>
    </div>,
    <div className="clients" onDragStart={handleDragStart} >
      <span className="position-absolute top-50 start-50 translate-middle">Core Logic Sp.&nbsp;z&nbsp;o.o.</span>
    </div>,
    <div className="clients" onDragStart={handleDragStart} >
      <span className="position-absolute top-50 start-50 translate-middle">Paradowski Medical Group</span>
    </div>,
  ];

  const responsive = {
    680: {items: 1},
    1000: {items: 2},
    1600: {items: 3},
  };

  return <Container className="p-3 p-sm-5 mb-4 bg-light rounded-4 sectionItem" id="clients">

    <h2 className="pb-3">{t('clients')}</h2>

    <AliceCarousel
      mouseTracking
      autoPlay
      disableDotsControls
      disableButtonsControls
      infinite
      items={items}
      responsive={responsive}
      animationDuration={3000}
    />

  </Container>;
}
