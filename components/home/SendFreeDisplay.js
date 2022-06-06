import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Home.css';
import { Parallax } from 'react-scroll-parallax';

export const SendFreeDisplay = () => {

    return (
        <div style={{backgroundColor:"white", paddingBottom:"100px"}}>
        <div className="revista">
            <section className="txt_revista">

                    <h2>¿Listo para empezar? </h2>
                    <p className="txto">Comprar con nosotros es muy sencillo: Agrega a la canasta los productos que necesitas,
                        crea un perfil de usuario, agrega tus datos de envío e ingresa tus datos de pago.
                        En PRANA, el envío de tus productos esta garantizado, al completar tu compra,
                        la fecha de envío y la fecha estimada de entrega aparecerán en tu perfil.
                        <br/>
                        <br/>
                        Si necesitas ayuda, no dudes en contactarnos, nuestro equipo resolverá
                        tus dudas o te ayudará a completar el proceso.
                    </p>
        </section>
                <div className="process">
                    <Parallax
                    className="custom-class"
                    offsetYMax={20}
                    offsetYMin={-20}
                    slowerScrollRate
                    tag="figure"
                >
                    <div className="uno">
                        <div className="cub">
                        <FontAwesome name="calendar" size="2x" />
                        <br/>
                        <p>Envíos nacionales</p>
                        <p>De 3 a 5 días hábiles</p></div>
                    </div>
                    <div className="dos">
                        <div className="cub">
                        <FontAwesome name="credit-card" size="2x" />
                        <br/>
                        <p>Costos de envío</p>
                        <p>Calculalo con tu
                            <br/>
                            código postal</p>
                        </div>
                    </div>
                    <div className="tres">
                        <div className="cub">
                        <FontAwesome name="paper-plane" size="2x" />
                        <br/>
                        <p>Envío gratuito</p>
                        <p>Más de $2,000.00</p>
                        </div>
                    </div>
                    </Parallax>
                </div>

        </div></div>
    );
}
