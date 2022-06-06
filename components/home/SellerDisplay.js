import React from 'react';
import './Home.css';

export const SellerDisplay = () => {

    return (
        <div className="seller">
            <div className="clip">
                <div className="flex">
                    <div className="box_flex">
                        <img src="http://sin-min.com/wp-content/uploads/2016/05/icon-peace.png" alt=""/>
                    </div>
                    <div className="box_flex">
                        <h3>STAY IN TOUCH</h3>
                        <p>
                            Sign up to get updates and
                            <br/>
                            exclusive deals on our products.</p>
                        <input type="email" className="email" name="Email" required  placeholder="Ingresa tu email"/>
                        <br/>
                        <button>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
