import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { totalexpenses } = useContext(AppContext);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalexpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
