import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import MonthlyEditForm from '../../components/MonthlyEditForm/MonthlyEditForm';

export default function MonthlyExpsDetails({ monthlyExps, updateMonthlyExpState }) {
  const [showExpForm, setShowExpForm] = useState(false)
  const { id } = useParams()
  const expense = monthlyExps.find((exp) => exp._id === id)

  function handleButtonClick() {
    setShowExpForm(!showExpForm);
  }

  return (
    <>
      <div className="container mt-4">
        {showExpForm ? (
          <MonthlyEditForm expense={expense} setShowExpForm={setShowExpForm} updateMonthlyExpState={updateMonthlyExpState} />
        ) : (
          <>
            <h2>Monthly Expense Details</h2>
            {expense ? (
              <>
                <p>Expense: {expense.expense}</p>
                <p>Cost: ${expense.cost}</p>
                <button onClick={handleButtonClick} className="btn btn-primary">
                  {showExpForm ? 'Hide' : 'Show'} Edit Form
                </button>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </>
        )}
      </div>
    </>
  );
}


