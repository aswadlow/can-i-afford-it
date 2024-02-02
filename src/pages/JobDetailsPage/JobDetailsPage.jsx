import { useState} from 'react';
import JobEditForm from "../../components/JobEditForm/JobEditForm";
import { useParams } from "react-router-dom";
import * as jobsAPI from '../../utilities/jobs-api'; 




export default function JobDetails({jobs, jobFormData, setJobFormData}){
    const [showJobDetails, setShowJobDetails] = useState('false')
    const { id } = useParams();
    const jobDetail = jobs.find((job) => job._id === id )
    
   
    async function handleJobEdit(evt){
        setShowJobDetails(true)
    }


    return (
        <>
            {showJobDetails ? (
                <JobEditForm jobFormData={jobFormData}  />
            ) : (
                <div className="container">
                    <h2>Job Details</h2>
                    <p>Job: {jobDetail.job}</p>
                    <p>Dollar per Hour: ${jobDetail.money}</p>
                    <button onClick={handleJobEdit}>Edit Job</button>
                    {showJobDetails && <button type='button' onClick={() => setShowJobDetails(false)}>Cancel</button>}
                </div>
            )}
        </>
    )
}

