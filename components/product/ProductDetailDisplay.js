import React from 'react';
import './Product.css';
import FontAwesome from 'react-fontawesome';
//import Nav  from '../nav/NavDisplay';

const organic = "http://www.skepticink.com/avant-garde/files/2015/09/organic.jpg";


export const ProductDetailDisplay = ({img,name, desc, price,pictures, info, quantity, changeQuantity, addToCart}) => {
    if(!pictures) img = organic;
    else img = pictures[0];
    return (
        <div className="detalle">

            <div className="box_detail">
                <div className="detail">
                    <div className="img_product">
                        <div>
                            <ul className="galeria">
                                <li className="box_im"><a href="#img1"> <img   src={img} alt=""/></a></li>
                                <div className="ul_flex">
                                    <li className="box_img"><a href="#img2"><img src="http://static2.businessinsider.com/image/59af37c96eac40d82b8b77e5-1435/3z7a9805.jpg"/></a></li>
                                    <li className="box_img"><a href="#img3"><img src="http://wppullzone1.epicmatcha.netdna-cdn.com/wp-content/uploads/2016/04/bulletproof-coffee-vs-bombproof-matcha-2.jpg"/></a></li>
                                    <li className="box_img"><a href="#img4"><img src="https://drlauryn.com/wp-content/uploads/2016/04/Bulletproof-Coffee-lululemon-blog-header.jpeg"/></a></li>
                                </div>
                            </ul>

                            <div className="modal" id="img1">
                                <h3>{name}</h3>
                                <div className="imagen">
                                    <a href="#img4">&#60;</a>
                                    <a href="#img2"><img src={img}/></a>
                                    <a href="#img2">></a>
                                </div>
                                <a className="cerrar" href=""><FontAwesome name="times"/></a>
                            </div>

                            <div className="modal" id="img2">
                                <h3>{name}</h3>
                                <div className="imagen">
                                    <a href="#img1">&#60;</a>
                                    <a href="#img3"><img src="http://static2.businessinsider.com/image/59af37c96eac40d82b8b77e5-1435/3z7a9805.jpg"/></a>
                                    <a href="#img3">></a>
                                </div>
                                <a className="cerrar" href=""><FontAwesome name="times"/></a>
                            </div>

                            <div className="modal" id="img3">
                                <h3>{name}</h3>
                                <div className="imagen">
                                    <a href="#img2">&#60;</a>
                                    <a href="#img4"><img src="http://wppullzone1.epicmatcha.netdna-cdn.com/wp-content/uploads/2016/04/bulletproof-coffee-vs-bombproof-matcha-2.jpg"/></a>
                                    <a href="#img4">></a>
                                </div>
                                <a className="cerrar" href=""><FontAwesome name="times"/></a>
                            </div>

                            <div className="modal" id="img4">
                                <h3>{name}</h3>
                                <div className="imagen">
                                    <a href="#img3">&#60;</a>
                                    <a href="#img1"><img src="https://drlauryn.com/wp-content/uploads/2016/04/Bulletproof-Coffee-lululemon-blog-header.jpeg" /></a>
                                    <a href="#img1">></a>
                                </div>
                                <a className="cerrar" href=""><FontAwesome name="times"/></a>
                            </div>
                        </div>

                    </div>
                    <div className="descript_product">
                        <h3 className="descript_name">{name}</h3>

                        <p className="descript_etiq">{info}</p>
                        <br/>
                        <p className="descript_data">{desc}</p>
                       <div className="box_price">
                        <p className="descript_price">$ {price} MXN</p>
                           <hr className="linea_product"/>
                           <button onClick={changeQuantity} type="button" class="extras" data-id="" data-qty="0">−</button>
                           <input type="text" class="quanty" value={quantity|| 1} min="1" data-id="" aria-label="quantity" pattern="[0-9]*" name="quantity" id="" data-submit=""/>
                           <button onClick={()=>changeQuantity("+")} type="button" class="extras" data-id="" data-qty="11">+</button>
                       </div>
                        <button onClick={addToCart} className="btn_agregar">Agregar</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
