import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import City from "./City";
import Login from "./Login";
import ShowProduct from "./ShowProduct";
import Checkout from "./Checkout";
// import Front from "./Front";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {}, []);

  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route path="/select-city">
            <City />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/products/:product">
            <ShowProduct />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <h1>Home</h1>
            <br />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
