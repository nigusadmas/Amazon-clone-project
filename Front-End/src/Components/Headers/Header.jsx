import React, { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { auth } from "../../Utility/firebase";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import LowerHeader from "../../Components/Headers/LowerHeader";

const Header = () => {
  const [{ user, basket = [] }] = useContext(DataContext);
  const cartItemCount = basket.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );

  return (
    <section className={classes.fixed}>
      <header className={classes.header_container}>
        {/* Logo + Delivery */}
        <div className={classes.logo_container}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
              alt="Amazon Logo"
            />
          </Link>

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
        <Link to={!user && "/auth"} className={classes.nav_item}>
          <div>
            {user ? (
              <>
                <p>Hello , {user?.email?.split("@")[0]}</p>

                <span onClick={() => auth.signOut()}>
                  <b style={{ color: "red", paddingTop: "10px" }}>SignOut</b>
                </span>
              </>
            ) : (
              <>
                <p>Hello, Sign in</p>
                <span>Account & Lists</span>
              </>
            )}
          </div>
        </Link>

        {/* Orders */}
        <Link to="/orders" className={classes.nav_item}>
          <p>Returns</p>
          <span>& Orders</span>
        </Link>

        {/* Cart */}
        <Link to="/carts" className={classes.cart}>
          <BiCart />
          <span>{cartItemCount}</span>
          <p>Cart</p>
        </Link>
      </header>
      <LowerHeader />
    </section>
  );
};

export default Header;
