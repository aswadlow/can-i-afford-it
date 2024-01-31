import { useState } from 'react';
import './JobForm.css'
import * as jobsAPI from '../../utilities/jobs-api'; 

export default function JobForm({jobs, setJobs, getJobs}) {
    const [jobFormData, setJobFormData] = useState({
        job: '',
        money: ''
      });

    function handleChange(evt) {
        setJobFormData({ ...jobFormData, [evt.target.name]: evt.target.value });
      }

    async function handleSubmit(evt){
        evt.preventDefault()
        await jobsAPI.createJob(jobFormData)
        getJobs()
        //setJobs([...jobs, newJob ])
    }
   
  
    return (
      <div className='jobDiv'>
        <h2>Job</h2>
       <form className='jobForm' onSubmit={handleSubmit}>
            <label>
                Job
            </label>
                <input 
                name="job"
                placeholder="Job Name"
                value={jobFormData.job}
                onChange={handleChange}
                required
                pattern=".{2,}"/>
            <label>
                Dollar Per Hour
            </label>
            <input 
                name="money"
                placeholder="$"
                value={jobFormData.money}
                onChange={handleChange}
                required />
            <button type="submit">Add Job</button>
       </form>
      </div>
    );
  }