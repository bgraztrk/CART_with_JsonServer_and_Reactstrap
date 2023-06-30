import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";

class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/" style={{color:'white', marginLeft:'25px'}}>Northwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap" style={{color:'white',position:'relative', left:'690px'}}>
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary cart={this.props.cart} removeFromCard={this.props.removeFromCard}/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;