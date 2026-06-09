import React from "react";

const CatagoryCard = ({ data }) => {
  if (!data) return null; // ✅ prevents crash

  return (
    <a href="#" className="category-card">
      <h2>{data.title}</h2>
      <img src={data.imgLink} alt={data.title} />
      <p>{data.name}</p>
      <p>shop now</p>
    </a>
  );
};

export default CatagoryCard;
