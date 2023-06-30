import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class CategoryList extends Component {
    state = {
        categories : []
    }

    getCategories = () => {
        fetch('http://localhost:3000/categories')
        .then(response => response.json())
        .then(response => this.setState({categories:response}))
    }

    componentDidMount(){
        this.getCategories();
    }

  render() {
    return (
      <div>
        <h3><Link to="/" style={{textDecoration:'none',color:'#2e2e2e'}}>{this.props.info.title}</Link></h3>
        <ListGroup>
            {this.state.categories.map(category => (
                <ListGroupItem 
                    key={category.id} 
                    onClick={() => this.props.changeCategory(category)}
                    color="info"
                    active={category.categoryName===this.props.currentCategory?true:false}
                    >
                    {category.categoryName}
                </ListGroupItem>
            ))}
        </ListGroup>
      </div>
    )
  }
}

export default CategoryList;