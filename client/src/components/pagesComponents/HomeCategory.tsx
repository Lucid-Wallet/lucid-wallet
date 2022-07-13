import React from "react";
import { HomeCategoryType } from "../../types";
import { ItemType } from "../../types";

const HomeCategory = (props:HomeCategoryType) => {

  
  const itemsArr:React.ReactElement[] = props.items.map( (item:ItemType) =>
    <div className='itemCx'>
      Date Purchased: {item.date_purchased}
      Name: {item.name}
      Price Per: {item.price_per}
      Count: {item.count}
      Note: {item.note}
      Rating: {item.rating}
    </div>
  );
  return (
    <div className='homeCategoryCx'>
      <div className='homeCategoryHeader'>{props.category}</div>
      <div className='homeCategoryItemsCx'>
        { itemsArr }
      </div>
    </div>
  )

}

export default HomeCategory;