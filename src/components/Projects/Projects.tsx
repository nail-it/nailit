import Container from "react-bootstrap/Container";
import React from "react";
import {useTranslation} from "react-i18next";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Projects.css';
import Badge from "../Badge/Badge";

import '../../Enums/Progress'
import {Progress} from "../../Enums/Progress";

export default function Projects() {

  const handleDragStart = (e: any) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    500: { items: 2 },
    900: { items: 3 },
    1524: { items: 3 },
  };

  const itemsPodyplomoweStudia = [
    <Badge progress={Progress.Done}></Badge>,
    <img className="project" alt="img1" src="/projects/podyplomowestudia/1.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="project" alt="img2" src="/projects/podyplomowestudia/2.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="project" alt="img3" src="/projects/podyplomowestudia/3.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="project" alt="img4" src="/projects/podyplomowestudia/4.png" onDragStart={handleDragStart} role="presentation" />,
  ];

  const itemsUnikadra = [
    <img className="project" alt="img1" src="/projects/unikadra/1.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="project" alt="img2" src="/projects/unikadra/2.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="project" alt="img3" src="/projects/unikadra/3.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="project" alt="img4" src="/projects/unikadra/4.png" onDragStart={handleDragStart} role="presentation" />,
    <Badge progress={Progress.InProgress}></Badge>,
  ];

  const itemsSportMed = [
    <Badge progress={Progress.Done}></Badge>,
    <img className="project" alt="img1" src="/projects/sportmed/1.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="project" alt="img2" src="/projects/sportmed/2.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="project" alt="img3" src="/projects/sportmed/3.png" onDragStart={handleDragStart} role="presentation" />,
  ];

  const itemsKucharski = [
    <Badge progress={Progress.Done}></Badge>,
    <img className="project" alt="img1" src="/projects/kucharski/1.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="project" alt="img2" src="/projects/kucharski/2.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="project" alt="img3" src="/projects/kucharski/3.png" onDragStart={handleDragStart} role="presentation" />,
  ];

  const itemsEvention = [
    <Badge progress={Progress.Done}></Badge>,
    <img className="project" alt="img1" src="/projects/evention/1.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="project" alt="img2" src="/projects/evention/2.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="project" alt="img3" src="/projects/evention/3.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="project" alt="img4" src="/projects/evention/4.png" onDragStart={handleDragStart} role="presentation" />,
    <img className="project" alt="img5" src="/projects/evention/5.png" onDragStart={handleDragStart} role="presentation" />,
  ];

  const [t] = useTranslation('common');

  return (<>
    <Container className="p-3 p-sm-5 mb-4 bg-light rounded-4 sectionItem" id="projects">
      <h2 className="pb-3">{t('projects')}</h2>

      <h5>Unikadra</h5>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        controlsStrategy="alternate"
        items={itemsUnikadra}
        infinite
        disableButtonsControls
      />

      <div className="project">
        <h5>Podyplomowestudia.eu</h5>
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          controlsStrategy="alternate"
          items={itemsPodyplomoweStudia}
          infinite
          disableButtonsControls
        />
      </div>

      <h5>Evention</h5>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        controlsStrategy="alternate"
        items={itemsEvention}
        infinite
        disableButtonsControls
      />

      <h5>Sport-med</h5>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        controlsStrategy="alternate"
        items={itemsSportMed}
        infinite
        disableButtonsControls
      />

      <h5>Radca Prawny Rafał Kucharski</h5>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        controlsStrategy="alternate"
        items={itemsKucharski}
        infinite
        disableButtonsControls
      />

    </Container>
  </>);

};
