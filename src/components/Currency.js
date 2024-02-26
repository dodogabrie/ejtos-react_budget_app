import React, { useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Dropdown.css';

import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChanges = (event) => {
        dispatch({
            type:'CHG_CURRENCY',
            payload:event.target.value
        });
    }
    return (
        <div className='dropdown-wrapper'>
        <select 
        className='form-select alert alert-primary'
        value={currency}
        onChange={handleCurrencyChanges}>
            <option className='alert alert-primary' defaultValue value="£" name="£">£ Pound</option>
            <option value="$" name="$">$ Dollar</option>
            <option value="€" name="€">€ Euro</option>
            <option value="₹" name="₹">₹ Rupee</option>
        </select>
        </div>
    );
}
export default Currency;