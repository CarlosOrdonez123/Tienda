import React from 'react';
import './Home.css';
import { Parallax } from 'react-scroll-parallax';
import logo_azul from '../../assets/logo_prana_azul.png';
import log_g from '../../assets/logo_prana_rgb-04.png';
import huevos from '../../assets/DSC_9903.jpg';
import {Link} from 'react-router-dom';

export const HistoryDisplay = () => {

    return (
        <div id="history" className="history">
            <div className="parallax" style={{width:"80%", margin: "50px auto"}}>
                {/*<div className="" style={{display:"flex", marginBottom:"50px", marginTop:"50px"}}>*/}
                    {/*<Parallax*/}
                        {/*className="custom-class"*/}
                        {/*offsetXMax={40}*/}
                        {/*offsetxMin={-20}*/}
                        {/*slowerScrollRate*/}
                        {/*tag="figure"*/}
                    {/*>*/}
                        {/*<img  className="logo_history" src={logo_azul} alt=""/>*/}
                    {/*</Parallax>*/}
                    {/*<Parallax*/}
                        {/*className="custom-class"*/}
                        {/*offsetXMax={-40}*/}
                        {/*offsetxMin={70}*/}
                        {/*slowerScrollRate*/}
                        {/*tag="figure"*/}
                    {/*>*/}
                        {/*<div className="card_history">*/}
                            {/*<h3>Prana</h3>*/}
                            {/*<br/>*/}
                            {/*<br/>*/}
                            {/*<p>Somos expertos en nutrición y en la generación de sistemas de cambio*/}
                                {/*en las personas*/}


                            {/*</p>*/}
                        {/*</div>*/}
                    {/*</Parallax>*/}
                {/*</div>*/}
                <div className="" style={{display:"flex", marginTop:"50px"}}>

                        <img style={{width:"70%", height:"280px", marginLeft:"15%", marginBotton:"100px"}} src={log_g} alt=""/>
                </div>
            <div className="" style={{display:"flex"}}>
                <Parallax
                    className="custom-class"
                    offsetXMax={40}
                    offsetXMin={-20}
                    slowerScrollRate
                    tag="figure"
                >
                    <img  className="coffe_img" src='https://biohacker.co.nz/wp-content/uploads/2016/08/SM-12oz-Coffee-Original-Ground.jpg' alt=""/>
                </Parallax>
                <Parallax
                    className="custom-class"
                    offsetXMax={-70}
                    offsetxMin={40}
                    slowerScrollRate
                    tag="figure"
                >


                    <div className="card_history">
                        <h3>Prana</h3>
                        <br/>
                        <br/>
                        <p>Expertos en nutrición y en la generación de sistemas de cambio en las personas
                        </p>
                        <br/>
                        <span className="floti">Saber más...</span>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="card_history">
                        <p>
                            Somos promotores de la salud
                        </p>
                        <br/>
                        <span className="floti">Saber más...</span>
                    </div>

                    <div className="card_history">

                        <p>
                            Somos promotores de la producción orgánica y sostenible
                        </p>
                        <br/>
                        <span className="floti">Saber más...</span>
                    </div>
                </Parallax>


            </div>

        </div>
            <div className="history_movil">
                <div className="log_box" >
                    <img src={log_g} alt=""/>
                </div>
                <div className="coffe_movil">
                    <img  src='https://biohacker.co.nz/wp-content/uploads/2016/08/SM-12oz-Coffee-Original-Ground.jpg' alt=""/>
                </div>
                <div className="" style={{ marginTop:"50px"}}>
                    {/*<Parallax*/}
                    {/*className="custom-class"*/}
                    {/*offsetYMax={-40}*/}
                    {/*offsetYMin={100}*/}
                    {/*slowerScrollRate*/}
                    {/*tag="figure"*/}
                    {/*>*/}
                        <div className="card_movil">
                            <h3>Prana</h3>
                            <br/>
                            <br/>
                            <p>Expertos en nutrición y en la generación de sistemas de cambio en las personas
                            </p>
                            <br/>
                            <span className="floti">Saber más...</span>
                        </div>

                        <div className="card_movil">
                            <p>
                                Somos promotores de la salud
                            </p>
                            <br/>
                            <span className="floti">Saber más...</span>
                        </div>

                        <div className="card_movil">

                            <p>
                                Somos promotores de la producción orgánica y sostenible
                            </p>
                            <br/>
                            <span className="floti">Saber más...</span>
                        </div>
                    {/*</Parallax>*/}
                </div>
            </div>
        </div>
    );
}
