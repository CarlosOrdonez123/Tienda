import React, { Component } from 'react';
import { Card } from 'antd';
import './Tables.css';


class TotalForm extends React.Component {

  render() {
    return (

    <div className="table-total">
      <Card title="Total a pagar" style={{ width: 300 }}>
         <p>Total: </p>
         <hr/>
         <p>$1000.00 pesos</p>

       </Card>
    </div>

    );
  }
}

export default TotalForm;
