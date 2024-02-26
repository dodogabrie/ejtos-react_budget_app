import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, totalexpenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
            setNewBudget(event.target.value);
    }

    const handleBlur = () => {
        if(newBudget > 20000){
            alert("The value cannot exceed "+currency+"20.000");
            setNewBudget(budget);
        }
        else if(newBudget<totalexpenses){
            alert("The value cannot be lower than the expenses "+currency+totalexpenses);
            setNewBudget(budget);
        }
        else{
            dispatch({
                type: 'SET_BUDGET',
                payload: parseInt(newBudget, 10),
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
        <input 
            type="number" 
            step="10" 
            value={newBudget} 
            onChange={handleBudgetChange}
            onBlur={handleBlur}></input>
        </div>
        );
};
export default Budget;
