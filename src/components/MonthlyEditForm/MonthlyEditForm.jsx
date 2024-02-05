import React, { useState } from 'react';
import * as monthlysAPI from '../../utilities/monthlys-api';


export default function MonthlyEditForm({expense, setShowExpForm, updateMonthlyExpState }) {
    const [expFormData, setFormData] = useState({
      expense: expense.expense,
      cost: expense.cost,
    })

    function handleChange(evt) {
        setFormData({ ...expFormData, [evt.target.name]: evt.target.value });
      }

      async function handleSubmit(evt) {
        evt.preventDefault();
        const updatedExp = await monthlysAPI.updateMonthly(expFormData, expense._id);
        updateMonthlyExpState(updatedExp)
        setShowExpForm(false);
      }
    
    
    return (
      <>
        <div className="container mt-4">
          <section>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="job" className="form-label">
                  Expense
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="expense"
                  name="expense"
                  placeholder="Expense"
                  value={expFormData.expense}
                  onChange={handleChange}
                />
              </div>
    
              <div className="mb-3">
                <label htmlFor="money" className="form-label">
                  Cost
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cost"
                  name="cost"
                  placeholder="$"
                  value={expFormData.cost}
                  onChange={handleChange}
                />
              </div>
    
              <button type="submit" className="btn btn-primary">
                Update Monthly Expense
              </button>
            </form>
          </section>
        </div>
        </>
      );

    
};