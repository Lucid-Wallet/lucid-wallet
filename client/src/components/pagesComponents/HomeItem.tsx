import React from 'react';
import { HomeItemType } from '../../types';

const HomeItem = (props:HomeItemType) => {
  return (
    <tr className='itemCx'>
      <td>{props.item.date_purchased.split('T')[0]}</td>
      <td>{props.item.name}</td>
      <td>{`$ ${props.item.price_per}` }</td>
      <td>{props.item.count}</td>
      <td>{props.item.note}</td>
      <td>{props.item.rating}</td>
      <td>{ `$ ${(Number(props.item.price_per) * Number(props.item.count)).toFixed(2)}` }</td>
    </tr>
  )  
}

export default HomeItem;