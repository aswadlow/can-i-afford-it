import JobForm from '../../components/JobForm/JobForm'
import MonthlyExp from '../../components/MonthlyExp/MonthlyExp'
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as jobsAPI from '../../utilities/jobs-api'; 
import * as monthlysAPI from '../../utilities/monthlys-api'; 
import { Link } from "react-router-dom";


export default function ProfilePage({jobs, setJobs, monthlyExps, setMonthlyExps, handleDeleteExp, getMonthlyExps, getJobs, addJob, addMonthlyExp}) {

  async function handleDeleteJob(jobId){
    await jobsAPI.deleteJob(jobId)
    const updatedJobs = jobs.filter(job => job._id !== jobId)
    setJobs(updatedJobs)
}

async function handleDeleteExp(monthlyExpId){
  await monthlysAPI.deleteMonthlyExp(monthlyExpId)
  const updatedMonthlyExps = monthlyExps.filter(monthlyExp => monthlyExp._id !== monthlyExpId)
  setMonthlyExps(updatedMonthlyExps)
}

  return (
    <>
      <JobForm jobs={jobs} setJobs={setJobs} getJobs={getJobs} addJob={addJob} />
      <MonthlyExp monthlyExps={monthlyExps} setMonthlyExps={setMonthlyExps} getMonthlyExps={getMonthlyExps} addMonthlyExp={addMonthlyExp} />
      <div className='container'>
      {jobs.map((job, index) => { 
        if(job.job && job.money){
          return (
            <div key={index}>
              <Link to={`/jobs/${job._id}`} >
                <div className='row'> 
                  <div>
                    <div className='text-orange'>Job: {job.job} </div>
                  </div>
                </div> 
                <div className='row'>
                  Dollar Per Hour: {job.money}
                </div>
              </Link>
              <button onClick={() => handleDeleteJob(job._id)}>Delete Job</button>
            </div>
          )
        }
      })}
      </div>
      <div className='container'>
      {monthlyExps.map((monthly, index) => { 
        if(monthly.expense && monthly.cost){
          return (
            <div key={index}>
              <Link to={`/expenses/${monthly._id}`} >
                <div className='row'>
                  Expense: {monthly.expense}
                </div>
                <div className='row'>
                  cost: {monthly.cost}
                </div>
              </Link>
              <button onClick={() => handleDeleteExp(monthly._id)}>Delete Monthly Expense</button>
            </div>
          )
        }
      })}
      </div>
      <div className='container'>
        <h4>Monthly Total:</h4>
        {monthlyExps.reduce((acc, monthly) => acc + (monthly.cost || 0), 0)}
      </div>
    </>
  );
}