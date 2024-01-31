import { useState } from 'react';
import './MonthlyExp.css'
import * as monthlysAPI from '../../utilities/monthlys-api'; 

export default function MonthlyExp({monthlyExps, setMonthlyExps, getMonthlyExps}){
    const [monthlyExpData, setMonthlyExpData] = useState({
        expense: '',
        cost: ''
      })


    function handleChange(evt) {
        setMonthlyExpData({ ...monthlyExpData, [evt.target.name]: evt.target.value });
      }


    function handleSubmit(evt){
        evt.preventDefault()
        monthlysAPI.addMonthlyExp(monthlyExpData)
        getMonthlyExps()
        
        //setMonthlyExps([...monthlyExps, newMonthlyExp])
    }


    return (
        <div className='monthlyDiv'>
          <h2>Monthly Expenses</h2>
         <form className='monthlyForm' onSubmit={handleSubmit}>
              <label>
                  Expense
              </label>
              <input 
              name="expense"
              placeholder="Rent, groceries etc."
              value={monthlyExpData.expense}
              onChange={handleChange}
              required
              pattern=".{2,}" />
              <label>
                  Cost of Expense
              </label>
             
              <input 
              name ="cost"
              placeholder="$"
              value={monthlyExpData.cost}
              onChange={handleChange}
              required />
              <button type="submit">Add Expense</button>
         </form>
        </div>
      );
}

