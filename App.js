import React, { Component } from 'react';
import './App.css';
import ProductsItem from "./productItem"




const products = [
  {
    name: 'ipad',
    price:200
  },
  {
    name: 'iphone',
    price: 650
  }
]

localStorage.setItem('products', JSON.stringify(products));


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      products:JSON.parse(localStorage.getItem('products'))
    }
    this.onDelete=this.onDelete.bind(this)
  }

componentDidMount(){
      const products = this.getProducts();
      this.setState({ products })
}

getProducts(){
  return this.state.products

}

onDelete(name){
  const products = this.getProducts();

  const filteredProducts = products.filter(products => {
    return products.name !== name;
  });
  this.setState({ products: filteredProducts})
}


  render() {
  

  
    return (
      <div className="App">
        <h1>Products Manager</h1>

      {
        this.state.products.map(products => {
        return(
          <ProductsItem
          key={products.name}
          {...products}
          onDelete={this.onDelete}
          />
        )
      })}

      </div>
    );
  }
}

export default App;
