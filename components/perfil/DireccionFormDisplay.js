/**
 * Created by brendaortega on 13/03/18.
 */
import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, AutoComplete } from 'antd';

import './Perfil.css';



class DireccionFormDisplay extends Component {
    state = {
        loading: false,
        visible: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }

    render() {
        const { visible, loading } = this.state;

        return (
            <div>
                <Button type="primary" shape="circle" icon="plus"  onClick={this.showModal} />

                <Modal
                    visible={visible}
                    title="Agrega una nueva dirección"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Cancelar</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            Guardar
                        </Button>,
                    ]}
                >
                <Form onSubmit={this.handleSubmit} className="login-form" validated>
                    <Input name="name"
                           style={{margin:"10px 0"}}

                           prefix={<Icon type="user"
                                         style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Nombre" required/>
                    <Input name="name"
                           style={{margin:"10px 0"}}

                           prefix={<Icon type="user"
                                         style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Apellidos" />
                    <Input name="name"
                           style={{margin:"10px 0"}}

                           prefix={<Icon type="copy"
                                         style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Calle" />
                    <Input name="price"
                           type="number"
                           style={{margin:"10px 0"}}

                           prefix={<Icon type="scan"
                                         style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="No. exterior" />
                    <Input name="price"
                           type="number"
                           style={{margin:"10px 0"}}

                           prefix={<Icon type="flag"
                                         style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="CP" />

                    <Input name="name"
                           style={{margin:"10px 0"}}

                           prefix={<Icon type="flag"
                                         style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Estado" />
                    <Input name="name"
                           style={{margin:"10px 0"}}

                           prefix={<Icon type="user"
                                         style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Ciudad" />
                    <Input name="name"
                           style={{margin:"10px 0"}}

                           prefix={<Icon type="flag"
                                         style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Delegación" />
                    <Input name="name"
                           style={{margin:"10px 0"}}

                           prefix={<Icon type="flag"
                                         style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="Colonia" />
                </Form>
                </Modal>
            </div>
        );
    }
}

export default DireccionFormDisplay;