import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import Detalle from './Detalle';



class Boton extends React.Component {

      state = { visible: false }
   showModal = () => {
     this.setState({
       visible: true,
     });
   }
   handleOk = (e) => {
     console.log(e);
     this.setState({
       visible: false,
     });
   }
   handleCancel = (e) => {
     console.log(e);
     this.setState({
       visible: false,
     });
   }
   render() {
     return (
       <div>
         <Button type="dashed" onClick={this.showModal}>Detalle</Button>
         <Modal
           title="Detalle"
           visible={this.state.visible}
           onOk={this.handleOk}
           onCancel={this.handleCancel}
           okText="Aceptar"
           cancelText="Cancelar"
         >

        <h2>BlisS</h2>

         </Modal>
       </div>
     );
   }
 }


export default Boton;
