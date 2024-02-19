import React from 'react';
import JobForm from '../../components/JobForm/JobForm';
import MonthlyExp from '../../components/MonthlyExp/MonthlyExp';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as jobsAPI from '../../utilities/jobs-api';
import * as monthlysAPI from '../../utilities/monthlys-api';
import { Link } from "react-router-dom";

export default function ProfilePage({jobs, setJobs, monthlyExps, setMonthlyExps, handleDeleteExp, getMonthlyExps, getJobs, addJob, addMonthlyExp}) {

  async function handleDeleteJob(jobId){
    await jobsAPI.deleteJob(jobId);
    const updatedJobs = jobs.filter(job => job._id !== jobId);
    setJobs(updatedJobs);
  }

  async function handleDeleteExp(monthlyExpId){
    await monthlysAPI.deleteMonthlyExp(monthlyExpId);
    const updatedMonthlyExps = monthlyExps.filter(monthlyExp => monthlyExp._id !== monthlyExpId);
    setMonthlyExps(updatedMonthlyExps);
  }

  return (
    <>
    <h2>Can I Afford it? - A modern Budgeting Calculator</h2>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <JobForm jobs={jobs} setJobs={setJobs} getJobs={getJobs} addJob={addJob} />
        </div>
        <div className='col-md-6'>
          <div className='d-flex flex-column'>
            <MonthlyExp monthlyExps={monthlyExps} setMonthlyExps={setMonthlyExps} getMonthlyExps={getMonthlyExps} addMonthlyExp={addMonthlyExp} />
            <div className='mt-4'>
              <h4>Monthly Total:</h4>
              ${monthlyExps.reduce((acc, monthly) => acc + (monthly.cost || 0), 0)}
            </div>
          </div>
        </div>
      </div>

      <div className='row mt-4'>
        <div className='col-md-6'>
          {jobs.map((job, index) => (job.job && job.money) && (
            <div key={index} className='card mb-3'>
              <Link to={`/jobs/${job._id}`} className='text-decoration-none text-dark'>
                <div className='card-body'>
                  <h5 className='card-title text-orange'>Job: {job.job}</h5>
                  <p className='card-text'>Dollar Per Hour: {job.money}</p>
                </div>
              </Link>
              <button onClick={() => handleDeleteJob(job._id)} className='btn btn-danger'>Delete Job</button>
            </div>
          ))}
        </div>

        <div className='col-md-6'>
          {monthlyExps.map((monthly, index) => (monthly.expense && monthly.cost) && (
            <div key={index} className='card mb-3'>
              <Link to={`/expenses/${monthly._id}`} className='text-decoration-none text-dark'>
                <div className='card-body'>
                  <h5 className='card-title'>Expense: {monthly.expense}</h5>
                  <p className='card-text'>Cost: {monthly.cost}</p>
                </div>
              </Link>
              <button onClick={() => handleDeleteExp(monthly._id)} className='btn btn-danger'>Delete Monthly Expense</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

