import React, { useEffect }  from 'react';
import Header from '../Header';

import { getCategories, getItems } from '../../reducers/itemSlice';
import { useAppDispatch } from '../../hooks';
import HomeCategories from '../pagesComponents/HomeCategories';

const Home = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getItems());
  }, []);


  return (
    <div className='homePageCx'>
      <Header />
      <div className='homePageContentCx'>
        <HomeCategories />
      </div>
    </div>
  );
};

export default Home;