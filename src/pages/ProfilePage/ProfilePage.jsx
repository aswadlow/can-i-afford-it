import JobForm from '../../components/JobForm/JobForm'
import MonthlyExp from '../../components/MonthlyExp/MonthlyExp'
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import * as jobsAPI from '../../utilities/jobs-api'; 
import * as monthlysAPI from '../../utilities/monthlys-api'; 

export default function ProfilePage({jobs, setJobs, monthlyExps, setMonthlyExps, handleDeleteExp, getMonthlyExps, getJobs}) {

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
      <JobForm jobs={jobs} setJobs={setJobs} getJobs={getJobs} />
      <MonthlyExp monthlyExps={monthlyExps} setMonthlyExps={setMonthlyExps} getMonthlyExps={getMonthlyExps} />
      <div className='display-jobs'>
      {jobs.map((job, index) => { 
        if(job.job && job.money){
          return (
            <div key={index}>
            Job: {job.job} Dollar Per Hour: {job.money}
            <button onClick={() => handleDeleteJob(job._id)}>Delete Job</button>
            </div>
          )
        }
      })}
      </div>
      <div className='display-monthlys'>
      {monthlyExps.map((monthly, index) => { 
        if(monthly.expense && monthly.cost){
          return (
            <div key={index}>
              Expense: {monthly.expense} cost: {monthly.cost}
              <button onClick={() => handleDeleteExp(monthly._id)}>Delete Monthly Expense</button>
            </div>
          )
        }
      })}
      </div>
      <div className='MonthlyExpsTotal'>
        <h4>Monthly Total:</h4>
        {monthlyExps.reduce((acc, monthly) => acc + (monthly.cost || 0), 0)}
      </div>
    </>
  );
}