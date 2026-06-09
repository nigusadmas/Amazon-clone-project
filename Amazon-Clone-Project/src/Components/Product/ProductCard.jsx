import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import styles from "./Product.module.css";

const ProductCard = ({ product }) => {
  const { title, image, rating, price } = product;

  return (
    <div className={styles.productCard}>
      <a href="/">
        <img src={image} alt={title} className={styles.productImage} />
      </a>

      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{title}</h3>

        <div className={styles.ratingContainer}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>{rating?.count}</small>
        </div>

        <div className={styles.price}>
          <CurrencyFormat amount={price} />
        </div>

        <button className={styles.cartBtn}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
