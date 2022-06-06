import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';
import img from '../../assets/logo_prana_rgb-06.png';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer ">
                <div className="box_footer">
                    <div>
                        <h4>Contacto</h4>
                        <hr className="line_green"/>
                        <span><FontAwesome name="phone"/>7757609276</span>
                        <br/>
                        <span><FontAwesome name="envelope"/>ventas@wholeprana.com</span>
                    </div>
                    <div>
                        <h4>Horario de atención</h4>
                        <hr className="line_green"/>
                        <span> <FontAwesome name="calendar"/>Lunes a sabádo</span>
                        <br/>
                        <span><FontAwesome name="clock-o"/>9:00 am a 7:00 pm </span>
                    </div>
                    <div>
                        <h4>Información</h4>
                        <hr className="line_green"/>
                        <Link to="/preguntas">
                        <span>Preguntas frecuentes</span>
                        </Link>
                        <br/>
                        <Link to="/politicas-de-privacidad">
                            <span>Politicas de Privacidad</span>
                        </Link>
                    </div>
                    <div>
                        <h4>Conecta con nosotros</h4>
                        <hr className="line_green"/>
                        <div className="redes">
                            <Link to="/" target="blank">
                                <FontAwesome name="facebook-square" />
                            </Link>
                            <Link to="/" target="blank">
                                <FontAwesome name="twitter-square"/>
                            </Link>
                            <Link to="/" target="blank">
                                <FontAwesome name="instagram"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <br/>
                <div style={{width:"80%", margin:"0 auto", borderTop:"1px solid #f8f8f7", paddingTop:"14px"}}>
                    <p>Copyright © 2018 Prana</p>
                </div>
            </div>
        );
    }
}

export default Footer;