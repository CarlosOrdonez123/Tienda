import React from 'react';
import './Perfil.css';
import { Card } from 'antd';



export const PedidosDisplay = ({}) => {
    return (
        <div className="pedidos">
            <Card title="Id. 678" style={{ width: "100%" }}>
               <div className="boxi" style={{display:"flex"}}>
                    <span id="photo_product">
                        <img src="https://i2.linio.com/p/5b531d0a1f20536fbc42a84e93cf7fd9-product.jpg" alt=""/>
                    </span>
                   <span id="name_product">
                       <p>Producto</p>
                        <h4>Mueblecito</h4>
                   </span>
                   <span id="cant_product">
                       <p>Cantidad</p>
                       <p>2</p>
                   </span>
                   <span id="price_product">
                        <p>Precio</p>
                        <p>$500.00</p>
                   </span>
                   <span id="date_product">
                       <p>Fecha de compra</p>
                       <p>3 Dic 2017</p>
                   </span>
               </div>
            </Card>
        </div>
    );
}
