import React, { Component } from 'react';
import '../Carrito.css';

class FormPago extends React.Component {
  render() {
    return (

      <div className="body-pago">

        <div>

  <div className="card-image">

        <img  src="http://blog.i-pay.co.za/wp-content/uploads/2015/01/instant-payment-solution.png"/>
        <img className="top" src="http://elmanana.com.mx/imgs/noticias/original/bc535087d645155_ee597558e83c18f7bf4cf6df870a430a" />
</div>

                           </div>


  <div className="payment-form">
         <form>
          <fieldset>
            <label for="card-name">Nombre del tarjetahabiente</label>
            <input id="card-name" type="text"/>
                <br/>
            <label for="card-number">Número de tarjeta de crédito</label>
            <input id="card-number" maxlength="19" minlength="13" pattern="[0-9]*" type="text"/>
    <br/>
            <div className="expiration">
            <label>Fecha de expiración</label>
            <input  maxlength="4" minlength="4" pattern="[0-9]*" placeholder="MM/AA" type="text"/>

            </div>


            <div className="security">
            <label>Código de seguridad</label>
            <input maxlength="4" minlength="2" pattern="[0-9]*" placeholder="CVV" type="text"/>
            </div>




          </fieldset>
        <fieldset>
          <br/>


          <div className="check" >
          <label>
             <input name="check" type="checkbox" value="check"/>
             <span>Acepto términos y condiciones</span>
           </label>
             {/*<button id="pago-button" type="submit">Pagar</button>*/}

           </div>
        </fieldset>


  </form>
            </div>


          </div>


    );
  }
}


export default FormPago;
