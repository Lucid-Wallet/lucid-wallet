import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../reducers/budgetslice";

const baseCategories = {
    foodAndDrinks: 0,
    transportation: 0,
    shopping: 0,
    entertainment: 0,
    travel: 0,
    health: 0,
    service: 0,
}
const trying = ['hello', 'heey']

const Category = () => {

    const user_id = useSelector(state => state.budget.user_id);
    const categorySelect = useSelector(state => state.budget.category)
    const dispatch = useDispatch();
    const category = [];
    const temp = 0;
    // dispatch(fetchCategory(category));
    

    // console.log("HERE ARE CATEGORIES", category);
    // const renderCategory = category.map()
    useEffect(()=> {
        fetch('http://localhost:8080/category', {
            method: 'GET',
            headers: {
                'Content-Type': 'Application/JSON'
            },
        })
        .then(res => res.json())
        .then(data => {
            category = data;
            console.log(category);
  
        })
        .catch(err => console.log('CANNOT FETCH CATEGORY==>', err))
    },[temp])
    
    const handleclick =() => {
        console.log(category);
        dispatch(fetchCategory(category));
    }
    return (
        <div id="categoryBox">
            <div>
            <p>Food and Drinks</p>
            <button onClick={handleclick}>CLICK HERE TO FETCH DATA</button>
            </div>
            <div>
            <p>Etc..</p>
            </div>
        </div>
        
    )
}

export default Category;