import React, { Component } from 'react';
import { Table } from 'antd';
import firebase from '../../firebase';
const { Column } = Table;


class Detalle extends Component {
    render() {
        const {products} = this.state;
        return (
          <div>
          <Table  dataSource={products} >


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
                  dataIndex="info"
                  key="info"
              />

              <Column
                  title="Precio"
                  dataIndex="price"
                  key="price"
              />
              <Column
                  title="Cantidad"
                  dataIndex="cant"
                  key="cant"
              />

          </Table>
        </div>
      );
  }
}

export default Detalle;
