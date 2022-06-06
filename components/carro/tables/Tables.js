import React, { Component } from 'react';
import './Tables.css';
import FontAwesome from 'react-fontawesome';
import toastr from 'toastr';

//redux
import {connect} from "react-redux";
import {updateItemAction} from '../../../redux/actions/cartActions';


class Tables extends React.Component {

    state = {
        subTotal:0,
        total:0,
        products:[]
    };

    componentWillMount(){
        this.getRealProducts();
    }

    getRealProducts = ()=>{
        // api.fetchAllProducts()
        // .then(r=>console.log(r))
        // .catch(err=>console.log(err));
        fetch('https://fixter-shop.herokuapp.com/products')
        .then(res=>{
            if(!res.ok)return toastr.error(res.message);
            return res.json()
        })
        .then(products=>{
            this.setState({products});
        });
    };

  changeQuantity = (product, up=null) =>{
    product.quantity = product.quantity || 1;
    if(up==="+"){
        product.quantity++;
    }else {
      product.quantity--;
    }
    this.props.updateItemAction(product);

  };

  removeItem = (product) =>{
    product.quantity = 0;
    this.props.updateItemAction(product);
  };

  getTotals = () =>{
      let total=0;
      this.props.cart.forEach(p=>{
          total = parseInt(p.price) * parseInt( p.quantity || 1);
      });
      if(total === 0) return 0;
      return total + 199;
  };

  getSubTotal = () => {
      let subTotal=0;
      this.props.cart.forEach(p=>{
          subTotal = parseInt(p.price) * parseInt( p.quantity);
      });
      return subTotal;
  };


  render() {
    const {products} = this.state;
    if(products.length < 1) return <img width="200" src="https://loading.io/spinners/coolors/lg.palette-rotating-ring-loader.gif" /> 
    return (
        <div className="tab_box">
          <h3 style={{textAlign:"center"}}>Resumen</h3>
          <br/>
          <div className="table">
              <table>
                <tr>
                  <th>Producto</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Eliminar</th>
                </tr>

                    {products.map(p=>{
                      return (
                          <tr>
                              <td><img src={p.pictures[0]} alt={p.body}/></td>
                              <td>{p.name}</td>
                              <td>${p.price}</td>
                              <td><input onClick={()=>this.changeQuantity(p)} id="minus1" type="button" value="-"/> <input min={0} id="minus2" type="text" value={p.quantity|| 1}/> <input onClick={()=>this.changeQuantity(p,"+")}  id="minus3" type="button" value="+"/></td>
                              <td onClick={()=>this.removeItem(p)} className="icon_delete"><FontAwesome  name="trash" size="2x"/></td>
                          </tr>
                      );
                    })}

              </table>
          </div>
          <div className="box_total">
            <div className="data_total">
              <div className="fl_total">
                <p>Total de productos: </p>
                <p>{this.getSubTotal().toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                })}</p>
              </div>
              <div className="fl_total">
                <p>Envío: </p>
                <p>$199.00</p>
              </div>
              <div className="fl_total">
                <h3>Total a pagar</h3>
                <h3>{this.getTotals().toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                })}</h3>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps){
    return {
        cart:state.cart.array
    }
}


export default connect(mapStateToProps, {updateItemAction})(Tables);
