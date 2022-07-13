import React from 'react';
import Header from '../Header';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectCategories, addCategory } from '../../reducers/itemSlice';
import Category from '../pagesComponents/Category';
import { CategoryType } from '../../types';

const Categories = () => {

  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const categoriesArr: React.ReactElement[] = categories.map( (category:CategoryType) =>
    <Category key={`${category.category_id}`} category_id={category.category_id} category={category.category}/>
  );

  const onAddCategoryButtonClick = () => {
    const addCategoryField = document.querySelector('.addCategoryField') as HTMLInputElement;
    const addCategoryValue = addCategoryField.value;
    dispatch(addCategory(addCategoryValue));
    addCategoryField.value = '';
  }

  return (
  <div className='categoryPageCx'>
    <Header />
    <div className='categoryContentCx'>
      <div><h1>Categories</h1></div>
      <div className='addCategoryContentCx'>
        <input className='addCategoryField' type="text" placeholder='Category to add...'></input>
        <button className='addCategoryButton' onClick={ onAddCategoryButtonClick }>Add</button>
      </div>
      <div className='categoriesList'>
      { categoriesArr }
      </div>
    </div>
  </div>
  );
}

export default Categories;