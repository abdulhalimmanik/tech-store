import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage.js";
import Default from "./pages/Default.js";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, cart,footer*/}
        <Navbar />
        <Sidebar />
        <SideCart />
        <Switch>
          <Route path="/ecommerce" exact component={Home} />
          <Route path="/ecommerce/about" component={About} />
          <Route path="/ecommerce/contact" component={Contact} />
          <Route path="/ecommerce/products" exact component={Products} />
          <Route path="/ecommerce/products/:id" component={SingleProduct} />
          <Route path="/ecommerce/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
