import React, { Component } from 'react';
import {Bee} from './Bee';

class Home extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <Bee />
            </div>
        );
    }
}

export default Home;