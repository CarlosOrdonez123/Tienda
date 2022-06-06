import React from 'react';
import './Bee.css';
import { Parallax } from 'react-scroll-parallax';
import miel from '../../assets/products/miel_producto.jpg';
import miel2 from '../../assets/products/DSC_9192.jpg';
import miel3 from '../../assets/products/DSC_9205.jpg';


export const Bee = () => {


    return (

        <div style={{padding:"0 0 100px 0", border:"1px solid #f7f7f7"}}>
            <div className="miel">
                <div className="cover">
                    <div >
                        <h3>Bee - Co</h3>
                        <p> Miel de Rancho</p>
                    </div>
                </div>
            </div>
            <div className="miel_present">
                <div className="" style={{display:"flex", marginBottom:"150px", marginTop:"50px", textAlign:"center"}}>
                    <Parallax
                        className="custom-class"
                        offsetYMax={60}
                        offsetYMin={-20}
                        slowerScrollRate
                        tag="figure">
                        <img  className="miel_img" src={miel} alt=""/>
                    </Parallax>
                    <Parallax
                        className="custom-class"
                        offsetYMax={-40}
                        offsetYMin={70}
                        slowerScrollRate
                        tag="figure"
                    >
                        <div className="card_miel">
                            <h3>Prana</h3>
                            <p>Somos expertos en nutrición y en la generación de sistemas de cambio
                                <br/>
                                <br/>
                                Myriad is a diverse selection of upholstered modular furniture,
                                completely flexible and reconfigurable. The range is made up of
                                eleven linkable seating units, three privacy screens, side tables
                                and arms that accommodate power.
                                <br/>
                            </p>
                        </div>
                    </Parallax>
                </div>
            <div className="" style={{display:"flex", marginBottom:"150px", marginTop:"150px", textAlign:"center"}}>
                <Parallax
                    className="custom-class"
                    offsetYMax={60}
                    offsetYMin={-20}
                    slowerScrollRate
                    tag="figure"
                >
                    <img  className="miel_img" src={miel3} alt=""/>
                </Parallax>
                <Parallax
                    className="custom-class"
                    offsetYMax={-40}
                    offsetYMin={70}
                    slowerScrollRate
                    tag="figure"
                >
                    <div className="card_miel">
                        <h3>Prana</h3>
                        <p>Somos expertos en nutrición y en la generación de sistemas de cambio
                            <br/>
                            <br/>
                            Myriad is a diverse selection of upholstered modular furniture,
                            completely flexible and reconfigurable. The range is made up of
                            eleven linkable seating units, three privacy screens, side tables
                            and arms that accommodate power.
                            <br/>
                        </p>
                    </div>
                </Parallax>
            </div>
                <div className="" style={{display:"flex", marginBottom:"150px", marginTop:"150px", textAlign:"center"}}>
                    <Parallax
                        className="custom-class"
                        offsetYMax={60}
                        offsetYMin={-20}
                        slowerScrollRate
                        tag="figure"
                    >
                        <img  className="miel_img" src={miel2} alt=""/>
                    </Parallax>
                    <Parallax
                        className="custom-class"
                        offsetYMax={-40}
                        offsetYMin={70}
                        slowerScrollRate
                        tag="figure"
                    >
                        <div className="card_miel">
                            <h3>Prana</h3>
                            <p>Somos expertos en nutrición y en la generación de sistemas de cambio
                                <br/>
                                <br/>
                                Myriad is a diverse selection of upholstered modular furniture,
                                completely flexible and reconfigurable. The range is made up of
                                eleven linkable seating units, three privacy screens, side tables
                                and arms that accommodate power.
                                <br/>
                            </p>
                        </div>
                    </Parallax>
                </div>


                {/*<div className="" style={{display:"flex", marginBottom:"50px", marginTop:"50px"}}>*/}
                    {/*<Parallax*/}
                        {/*className="custom-class"*/}
                        {/*offsetXMax={-20}*/}
                        {/*offsetxMin={40}*/}
                        {/*slowerScrollRate*/}
                        {/*tag="figure"*/}
                    {/*>*/}
                        {/*<div className="box_miel">*/}
                            {/*<img  className="miel_img" src={miel} alt=""/></div>*/}
                    {/*</Parallax>*/}
                    {/*<Parallax*/}
                        {/*className="custom-class"*/}
                        {/*offsetXMax={40}*/}
                        {/*offsetxMin={-20}*/}
                        {/*slowerScrollRate*/}
                        {/*tag="figure"*/}
                    {/*>*/}
                        {/*<div className="box_miel">*/}
                            {/*<div className="card_miel">*/}
                                {/*<h3>Prana</h3>*/}
                                {/*<p>Somos expertos en nutrición y en la generación de sistemas de cambio*/}
                                    {/*<br/>*/}
                                    {/*<br/>*/}
                                    {/*Myriad is a diverse selection of upholstered modular furniture,*/}
                                    {/*completely flexible and reconfigurable. The range is made up of*/}
                                    {/*eleven linkable seating units, three privacy screens, side tables*/}
                                    {/*and arms that accommodate power.*/}
                                    {/*<br/>*/}
                                {/*</p>*/}
                            {/*</div></div>*/}
                    {/*</Parallax>*/}
                {/*</div>*/}

        </div>
            <div style={{marginTop:"300px", textAlign:"center"}}>
                <button className="btn_explore">Comprar</button>
            </div>
        </div>
    );
}
