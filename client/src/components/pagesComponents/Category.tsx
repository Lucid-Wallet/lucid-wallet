import React from "react";
import { CategoryType } from "../../types";
import { useAppDispatch } from "../../hooks";
import { deleteCategory } from "../../reducers/itemSlice";

const Category = (props: CategoryType) => {

  const dispatch = useAppDispatch();

  const onCategoryDeleteButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as Element;
    const categoryNameDiv = (target.parentElement?.firstChild) as HTMLDivElement;
    const categoryName = categoryNameDiv.outerText;

    dispatch(deleteCategory(categoryName));
  };
  return (
    <div className="categoryCx">
      <div className="categoryName">{props.category}</div>
      <button className="categoryDeleteButton" onClick={ onCategoryDeleteButton }>X</button>
    </div>
  );
}

export default Category