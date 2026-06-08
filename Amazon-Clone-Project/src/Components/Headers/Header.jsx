import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCartAdd } from "react-icons/bi";

const Header = () => {
  return (
    <>
      {/* Amazone clone */}
      <section>
        <section>
          <div>
            {/* header logo */}
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>

            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>

          <div>
            {/* search  */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <BsSearch />
          </div>

          <div>
            <img
              src="https://pngimg.com/uploads/flags/small/flags_PNG14592.png"
              alt="USA flag"
            />

            <select>
              <option value="">EN</option>
            </select>
          </div>

          {/* three components */}

          <a href="">
            <div>
              <p>Hello, Sign In</p>

              <span>
                <select>
                  <option value="">Account & Lists</option>
                </select>
              </span>
            </div>
          </a>

          {/* order */}
          <a href="">
            <p>Returns</p>
            <span>& Orders</span>
          </a>
          {/* cart */}
          <a href="/">
            <BiCartAdd />
            <span>0 </span>
            <p>Cart</p>
          </a>
        </section>
      </section>
    </>
  );
};

export default Header;
