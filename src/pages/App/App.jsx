import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AuthPage from '../AuthPage/AuthPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import * as jobsAPI from '../../utilities/jobs-api'; 
import * as monthlysAPI from '../../utilities/monthlys-api'; 

export default function App() {
  const [user, setUser] = useState(getUser());
  const [jobs, setJobs] = useState([])
  const [monthlyExps, setMonthlyExps] = useState([])

  async function getMonthlyExps() {
    const newMonthlyExps = await monthlysAPI.getAll();
    setMonthlyExps(newMonthlyExps)
  }

  async function getJobs() {
    const newJobs = await jobsAPI.getAll();
    setJobs(newJobs)
  }
  

  useEffect(function() {

    getJobs();
    getMonthlyExps();
  }, [])




  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} /> 
            <Routes>
              {/* Route components in here */}
              <Route path="/profile" element={<ProfilePage jobs={jobs} setJobs={setJobs} monthlyExps={monthlyExps} setMonthlyExps={setMonthlyExps} getMonthlyExps={getMonthlyExps} getJobs={getJobs}  />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/*" element={<Navigate to="/profile" />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
