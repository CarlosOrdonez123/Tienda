import React, { Component } from 'react';



class PerfilDatos extends React.Component {

  render() {



    return (


      <div className="form-enviar">


<div>
      <form>
        <label for="fname">Nombre del titular de la tarjeta</label>
        <input type="text" />
        <label >Número de tarjeta</label>
        <input type="number"/>
        <label >Fecha de expiración</label>
                <input type="number"/>

                <label >Número de seguridad</label>
                              <input type="number"/>

           <button type="button">Pagar</button>



      </form>
</div>


      </div>

    );
  }
}

export default PerfilDatos;
