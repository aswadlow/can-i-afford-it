import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AuthPage from '../AuthPage/AuthPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import JobDetailsPage from '../JobDetailsPage/JobDetailsPage';
import MonthlyExpsDetailsPage from '../MonthlyExpsDetailsPage/MonthlyExpsDetailsPage';
import NavBar from '../../components/NavBar/NavBar';
import * as jobsAPI from '../../utilities/jobs-api'; 
import * as monthlysAPI from '../../utilities/monthlys-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [jobs, setJobs] = useState([])
  const [monthlyExps, setMonthlyExps] = useState([])

  useEffect(function() {

    getJobs();
    getMonthlyExps();
  }, [])


  function addJob(newJob){
    setJobs([...jobs, newJob])
  }

  function addMonthlyExp(newMonthlyExp){
    setMonthlyExps([...monthlyExps, newMonthlyExp])
  }

  async function getMonthlyExps() {
    const newMonthlyExps = await monthlysAPI.getAll();
    setMonthlyExps(newMonthlyExps)
  }

  async function getJobs() {
    const newJobs = await jobsAPI.getAll();
    setJobs(newJobs)
  }


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} /> 
            <Routes>
              {/* Route components in here */}
              <Route path="/profile" element={<ProfilePage jobs={jobs} setJobs={setJobs} monthlyExps={monthlyExps} setMonthlyExps={setMonthlyExps} getMonthlyExps={getMonthlyExps} getJobs={getJobs} addJob={addJob} addMonthlyExp={addMonthlyExp}  />} />
              <Route path="/jobs/:id" element={<JobDetailsPage jobs={jobs}/>} />
              <Route path="/expenses/:id" element={<MonthlyExpsDetailsPage monthlyExps={monthlyExps} />} />
              <Route path="/*" element={<Navigate to="/profile" />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
