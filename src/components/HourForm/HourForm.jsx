import React, { useState, useEffect } from 'react';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as hoursAPI from '../../utilities/hours-api';

export default function HourForm({ jobs }) {
    const [hoursFormData, setHoursFormData] = useState({
        job: '',
        numOfHours: '',
        numOfMins: '',
        date: new Date()
    });
    const [hours, setHours] = useState([]);
    const [totalHours, setTotalHours] = useState(0);
    const [totalMins, setTotalMins] = useState(0);
    const [totalAmountEarned, setTotalAmountEarned] = useState(0);

    useEffect(() => {
        const calculateTotalHoursAndMins = () => {
            let totalHoursCount = 0;
            let totalMinsCount = 0;

            for (const hour of hours) {
                totalHoursCount += parseInt(hour.numOfHours);
                totalMinsCount += parseInt(hour.numOfMins);
            }

            totalHoursCount += Math.floor(totalMinsCount / 60);
            totalMinsCount = totalMinsCount % 60;

            setTotalHours(totalHoursCount);
            setTotalMins(totalMinsCount);

            if(totalHours == 0){
                return 0
            }
            if(totalMins == 0){
                return 0
            }
        };

        calculateTotalHoursAndMins();
    }, [hours]);

    function addHours(addedHours){
        setHours([...hours, addedHours])
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const selectedJob = jobs.find(job => job._id === hoursFormData.job)
        const totalHoursWorked = parseFloat(hoursFormData.numOfHours) + parseFloat(hoursFormData.numOfMins) / 60;
        const totalAmountEarned = totalHoursWorked * selectedJob.money;
        setTotalAmountEarned(totalAmountEarned); 
        const addedHours = await hoursAPI.createHours(hoursFormData);
        addHours(addedHours);
        setHoursFormData({job: '', numOfHours: 0, numOfMins: 0, date: new Date(), totalAmountEarned});
    }

    function handleChange(evt) {
        setHoursFormData({ ...hoursFormData, [evt.target.name]: evt.target.value });
    }

    const hourOptions = [];
    for (let i = 0; i <= 20; i++) {
        hourOptions.push(<option key={i} value={i}>{i}</option>);
    }
    const minOptions = [];
    for(let i = 0; i <= 60; i++){
        minOptions.push(<option key={i} value={i}>{i}</option>);
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">
                            Job Name:
                            <select className="form-select" name="job" value={hoursFormData.job} onChange={handleChange}>
                                <option value=''>Select a Job</option>
                                {jobs.map((job) => <option key={job._id} value={job._id}>{job.job}</option>)}
                            </select>
                        </label>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                Hours:
                                <select className="form-select" name="numOfHours" value={hoursFormData.numOfHours} onChange={handleChange}>
                                    <option value={0}>Select Number of Hours</option>
                                    {hourOptions}
                                </select>
                            </label>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label">
                                Minutes:
                                <select className="form-select" name="numOfMins" value={hoursFormData.numOfMins} onChange={handleChange}>
                                    <option value={0}>Select Number of Minutes</option>
                                    {minOptions}
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Date:
                            <input className="form-control" type="date" name="date" value={hoursFormData.date} onChange={handleChange} />
                        </label>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>

            {/* time cards */}
             {/* <div className='card-body'>
                <h5 className='card-title text-orange'>Date: {hoursFormData.date}</h5>
                <h5 className='card-title text-orange'>Job: {hoursFormData.job}</h5>
                <h5 className='card-title text-orange'>Total Daily Hours: {hoursFormData.numOfHours}:{hoursFormData.numOfMins} </h5>
                <h5 className='card-title text-orange'>Earned: {totalAmountEarned.toFixed(2)}</h5>
            </div> */}
           
            {/* Total hours and money */}
            <div className="container mt-3">
                <div className="container mt-3">
                    <h5>Total Hours Worked:</h5>
                    <p>{totalHours} hours:{totalMins} minutes</p>
                </div>
                <div className="container mt-3">
                    <h5>Total Money Made:</h5>
                    <p>{totalAmountEarned.toFixed(2)}</p>
                </div>
            </div>
        </>
    );
}





//set up the form to have inputs for the number of hours worked num of minutes worked and the date worked 