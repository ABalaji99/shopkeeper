import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Products from '../Products/Products';
import Cart from '../Cart/Cart.js';
import Blog from '../Blog';

const RoutesFi = ({productItems, items, cartItems, handleAddProduct, handleRemoveProduct,handleCartClearance}) => {
  return (
    <div>
      <Switch>
          <Route path="/" exact>
            <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
          </Route>
          <Route path="/cart" exact >
            <Cart cartItems={cartItems} 
            handleAddProduct={handleAddProduct} 
            handleRemoveProduct={handleRemoveProduct} 
            handleCartClearance = {handleCartClearance}/>
          </Route>
          
          
      </Switch>
    </div>
  )
}

export default RoutesFi;