import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Home.css';
import { Parallax } from 'react-scroll-parallax';

export const SendDisplay = () => {

    return (
        <div className="revista">
            <Parallax
                className="custom-class"
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                tag="figure"
            >
                <div className="nos_texto padd">
                    <h2>¿Listo para empezar? </h2>
                    <p className="texto">Comprar con nosotros es muy sencillo: Agrega a la canasta los productos que necesitas,
                        crea un perfil de usuario, agrega tus datos de envío e ingresa tus datos de pago.
                        En PRANA, el envío de tus productos esta garantizado, al completar tu compra,
                        la fecha de envío y la fecha estimada de entrega aparecerán en tu perfil.
                        <br/>
                        <br/>
                        Si necesitas ayuda, no dudes en contactarnos, nuestro equipo resolverá
                        tus dudas o te ayudará a completar el proceso.

                    </p>

                </div>
            </Parallax>
            <br/>
            <br/>
            <Parallax
                className="custom-class"
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                tag="figure"
            >
            <div className="process">
                <div className="uno">
                    <FontAwesome name="calendar" size="2x" />
                    <br/>
                    <h3>Envíos nacionales</h3>
                    <p>De 3 a 5 días hábiles</p>
                </div>
                <div className="dos">
                    <FontAwesome name="credit-card" size="2x" />
                    <br/>
                    <h3>Costos de envío</h3>
                    <p>Calculalo con tu
                        <br/>
                    código postal</p>
                </div>
                <div className="tres">
                    <FontAwesome name="paper-plane" size="2x" />
                    <br/>
                    <h3>Envío gratuito</h3>
                    <p>Más de $2,000.00</p>
                </div>
            </div>
            </Parallax>
        </div>
    );
}
