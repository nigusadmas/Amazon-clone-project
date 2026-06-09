import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCartAdd } from "react-icons/bi";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header_container}>
      {/* Logo + Delivery */}
      <div className={classes.logo_container}>
        <a href="/">
          <img
            src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </a>

        <div className={classes.Delivery_location}>
          <SlLocationPin />
          <div>
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className={classes.search}>
        <select>
          <option>All</option>
        </select>

        <input type="text" placeholder="Search Amazon" />

        <BsSearch />
      </div>

      {/* Language */}
      <div className={classes.language}>
        <img
          src="https://pngimg.com/uploads/flags/small/flags_PNG14592.png"
          alt="USA Flag"
        />

        <select>
          <option>EN</option>
        </select>
      </div>

      {/* Account */}
      <a href="/" className={classes.nav_item}>
        <p>Hello, Sign in</p>
        <span>Account & Lists</span>
      </a>

      {/* Orders */}
      <a href="/" className={classes.nav_item}>
        <p>Returns</p>
        <span>& Orders</span>
      </a>

      {/* Cart */}
      <a href="/" className={classes.cart}>
        <BiCartAdd />
        <span>0</span>
        <p>Cart</p>
      </a>
    </header>
  );
};

export default Header;
