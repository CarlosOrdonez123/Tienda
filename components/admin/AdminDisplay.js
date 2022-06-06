import React, { Component } from 'react';
import './Admin.css';
import Boton from './Boton.js';
import {Link, NavLink} from 'react-router-dom';
import { Tabs } from 'antd';
import { Modal, Button } from 'antd';
import { Table } from 'antd';
import firebase from '../../firebase';
import toastr from 'toastr';
import FontAwesome from 'react-fontawesome';
import ProductForm from './ProductForm';



//bliss nodejs
import * as api from '../../api/nodejs';

const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
const { Column } = Table;



class AdminDisplay extends Component {




    state = {
        file:null,
        errors:null,
        newProduct:{

        },
        products: [

        ],
        visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    hideModal = () => {
        this.setState({
            visible: false,
        });
    };

    componentWillMount(){
        // let products = this.state.products;
        // firebase.database().ref("products")
        //     .on("child_added", snap=>{
        //         let nino = snap.val();
        //         nino["id"] = snap.key;
        //         products.push(nino);
        //         this.setState({products});
        //     });
        // firebase.database().ref("products")
        //     .on("child_removed", snap =>{
        //         let id = snap.key;
        //         products = products.filter(p=>p.id !==id);
        //         this.setState({products});
        //     });
        this.getRealProducts();
    };

    getRealProducts = ()=>{
        // api.fetchAllProducts()
        // .then(r=>console.log(r))
        // .catch(err=>console.log(err));
        fetch('https://fixter-shop.herokuapp.com/products')
        .then(res=>{
            if(!res.ok)return toastr.error(res.message);
            return res.json()
        })
        .then(r=>{
            this.setState({products:r});
        });
    };

    remove = (id) =>{
        if(window.confirm("Seguro?")){
            firebase.database().ref("products")
                .child(id)
                .remove()
                .then(r=>toastr.warning("eliminado"))
                .catch(e=>{
                    toastr.error("no se puede")});
        }
    };
    onChangeForm = (e) => {
        let newProduct = this.state.newProduct;
        const field = e.target.name;
        const value = e.target.value;
        newProduct[field] = value;
        this.setState({newProduct});
        console.log(newProduct);
    };
    onChangeFile = (e) => {
        const file = e.target.files[0];
        this.setState({file});
    };

    validateForm = () => {
        let newProduct = this.state.newProduct;
        console.log(newProduct)
        let errors = this.state.errors;
        let isOk = true;
        return isOk;
    };


    addProduct = (e)=>{
        const newProduct = this.state.newProduct;
        fetch('https://fixter-shop.herokuapp.com/products', {
            method:"post",
            body:JSON.stringify(newProduct),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(r=>{
            if(!r.ok) {
                toastr.error(r.statusText);
                console.log(r);
                throw r.statusText;
            }
           
            this.getRealProducts();
            return r.json();
        })
        .then(product=>{
             //pics
            this.uploadPics(product);
            //pics
            toastr.success("se guardó con exito");
            console.log(product)
        });
        this.setState({visible: false});
    };

    uploadPics = (product) =>{
        if(!this.state.file) return;
        firebase.storage()
            .ref(product._id)
            .child(this.state.file.name)
            .put(this.state.file)
            .then(s=>{
                const link = s.downloadURL;
                product.pictures.push(link);
                this.updateProduct(product);
            });
    };

    updateProduct = (product)=>{
        fetch('https://fixter-shop.herokuapp.com/products/'+product._id, {
            method:"PATCH",
            body:JSON.stringify(product),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(r=>{
            if(!r.ok) {
                toastr.error(r.statusText);
                console.log(r);
                throw r.statusText;
            }
           
            this.getRealProducts();
            return r.json();
        })
        .then(res=>{
             //pics
            toastr.success("se subió la imagen");
        });
    }

//this is not using anymore
    // onSave = (e) =>{
    //     e.preventDefault()
    //     if(this.validateForm()){
    //         firebase.database().ref("products")
    //             .push(this.state.newProduct)
    //             .then(r=>{
    //                 console.log(r.key)
    //                 if(this.state.file){
    //                     let updates = {};
    //                     firebase.storage()
    //                         .ref(r.key)
    //                         .child(this.state.file.name)
    //                         .put(this.state.file)
    //                         .then(s=>{
    //                             const link = s.downloadURL;
    //                             let newProduct = this.state.newProduct;
    //                             newProduct["photos"] =[link];
    //                             updates[`/products/${r.key}`] = newProduct;
    //                             firebase.database().ref().update((updates));

    //                         });
    //                 }
    //                 toastr.success("Si guarde" + r.key)


    //             })
    //             .catch(e=>{
    //                 toastr.error("asi no:", e.message);
    //             });
    //     }else{
    //         alert("no se puede");
    //     };
    //     const hideModal = this.setState({
    //             visible: false,
    //         });

    // };


    render() {


        const {products, errors} = this.state;

    return (

        <div className="admin">
                <h2>Panel de Administrador</h2>
                <div className="panel_admin">

                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Órdenes" key="1">
                                <h3 className="tab_name">Órdenes</h3>
                                <Table  dataSource={products} >

                                  <Column
                                       render={(text, record) => (
                                        <span>
                                      <Boton />

                                        </span>
                                                )}
                                        />
                                  <Column
                                       title= "Nombre del producto"
                                      dataIndex="name"
                                        key="name"
                                        render={(text, record) => (
                                        <span>
                                        <a href="./">{record.name}</a>

                                        </span>
                                                )}
                                        />

                                    <Column
                                        title="Etiqueta"
                                        dataIndex="tags"
                                        key="tags"
                                    />

                                    <Column
                                        title="Precio"
                                        dataIndex="price"
                                        key="price"
                                    />
                                    <Column
                                        title="Cantidad"
                                        dataIndex="stock"
                                        key="stock"
                                    />

                                </Table>

                            </TabPane>
                            <TabPane tab="Productos" key="2">
                                <h3 className="tab_name">Lista de Productos</h3>
                                <Table dataSource={products}>

                                        <Column

                                            title="Nombre del Producto"
                                            dataIndex="name"
                                            key="name"
                                        />
                                        <Column
                                            title="Etiqueta"
                                            dataIndex="tags"
                                            key="tags"
                                        />

                                    <Column
                                        title="Precio"
                                        dataIndex="price"
                                        key="price"
                                    />
                                    <Column
                                        title="Cantidad"
                                        dataIndex="stock"
                                        key="stock"
                                    />

                                </Table>

                                    <Button type="primary" onClick={this.showModal}>Agregar</Button>
                                <Modal
                                    title="Agregar un nuevo producto"
                                    visible={this.state.visible}
                                    onOk={this.addProduct}
                                    onCancel={this.hideModal}
                                    okText="Guardar"
                                    cancelText="Cancelar"
                                >
                                    <ProductForm
                                        onChangeFile={this.onChangeFile}
                                        products={products}
                                        product={this.state.newProduct}
                                        onChangeForm={this.onChangeForm}
                                        errors={errors}
                                        />
                                </Modal>
                            </TabPane>
                            <TabPane tab="Historial" key="3">Historial</TabPane>
                        </Tabs>
                    </div>
            </div>
       );
    }
}

export default AdminDisplay;
