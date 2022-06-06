import React , {Component} from 'react';
import {ProductDetailDisplay} from './ProductDetailDisplay';
import firebase from '../../firebase';
//redux
import {addItemAction} from '../../redux/actions/cartActions';
import {connect} from 'react-redux';
import toastr from "toastr";

class ProductDetail extends Component{
    state= {
        product: {

        }
    }
    componentDidMount () {
        window.scroll(0, 0)
    };
    componentWillMount () {
        // console.log(this.props.match.params.id);
        // firebase.database().ref("products").child(this.props.match.params.id)
        //     .on("value", s=>{
        //         let product = s.val();
        //         product.id = s.key;
        //         this.setState({product});
        //     })
        this.getSinlgeProduct(this.props.match.params.id);
    }

    getSinlgeProduct = (id) => {
        fetch('https://fixter-shop.herokuapp.com/products/'+id)
        .then(res=>{
            if(!res.ok)return toastr.error(res.message);
            return res.json()
        })
        .then(product=>{
            this.setState({product});
        });
    };

    changeQuantity = (plus)=>{
        let quantity = this.state.product.quantity || 1;
        let product = this.state.product;

        if(plus==="+"){
            quantity++;
        }else{
           quantity--;
        }
        product.quantity = quantity;
        this.setState({
            product
        });
    };

    addToCart = () => {
       this.props.addItemAction(this.state.product);
    };


    render(){
        const {product} = this.state;
        console.log(product);

        return(
            <div>
                <ProductDetailDisplay
                    {...product}
                    changeQuantity={this.changeQuantity}
                    addToCart={this.addToCart}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    console.log(state);
    return {
        cart:state.cart.array
    }
}

export default connect(mapStateToProps, {addItemAction})(ProductDetail);
