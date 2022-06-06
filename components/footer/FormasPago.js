/**
 * Created by brendaortega on 31/01/18.
 */
import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';
import img from '../../assets/logo_prana_rgb-06.png';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;


class FormasPago extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div style={{padding:"100px 20%", borderTop:"1px solid #f8f8f7", borderBottom:"1px solid #f8f8f7"}} className="asks">

                <h3 className="tity">Preguntas frecuentes</h3>
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header="¿Es seguro pagar en PRANA?" key="1" >
                        <p>Sí, en PRANA garantizamos al 100% la seguridad de tus pagos.
                            Al momento de pagar con tu tarjeta de crédito o débito,
                            toda tu información es cifrada mediante el mejor sistema de
                            protección Secure Sockets Layer (SSL) de 256-bit. Así que puedes
                            estar tranquilo, nosotros no guardamos ningún dato de tu tarjeta.
                        </p>
                    </Panel>
                    <Panel header="¿Qué tarjetas puedo usar para realizar una compra?" key="2">
                        <p>Puedes realizar tus compras con cualquier tarjeta de crédito o débito.
                        </p>
                        <br/>
                        <div className="formas">
                            <div>
                                <img src="https://s3.amazonaws.com/conekta.static/business/commissions/methods_cards.png" alt=""/>
                            </div>
                            <div>
                                <p>Aplica a tarjetas locales y extranjeras.</p>
                            </div>
                            <div>
                                <img src="https://s3.amazonaws.com/conekta.static/business/commissions/methods_oxxopay.png" alt=""/>
                            </div>
                            <div>
                                <p>OXXO cobra $ 10 pesos MXN adicionales a tus clientes por pagar en caja.</p>
                            </div>
                        </div>
                    </Panel>
                    <Panel header="¿Qué hago si no procede mi orden?" key="3">
                        <p>Existen diferentes motivos por los cuales un pedido puede no proceder:
                            <br/>
                            - Método de pago no aceptado (ej. tarjeta internacional, depósito en cuenta errada).
                            <br/>
                            - El banco rechazo la transacción (tarjeta de débito, tarjeta de crédito):
                            <br/>
                            - Los datos de la tarjeta no coinciden con los del titular de la cuenta Linio y el banco por seguridad declina el pago.
                            <br/>
                            - La tarjeta pueda tener algún tipo de restricción para compras por Internet.
                            <br/>
                            - Los fondos de la tarjeta son insuficientes.
                            <br/>
                            - No realizaste el pago dentro del tiempo establecido (depósito).
                            <br/>
                            - Debido a la gran demanda del producto, lamentablemente nos quedamos sin existencias.
                        </p>
                    </Panel>
                    <Panel header="¿Hacen entregas a todo México?" key="4">
                        <p>En PRANA realizamos entregas a todos los Estados de la República Mexicana,
                            sin embargo, existen algunos códigos postales donde, por el momento,
                            las paqueterías no tienen cobertura. ¡Pero no te preocupes! En caso
                            de que tu entrega no pueda ser concretada por esta situación, nosotros nos comunicaremos contigo.
                        </p>
                    </Panel>
                    <Panel header="¿Puedo realizar devoluciones?" key="5">
                        <p>Por el momento solo aceptamos devoluciones en caso de que el producto haya sido entregado con algún defecto.
                            <br/>
                            Revisa las condiciones del producto y el empaque para su devolución.
                        </p>
                    </Panel>
                    <Panel header="¿Cuánto tiempo tengo para devolver el producto?" key="6">
                        <p>
                            Tienes 10 días naturales a partir del momento en que la paquetería hace entrega de tu producto para productos locales.

                        </p>
                    </Panel>
                    <Panel header="¿Cuál es el costo de la devolución?" key="7">
                        <p>¡En Linio, las devoluciones son gratis! No te preocupes, los gastos de devolución van por nuestra cuenta.
                        </p>
                    </Panel>
                    <Panel header="¿En qué condiciones debe estar el producto y el empaque?" key="8">
                        <p>En las mejores condiciones posibles. Es fundamental que conserves el empaque original,
                            pues es tan importante como el producto; cuídalo, guárdalo y manipúlalo con el mayor
                            de los cuidados, de esta forma no tendrás ningún inconveniente al momento de realizar
                            la devolución. . De no haberlo conservado, busca una envoltura parecida que lo proteja.
                            <br/>
                            Una vez que imprimas la guía de la paquetería, es importante no pegarla directamente
                            en la caja original del producto, ya que el pegamento puede dañar el empaque y tu
                            devolución puede ser rechazada. Utiliza otra caja o envoltura para pegar tu guía y
                            proteger el empaque original.
                            <br/>
                            Por favor, ten en cuenta que si no conservas el empaque original, o si éste se encuentra
                            en mal estado, tu devolución podrá ser rechazada.
                        </p>
                    </Panel>
                    <Panel header="¿Cómo sé si recibieron el producto que devolví?" key="9">
                        <p>Una vez que la paquetería ha recolectado tu producto y lo entregue en nuestro almacén,
                            te enviaremos un correo electrónico para confirmar su llegada e informarte sobre
                            los próximos pasos a seguir.
                            <br/>
                            Por seguridad, ten a la mano el número de rastreo del paquete.
                        </p>
                    </Panel>
                </Collapse>



            </div>
        );
    }
}

export default FormasPago;