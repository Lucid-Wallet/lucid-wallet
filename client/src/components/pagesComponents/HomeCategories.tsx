import React from 'react';
import { useAppSelector } from '../../hooks';
import { selectItems } from '../../reducers/itemSlice';

import HomeCategory from './HomeCategory';

const HomeCategories = () => {


  const categoriesAndItems = useAppSelector(selectItems);
  const homeCategoriesArr:React.ReactElement[] = []
  for (const [category, items] of Object.entries(categoriesAndItems)) {

    homeCategoriesArr.push(
      <HomeCategory
        key={`home${category}`}
        category={category}
        items={items}
      />
    );
  }
  
  return (
    <div>
      { homeCategoriesArr }
    </div>
  );

}

export default HomeCategories;