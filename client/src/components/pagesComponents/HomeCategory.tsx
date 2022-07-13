import React, { useEffect } from "react";
import { HomeCategoryType } from "../../types";
import { ItemType } from "../../types";
import HomeItem from "./HomeItem";

const HomeCategory = (props:HomeCategoryType) => {
  let categoryTotal = 0;

  useEffect(() => {
    categoryTotal = 0;
  }, []);

  const itemsArr:React.ReactElement[] = props.items.map( (item:ItemType) => {
      categoryTotal += (Number(item.count) * Number(item.price_per))
      return  <HomeItem key={`${item.name}${item.item_id}`} item={item}/>
    }
  );
  return (
    <div className='homeCategoryCx'>
      <div className='homeCategoryHeader'>{props.category}</div>
      <div className='homeCategoryItemsCx'>
        <table>
          <tbody>
            <tr>
              <th>Date Purchased</th>
              <th>Name</th>
              <th>Price Per</th>
              <th>Count</th>
              <th>Note</th>
              <th>Rating</th>
              <th>Total</th>
            </tr>
            { itemsArr }
          </tbody>
        </table>
        <div className='homeCategoryTotal'>
          { `$${categoryTotal.toFixed(2)}` }
        </div>
      </div>
    </div>
  )

}

export default HomeCategory;