import React from 'react';
import "./about.css";
import fotopersonal from "../assets/SeleneAstronauta.webp";

function About() {
    return (
        <div className="about-container">
            <div className="about-card">
            <h1>Astronauta e Ingeniera Espacial</h1>
                <img src={fotopersonal} alt="Selene Astronauta" className="about-img" />
                <h1>Selene Terrazas</h1>
                <p className="info-card">
                    Soy una astronauta dedicada y apasionada por la exploración del cosmos. Con una formación sólida en desarrollo y tecnología, me impulsa la curiosidad y el deseo de llevar el conocimiento más allá de nuestro planeta. Mi experiencia en misiones de exploración lunar me ha enseñado a adaptarme a cualquier entorno, trabajar en equipo bajo presión, y mantener una mentalidad enfocada en la innovación. A cada paso, mi objetivo es desvelar los secretos del universo, inspirar a futuras generaciones y contribuir a expandir las fronteras de la humanidad en el espacio.
                </p>
                <h4 className="info-card"> Contacto: selene.terrazas.g@gmail.com</h4>
            </div>
        </div>
    );
}

export default About;
