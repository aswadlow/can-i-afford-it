import { useState} from 'react';

export default function JobEditForm({jobFormData, setJobFormData,}){
    const [editJobDetails, setEditJobDetails] = useState()

    function handleChange(){
        setEditJobDetails([])
    }

    return (
        <>
            <h2>Job Edit Form</h2>
            <section>
                <form >
                    <label>
                        Job
                    </label>
                        <input 
                            name="job"
                            placeholder="Job Name"
                            value={jobFormData.job}
                            onChange={handleChange} 
                            />
                    <label>
                        Dollar Per Hour
                    </label>
                        <input 
                            name="money"
                            placeholder="$"
                            value={jobFormData.money}
                            onChange={handleChange} 
                            />
                    <button type="submit">Add Job</button>
                </form>

            </section>
        </>
    )
}