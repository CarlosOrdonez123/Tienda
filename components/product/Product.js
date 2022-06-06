import React, { Component } from 'react';
import './Product.css';
import {ProductListDisplay} from './ProductListDisplay';

class Home extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div id="productos">
               <ProductListDisplay />

            </div>
        );
    }
}

export default Home;