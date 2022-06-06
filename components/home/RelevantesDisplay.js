import React from 'react';
import './Home.css';
import OwlCarousel from 'react-owl-carousel';

export const RelevantesDisplay = () => {
    const options = {
        autoplay: true,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    };
    return (

        <div className="relevantes">
            <h2>Novedades</h2>
            <div className="rel_box">
                <OwlCarousel
                    className="owl-theme"
                    loop margin={10} items={1} nav 
                >
                    <div class="item" >
                        <div className="box_owl">
                            <img src="https://hips.hearstapps.com/es.h-cdn.co/hares/images/belleza/tendencias-belleza/es-el-aceite-mct-el-nuevo-aceite-de-coco/2024021-1-esl-ES/es-el-aceite-mct-el-nuevo-aceite-de-coco.jpg?resize=980:*" alt=""/>
                        </div>
                        <div className="box_owl pad">
                            <h4>Suplementos</h4>
                            <h3>Nombre del Producto</h3>
                            <br/>
                            <p id="desc">Descripción del producto Descripción del producto Descripción del producto Descripción del producto
                                Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto
                            </p>
                            <br/>
                            <button className="btn_explore">Agregar</button>
                        </div>
                    
                    
                    </div>
                    <div class="item">
                        <div className="box_owl">
                            <img src="https://hips.hearstapps.com/es.h-cdn.co/hares/images/belleza/tendencias-belleza/es-el-aceite-mct-el-nuevo-aceite-de-coco/2024021-1-esl-ES/es-el-aceite-mct-el-nuevo-aceite-de-coco.jpg?resize=980:*" alt=""/>
                        </div>
                        <div className="box_owl pad">
                            <h4>Suplementos</h4>
                            <h3>Nombre del Producto</h3>
                            <br/>
                            <p id="desc">Descripción del producto Descripción del producto Descripción del producto Descripción del producto
                                Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto
                            </p>
                            <br/>
                            <button className="btn_explore">Agregar</button>
                        </div>
                    </div>
                    <div class="item">
                        <div className="box_owl">
                            <img src="https://hips.hearstapps.com/es.h-cdn.co/hares/images/belleza/tendencias-belleza/es-el-aceite-mct-el-nuevo-aceite-de-coco/2024021-1-esl-ES/es-el-aceite-mct-el-nuevo-aceite-de-coco.jpg?resize=980:*" alt=""/>
                        </div>
                        <div className="box_owl pad">
                            <h4>Suplementos</h4>
                            <h3>Nombre del Producto</h3>
                            <br/>
                            <p id="desc">Descripción del producto Descripción del producto Descripción del producto Descripción del producto
                                Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto
                            </p>
                            <br/>
                            <button className="btn_explore">Agregar</button>
                        </div>
                    </div>
                    <div class="item">
                        <div className="box_owl">
                            <img src="https://hips.hearstapps.com/es.h-cdn.co/hares/images/belleza/tendencias-belleza/es-el-aceite-mct-el-nuevo-aceite-de-coco/2024021-1-esl-ES/es-el-aceite-mct-el-nuevo-aceite-de-coco.jpg?resize=980:*" alt=""/>
                        </div>
                        <div className="box_owl pad">
                            <h4>Suplementos</h4>
                            <h3>Nombre del Producto</h3>
                            <br/>
                            <p id="desc">Descripción del producto Descripción del producto Descripción del producto Descripción del producto
                                Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto
                            </p>
                            <br/>
                            <button className="btn_explore">Agregar</button>
                        </div>
                    </div>
                    <div class="item">
                        <div className="box_owl">
                            <img src="https://hips.hearstapps.com/es.h-cdn.co/hares/images/belleza/tendencias-belleza/es-el-aceite-mct-el-nuevo-aceite-de-coco/2024021-1-esl-ES/es-el-aceite-mct-el-nuevo-aceite-de-coco.jpg?resize=980:*" alt=""/>
                        </div>
                        <div className="box_owl pad">
                            <h4>Suplementos</h4>
                            <h3>Nombre del Producto</h3>
                            <br/>
                            <p id="desc">Descripción del producto Descripción del producto Descripción del producto Descripción del producto
                                Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto
                            </p>
                            <br/>
                            <button className="btn_explore">Agregar</button>
                        </div>
                    </div>
                    <div class="item">

                        <div className="box_owl">
                            <img src="https://hips.hearstapps.com/es.h-cdn.co/hares/images/belleza/tendencias-belleza/es-el-aceite-mct-el-nuevo-aceite-de-coco/2024021-1-esl-ES/es-el-aceite-mct-el-nuevo-aceite-de-coco.jpg?resize=980:*" alt=""/>
                        </div>
                        <div className="box_owl pad">
                            <h4>Suplementos</h4>
                            <h3>Nombre del Producto</h3>
                            <br/>
                            <p id="desc">Descripción del producto Descripción del producto Descripción del producto Descripción del producto
                                Descripción del producto Descripción del producto Descripción del producto Descripción del producto Descripción del producto
                            </p>
                            <br/>
                            <button className="btn_explore">Agregar</button>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
        </div>
    );
}