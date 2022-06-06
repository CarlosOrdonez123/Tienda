import React from 'react';
import './Home.css';
import img from '../../assets/img.png';
import circle from '../../assets/logo_prana_verde.png';

export const AboutDisplay = () => {

    return (
        <div id="about">
            <div className="about">
                <h2 className="titulo bot">Nosotros</h2>
                <hr className="line_blue right"/>
                <br/>
                <p className="texto bot">"DEJA QUE EL ALIMENTO <br/> SEA TU ÚNICA MEDICINA"
                </p>
                <p className="cita bot">- Hipócrates -</p>
                <br/>
                <div className="flexi">
                    <div className="box_about left">
                        <img src={circle} alt=""/>
                        <h3>MISIÓN</h3>
                        <p>Democratizar la salud, por medio de los alimentos saludables</p>
                    </div>
                    <div className="box_about top">
                        <img src={circle} alt=""/>
                        <h3>VISIÓN</h3>
                        <p>Ser el amazon de los alimentos saludables</p>
                    </div>
                    <div className="box_about right">
                        <img src={circle} alt=""/>
                        <h3>VALORES</h3>
                        <p>Compromiso con la salud de nuestros clientes a traves de productos de calidad</p>
                    </div>

                </div>
            </div>
        </div>
    );
}