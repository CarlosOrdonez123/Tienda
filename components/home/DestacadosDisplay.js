import React from 'react';
import './Home.css';

export const DestacadosDisplay = () => {

    return (
        <div className="destacados">
            <h2 className="titulo">Destacados</h2>
            <div className="cat">
                <div className="card">
                    <div className="img_card">
                        <img src="https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                    </div>
                    <span>Huevos</span>
                    <p>Bachoco órganico</p>
                </div>
                <div className="card">
                    <div className="img_card">
                        <img src="https://images.pexels.com/photos/316891/pexels-photo-316891.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                    </div>
                    <span>Bebidas</span>
                    <p>Consumibles</p>
                </div>
                <div className="card">
                    <div className="img_card">
                        <img src="https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                    </div>
                    <span>Frutas y verduras</span>
                    <p>100% órganicos</p>
                </div>
                <div className="card">
                    <div className="img_card">
                        <img src="https://images.pexels.com/photos/208518/pexels-photo-208518.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                    </div>
                    <span>Suplementos</span>
                    <p>Suplementos alimenticios</p>
                </div>
                <div className="card">
                    <div className="img_card">
                        <img src="https://images.pexels.com/photos/414115/pexels-photo-414115.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                    </div>
                    <span>Miel</span>
                    <p>Miel órganica</p>
                </div>
                <div className="card">
                    <div className="img_card">
                        <img src="https://images.pexels.com/photos/256318/pexels-photo-256318.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb" alt=""/>
                    </div>
                    <span>Otros</span>
                    <p>y más...</p>
                </div>

            </div>
        </div>
    );
}
