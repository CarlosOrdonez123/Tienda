import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Direccion.css';
import { Button } from 'antd';




class DireccionPago extends React.Component {

  render() {
    return (
          <div className="direccion">
              <h3 id="titulo-direccion"> Dirección del envío</h3>
              <div className="pago-form-todo">
                  <form>
                    <ul className="flex_ul">
                      <li>
                        <label for="first-name">Nombre/Quien recibe:</label>
                        <input type="text" id="first-name" placeholder="Nombre" required/>
                      </li>
                      <li>
                        <label for="last-name">País</label>
                        <input type="text" id="last-name" placeholder="País" required/>
                      </li>
                      <li>
                        <label for="estado">Estado</label>
                        <input type="text" id="estado" placeholder="Estado" required/>
                      </li>
                      <li>
                        <label for="estado">Municipio</label>
                        <input type="text" id="Municipio" placeholder="Municipio" required/>
                      </li>
                      <li>
                        <label for="numero">Calle</label>
                        <input type="number" id="calle" placeholder="Calle" required/>
                      </li>
                      <li>
                        <label for="numero">Número exterior</label>
                        <input type="number" id="no.ex" placeholder="Ext." required/>
                      </li>
                      <li>
                        <label for="numero">Número interior</label>
                        <input type="number" id="no.int" placeholder="Int." required/>
                      </li>
                      <li>
                        <label for="codigo">Colonia</label>
                        <input type="number" id="colonia" placeholder="Colonia" required/>
                      </li>
                      <li>
                        <label for="codigo">Código Postal</label>
                        <input type="number" id="codigo postal" placeholder="C.P" required/>
                      </li>

                    </ul>
                    <button className="guardar">Guardar</button>

                  </form>
              </div>
              <br/>
              <hr className="hr-carrito"/>
          </div>


    );
  }
}

export default DireccionPago;
