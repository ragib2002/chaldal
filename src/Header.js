import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Header() {
  const [{ basket, city }, dispatch] = useStateValue();

  return (
    <div>
      <input type="text" />
      <Link to="/select-city">{city}</Link>
      <Link to="/login"> Login</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/products/food">Shop</Link>
    </div>
  );
}

export default Header;
