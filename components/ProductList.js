import React, { Component } from 'react'
import { Table, Button } from'reactstrap'

class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title} - {this.props.currentCategory}</h3>
        <Table dark striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quatity Per Unit</th>
                <th>Unit Price</th>
                <th>Units In Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {this.props.products.map(product => (
                <tr key={product.id} >
                    <th scope="row">{product.id}</th>
                    <td>{product.productName}</td>
                    <td>{product.quantityPerUnit}</td>
                    <td style={{textAlign:'center'}}>{product.unitPrice}</td>
                    <td style={{textAlign:'center'}}>{product.unitsInStock}</td>
                    <td><Button onClick={() => this.props.addToCard(product)} color="info" outline>ADD</Button></td>
                </tr>
            ))}
            </tbody>
        </Table>
      </div>
    )
  }
}

export default ProductList;