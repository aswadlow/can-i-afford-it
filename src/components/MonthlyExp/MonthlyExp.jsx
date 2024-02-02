import { useState } from 'react';
import './MonthlyExp.css'
import * as monthlysAPI from '../../utilities/monthlys-api'; 

export default function MonthlyExp({monthlyExps, setMonthlyExps, getMonthlyExps, addMonthlyExp}){
    const [monthlyExpData, setMonthlyExpData] = useState({
        expense: '',
        cost: ''
      })


    function handleChange(evt) {
        setMonthlyExpData({ ...monthlyExpData, [evt.target.name]: evt.target.value });
      }


    async function handleSubmit(evt){
        evt.preventDefault()
        const newMonthlyExp = await monthlysAPI.addMonthlyExp(monthlyExpData)
        addMonthlyExp(newMonthlyExp)
        setMonthlyExpData({expense: '', cost: ''})
        
    }


    return (
        <section className='container-lg'>
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
        </section>
      );
}

