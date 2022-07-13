import React from "react";
import { CategoryType } from "../../types";

const Category = (props: CategoryType) => {
  return (
    <div className="categoryCx">
      <div className="categoryName">{props.category}</div>
      <button className="categoryDeleteButton">X</button>
    </div>
  );
}

export default Category