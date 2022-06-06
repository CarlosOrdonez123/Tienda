import React from 'react';
import logo from '../../assets/tienda_logo_blanco.png';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import './Home.css';
import video from '../../assets/2575565.mp4';
import { Parallax } from 'react-scroll-parallax';


export const SlideDisplay = () => {

    return (
        <div className="slide fondo">
                <div className="home_data">
                    <img className="bot" src={logo} alt=""/>
                    <h3 className="bot">WELLNES SYSTEM FOOD INNOVATION</h3>
                    <hr className="line_white right"/>
                    <p className="bot">PRODUCTOS INTELIGENTES PARA TU BIENESTAR</p>
                    <br/>
                    <a href="#history">
                    <FontAwesome  className="fa_home top" name="chevron-down" size="2x" />
                    </a>
                </div>
                <video id='bg-video' autoPlay="autoplay" loop muted >
                    <source src={video} type="video/mp4" />
                </video>
        </div>
);
}
