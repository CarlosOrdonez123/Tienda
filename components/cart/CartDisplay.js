import React from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';

const organic = "http://www.skepticink.com/avant-garde/files/2015/09/organic.jpg";

export const CartDisplay = ({_id, img, name, desc, pictures, price, text, info}) => {
    if(!pictures) img = organic;
    else img = pictures[0];

    return (
        <div className="cart ">
            <Link to={`/catalogo/${_id}`} style={{color:"inherit"}}>
            <div className="cart_img ">
                <img  src={img} alt=""/>
            </div>
            <p className="name_product">{name}</p>
                <div className="apear">
                    <p className="pes">{info}</p>
                    <p className="pes">$ {price} mxn</p>
                </div>
            </Link>
        </div>
    );
}