import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import Tables from './Tables'
import Totalform from './Totalform'
import './Tables.css';


class TotalForm extends React.Component {

  render() {
    return (
      <div>
          <Tables/>


        <Totalform/>
                  <div className="botones-home-carrito">

                      <NavLink to="/direccion"> <button id="check">COMPRAR</button> </NavLink>
                        </div>

          </div>


    );
  }
}

export default TotalForm;
