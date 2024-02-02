import { useParams } from "react-router-dom";


export default function MonthlyExpsDetails({monthlyExps}){
    const { id } = useParams()
    const expenseDetail = monthlyExps.find((exp) => exp._id === id  )
    console.log(expenseDetail)
    
    return(
        <div className="Container">
            <h2>Expense Details</h2>
            <p>Expense: {expenseDetail.expense}</p>
            <p>Cost: ${expenseDetail.cost}</p>
        </div>
    )  
}


