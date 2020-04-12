import React, { Component } from 'react';
import { render } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt';
import fabuilding from '@fortawesome/fontawesome-free-solid/faBuilding';
import './aboutpanel.css'
import AboutPanelForm from './AboutPanelFrom'





    const AboutPanel = (props) => (

        <div className="AboutPanel">
                <p className="intro">Intro</p>
                <div id= "workIcon">
                    <FontAwesomeIcon
                    icon={fabuilding}
                    size= "2x"
                    id="briefcase"/> Works at {props.work}
                </div>
                <div id= "lives">
                    <FontAwesomeIcon
                    icon={faHome}
                    size= "2x"
                    id="whereUserLives"/> Lives in {props.lives}
                </div>
                <div id= "from">
                    <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size= "2x"
                    id="whereUserIsFrom"/> From {props.from}
                </div>
                <button id="about">Edit Details</button>

            </div>

        );


export default AboutPanel;
