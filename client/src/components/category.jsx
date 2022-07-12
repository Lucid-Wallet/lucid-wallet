import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { addCategory } from "../reducers/budgetslice";


const FormCategory = () => {
    // const categories = useSelector()
    const categories = useSelector(state => state.categories)
    

    return (
        <div id="categoryBox">
            <div>
            <p>Food and Drinks</p>
            </div>
            <div>
            <p>Etc..</p>
            </div>
        </div>
        
    )
}

export default FormCategory;