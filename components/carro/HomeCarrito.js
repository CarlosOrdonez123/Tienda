import React, { Component } from 'react';
import './Carrito.css';
import {Link} from 'react-router-dom';
import Tables from './tables/Tables';
import DireccionPago from './direccion/DireccionPago';
import Pago from './pago/Pago';
import { Steps, Button, message, Icon } from 'antd';
const Step = Steps.Step;
//redux


const steps = [{

    title: 'Tu cesta',
    content: <Tables/>,
}, {
    title: 'Envío',
    content: <DireccionPago/>,
}, {
    title: 'Pago',
    content: <Pago/>,
}];


class HomeCarrito extends React.Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

  render() {
    return (
         <div className="carrito">
             <div className="home-pago">
                 <h2> Carrito</h2>
             </div>
             <div className="box_step">
                 <div>
                     <Steps >
                         {steps.map(item => <Step key={item.title} title={item.title} />)}
                     </Steps>
                     <div className="steps-content">{steps[this.state.current].content}</div>
                     <div className="steps-action">
                         {
                             this.state.current < steps.length - 1
                             &&
                             <Button type="primary" onClick={() => this.next()}>Siguiente</Button>
                         }
                         {
                             this.state.current === steps.length - 1
                             &&
                             <Link to="/perfil">
                                <Button type="primary" onClick={() => message.success('Processing complete!')}>Pagar</Button>
                             </Link>
                         }
                         {
                             this.state.current > 0
                             &&
                             <Button style={{ marginLeft: 8, backgroundColor:"green !important" }} onClick={() => this.prev()}>
                                 Atrás
                             </Button>
                         }
                     </div>
                 </div>
             </div>
             <br/>
             <hr className="hr-carrito"/>
         </div>
    );
  }
}



export default HomeCarrito;
