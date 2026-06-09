import React from "react";
import { HiOutlineMenu } from "react-icons/hi";

import classes from "./LowerHeader.module.css";

const LowerHeader = () => {
  return (
    <nav className={classes.lower_header}>
      <ul>
        <li className={classes.all_menu}>
          <HiOutlineMenu size={22} />
          <span>All</span>
        </li>

        <li>
          <a href="/">Today's Deals</a>
        </li>

        <li>
          <a href="/">Gift Cards</a>
        </li>

        <li>
          <a href="/">Sell</a>
        </li>

        <li>
          <a href="/">Registry</a>
        </li>

        <li>
          <a href="/">Prime Video</a>
        </li>

        <li>
          <a href="/">Customer Service</a>
        </li>
      </ul>
    </nav>
  );
};

export default LowerHeader;
