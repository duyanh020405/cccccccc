import React, { useEffect, useState } from 'react';
import './Job_Manager.css';
import axios from 'axios';
import { Business } from '../../../interfaces/Bussiness';

export default function Job_Manager() {
  const [allJobSpending, setJob] = useState<Business[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/bussiness');
        setJob(response.data); // Assuming response.data is an array of businesses
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="job-manager">
      <h1>Job Manager from Business</h1>
      {allJobSpending.length > 0 ? (
        allJobSpending.map((business) => (
          <div key={business.id} className="business">
            <h2>{business.firstName} {business.lastName}</h2>
            <p>Email: {business.email}</p>
            <p>Address: {business.address}</p>
            <h3>Jobs:</h3>
            {business.jobs.length > 0 ? (
              <table className="job-table">
                <thead>
                  <tr>
                    <th>Job Title</th>
                    <th>Salary</th>
                    <th>Description</th>
                    <th>Experience Required</th>
                    <th>Status</th>
                    <th>Applicants</th>
                    <th>Expiry Date</th>
                  </tr>
                </thead>
                <tbody>
                  {business.jobs.map((job) => (
                    <tr key={job.id}>
                      <td>{job.title}</td>
                      <td>${job.salaryStart} - ${job.salaryEnd}</td>
                      <td>{job.des}</td>
                      <td>{job.expStart} - {job.expEnd} years</td>
                      <td>{job.status ? 'Active' : 'Inactive'}</td>
                      <td>{job.applicants}</td>
                      <td>{job.expiredAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No jobs available for this business.</p>
            )}
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
