import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';

export const NosotrosDisplay = () => {

    return (
        <div id="nosotros" className="nosotros">
            <Parallax
                className="custom-class"
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                tag="figure"
            >
            <div className="nos_texto">
                <h2 className="desaper">Human inovation </h2>
                <h2 className="desaper">by food</h2>
                <h2 className="apere">Human inovation by food</h2>
                <p className="texto">
                    Como promotores de la producción orgánica, utilizamos todos los recuros
                    dandole prioridad a la fertilidad del suelo y la actividad biológica, al mismo
                    tiempo que minimizamos el uso de recursos no renovables, además de no utilizar festilizantes
                    para proteger no solo el medio ambiente, sino tambien la salud humana.
                </p>
                <p className="texto">¿Listo para una nueva forma de vida?</p>
                <br/>
                <Link to="/catalogo">
                    <button className="btn_explore">Explorar</button>
                </Link>
            </div>
            </Parallax>
        </div>
    );
}