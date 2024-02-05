import React, { useState } from 'react';
import * as jobsAPI from '../../utilities/jobs-api';

export default function JobEditForm({ job, setShowForm, updateJobsState }) {
  const [formData, setFormData] = useState({
    job: job.job,
    money: job.money,
  });

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const updatedJob = await jobsAPI.updateJob(formData, job._id);
    updateJobsState(updatedJob);
    setShowForm(false);
  }

  return (
    <div className="container mt-4">
      <section>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="job" className="form-label">
              Job
            </label>
            <input
              type="text"
              className="form-control"
              id="job"
              name="job"
              placeholder="Job Name"
              value={formData.job}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="money" className="form-label">
              Dollar Per Hour
            </label>
            <input
              type="text"
              className="form-control"
              id="money"
              name="money"
              placeholder="$"
              value={formData.money}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update Job
          </button>
        </form>
      </section>
    </div>
  );
}
