import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink,
    Button
  } from "reactstrap";

class CartSummary extends Component {
  renderSummary(){
    return (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret style={{color:'white', position:'relative', left:'700px'}}>
            Your Cart 
          </DropdownToggle>
          <DropdownMenu style={{position:'absolute', left:'600px'}}>
            {this.props.cart.map(cartItem => (
                <DropdownItem key={cartItem.product.id}>
                    <Badge pill color='danger' onClick={() => this.props.removeFromCard(cartItem.product)} style={{marginRight:'5px'}}>X</Badge>
                    {cartItem.product.productName}
                    <Badge color='info' style={{marginLeft:'5px'}}>{cartItem.quantity}</Badge>
                </DropdownItem> 
            ))}
            <DropdownItem divider />
            <DropdownItem>
               <Button color='success' block >
                    <Link to = "cart" style={{color:'white',textDecoration:'none'}}>Go to cart</Link>
                </Button>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
    )
  }
  renderEmptyCart(){
    return(
        <NavItem>
            <NavLink style={{color:'white', position:'relative', left:'700px'}}>
                Empty Cart
            </NavLink>
        </NavItem>
    )
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
      </div>
    )
  }
}

export default CartSummary; 
