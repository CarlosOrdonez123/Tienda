import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';

export const NosDisplay = () => {

    return (
        <div id="nosotros" className="nos">
            <div className="ns_texto">
                    <div className="ns_img">
                        <img src="https://files.ketodietapp.com/Blog/files/2016/09/BulletproofCoffee_Review8.jpg" alt=""/>
                    </div>
                    <div className="ns_txt tres_flex">
                        <div >
                        <div style={{margin:"20px 0"}}>
                            <Parallax
                                className="custom-class"
                                offsetYMax={100}
                                offsetYMin={-20}
                                slowerScrollRate
                                tag="figure"
                            >
                            <p className="text_parallax">
                                Expertos en nutrición y en la generación de sistemas de cambio en las personas</p>
                                <p className="floti">Saber más...</p>
                            </Parallax>
                        </div>
                        <div className=" steps">
                            <div className="box_flex">
                                <Parallax
                                className="custom-class"
                                offsetYMax={-50}
                                offsetYMin={57}
                                slowerScrollRate
                                tag="figure"
                            >
                                <img src="http://www.ketoishkitchen.com/wp-content/uploads/2017/04/Bulletproof-frap-Pinterest-682x1024.jpg" alt=""/>
                                <p className="txt_parallax">Promotores de la salud</p>
                                    <p className="float">Saber más...</p>
                                </Parallax>
                            </div>
                            <div className="box_flex">
                                <Parallax
                                    className="custom-class"
                                    offsetYMax={-50}
                                    offsetYMin={54}
                                    slowerScrollRate
                                    tag="figure"
                                >
                                    <img src="http://www.ketoishkitchen.com/wp-content/uploads/2017/04/Bulletproof-frap-Pinterest-682x1024.jpg" alt=""/>
                                    <p className="txt_parallax">Promotores de la producción orgánica y sostenible</p>
                                    <p className="float">Saber más...</p>
                                </Parallax>
                            </div>
                        </div>
                    </div></div>
              </div>
        </div>
    );
}