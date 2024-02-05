import React, { useState } from 'react';
import JobEditForm from "../../components/JobEditForm/JobEditForm";
import { useParams } from "react-router-dom";


export default function JobDetails({jobs, updateJobsState}){
    const [showForm, setShowForm] = useState(false);
    const { id } = useParams();
    const job = jobs.find((job) => job._id === id);
    
    function handleButtonClick(){
        setShowForm(!showForm);
    }

    return (
        <div className="container mt-4">
          {showForm ? (
            <JobEditForm job={job} setShowForm={setShowForm} updateJobsState={updateJobsState} />
          ) : (
            <>
              <h2>Job Details</h2>
              {job ? (
                <>
                  <p>Job: {job.job}</p>
                  <p>Dollar per Hour: ${job.money}</p>
                  <button onClick={handleButtonClick} className="btn btn-primary">
                    {showForm ? 'Hide' : 'Show'} Edit Form
                  </button>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </>
          )}
        </div>
    );
}

