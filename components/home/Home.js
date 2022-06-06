import React, { Component } from 'react';
import './Home.css';
import HomeDisplay from './HomeDisplay';

class Home extends Component {
    componentDidMount () {
        window.scroll(0, 0)
    }
    render() {
        return (
            <div>
                <HomeDisplay />

            </div>
        );
    }
}

export default Home;