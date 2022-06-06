import React from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

export const PubliDisplay = () => {

    return (
            <div className="box_publi">
                    <div className="publi ">
                        <div>
                            <h3>Bee - Co</h3>
                            <p><FontAwesome name="tag"/>  Miel de Rancho</p>
                            <Link to="/bee-co" >
                                <button className="btn_mas">Conocer más...</button>
                            </Link>
                        </div>
                     </div>
            </div>
    );
}
