import React from 'react';
import Header from '../Header';
import { useAppSelector } from '../../hooks';
import { selectCategories } from '../../reducers/itemSlice';
import Category from '../pagesComponents/Category';
import { CategoryType } from '../../types';

const Categories = () => {

  const categories = useAppSelector(selectCategories);
  const categoriesArr: React.ReactElement[] = categories.map( (category:CategoryType) =>
    <Category key={`${category.category_id}`} category_id={category.category_id} category={category.category}/>
  );
   
  return (
  <div className='categoryPageCx'>
    <Header />
    <div className='categoryContentCx'>
      <div><h1>Categories</h1></div>
      <div className='categoriesList'>
      { categoriesArr }
      </div>
    </div>
  </div>
  );
}

export default Categories;