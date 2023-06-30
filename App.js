import { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Navi from './components/Navi';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import alertify from 'alertifyjs';
import NotFound from './pages/NotFound';
import CartDetails from './pages/CartDetails';
import { Routes, Route } from 'react-router-dom';

class App extends Component {

  state = {
    currentCategory : "",
    products : [],
    cart : []
  }

  changeCategory = (category) => {
    this.setState({
        currentCategory:category.categoryName
    })
    this.getProducts(category.id)
  }

  getProducts = categoryId => {
    let url = 'http://localhost:3000/products';
    
    if(categoryId){
      url += '?categoryId=' + categoryId
    }

    fetch(url)
    .then(response => response.json())
    .then(response => this.setState({products : response}))
  }

  addToCard = (product) => {
    let newCart = this.state.cart
    var addedItem = newCart.find(c => c.product.id === product.id)
    if(addedItem){
      addedItem.quantity+=1;
    }else{
      newCart.push({product:product,quantity:1})
    }
    this.setState({cart:newCart})
    alertify.success(product.productName + ' added to cart',2)
  }

  removeFromCard = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({cart : newCart})
    alertify.error(product.productName + ' remove from cart',2)
  } 

  componentDidMount(){
    this.getProducts();
  }

  render() {
  let productInfo = {title:"ProductList"}
  let categoryInfo = {title:"CategoryList"}

    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCard={this.removeFromCard}/>
          <Row>
            <Col xs='3'>
              <CategoryList 
                info={categoryInfo} 
                changeCategory={this.changeCategory} 
                currentCategory={this.state.currentCategory}
              />
            </Col>
            <Col xs='9'>
                <Routes>
                  <Route  
                    path='/'
                    element = {
                      <ProductList 
                      info={productInfo} 
                      currentCategory={this.state.currentCategory}
                      products={this.state.products}
                      addToCard={this.addToCard}
                      />
                    }
                  />
                  <Route 
                    path='/cart' 
                    element = {
                      <CartDetails
                        cart={this.state.cart}
                        removeFromCard={this.removeFromCard}
                      />
                    }
                  />
                  <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
