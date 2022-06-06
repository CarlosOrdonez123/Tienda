import React, { Component } from 'react';
import { Button } from 'antd';
import {Link, NavLink} from 'react-router-dom';
import './Perfil.css';



class Pasarela extends React.Component {

  render() {
    return (




        <div className="form-personal-data">



              <form>
                <label for="fname">Nombre Completo</label> <br/>
                <input type="text" value="Montserrat Plata Torres" /> <br/>
                <label for="fname">Email</label><br/>
                <input type="text" value="miel@567776.com" /><br/>
                <label for="fname">Contraseña</label><br/>
                <input type="password" value="miel@567776.com" /><br/>



                <label >Número de tarjeta</label> <br/>
                <input type="number" value="123455"/>



<br/>
 <NavLink to="/editarperfil"> Editar</NavLink>

              </form>


        </div>


    );
  }
}

export default Pasarela;
