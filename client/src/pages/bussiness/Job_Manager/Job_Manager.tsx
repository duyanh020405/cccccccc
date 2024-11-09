import React, { useEffect, useState } from 'react';
import './Job_Manager.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Business } from '../../../interfaces/Bussiness'; // Import the Business type

export default function Job_Manager() {
  const navigate = useNavigate();
  const [bussiness, setBussiness] = useState<Business | null>(null);

  // Fetching business data and checking the localStorage
  useEffect(() => {
    localStorage.setItem('idbussiness', '4'); // For testing purposes, setting a business ID

    const id = localStorage.getItem('idbussiness');
    if (id) {
      axios.get(`http://localhost:8080/bussiness/${id}`)
        .then(response => {
          setBussiness(response.data);
        })
        .catch(error => {
          console.error('Error fetching business data:', error);
        });
    }

    const bussinessOnl = localStorage.getItem('bussinessOnl');
    if (bussinessOnl) {
      const parsedData: Business = JSON.parse(bussinessOnl);
      if (parsedData.role === 'bussiness') {
        setBussiness(parsedData);
      } else {
        alert('This is not a business account');
        // Uncomment if you want to navigate back to home
        // navigate('/');
      }
    }
  }, [navigate]);
  const [newJob, setNewJob] = useState({
    id: Math.random().toString(36).substr(2, 9),
    enterpriseId: 0,
    title: '',
    salaryStart: 0,
    salaryEnd: 0,
    createAt: '',
    expiredAt: '',
    des: '',
    expStart: '',
    expEnd: '',
    status: false,
    applicants: 0,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setNewJob(prevJob => ({
      ...prevJob,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (newJob.salaryEnd < newJob.salaryStart) {
      newErrors.salaryEnd = 'Salary End must be greater than or equal to Salary Start';
    }
    if (newJob.expStart && newJob.expEnd && newJob.expEnd > newJob.expStart) {
      newErrors.expEnd = 'Experience End must be greater than or equal to Experience Start';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      const jobToAdd = { ...newJob };
      if (bussiness) {
        const updatedBussiness = {
          ...bussiness,
          jobs: [...bussiness.jobs, jobToAdd],
        };
        setBussiness(updatedBussiness);
        localStorage.setItem('bussinessOnl', JSON.stringify(updatedBussiness));

        try {
          await axios.put(`http://localhost:8080/bussiness/${bussiness.id}`, updatedBussiness);
          setNewJob({
            id: Math.random().toString(36).substr(2, 9),
            enterpriseId: 0,
            title: '',
            salaryStart: 0,
            salaryEnd: 0,
            createAt: '',
            expiredAt: '',
            des: '',
            expStart: '',
            expEnd: '',
            status: false,
            applicants: 0,
          });
        } catch (error) {
          console.error('Error updating business:', error);
        }
      }
    }
  };

  return (
    <div>
      {bussiness && (
        <div>
          <h3>Business Information</h3>
          <p>UserName: {bussiness.userName}</p>
          <p>Role: {bussiness.role}</p>
        </div>
      )}

      <div className="job-manager">
        <h2>Create Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Enterprise ID:
              <input
                type="number"
                name="enterpriseId"
                value={newJob.enterpriseId}
                onChange={handleChange}
                className="input"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Job Title:
              <input
                type="text"
                name="title"
                value={newJob.title}
                onChange={handleChange}
                className="input"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Salary Start:
              <input
                type="number"
                name="salaryStart"
                value={newJob.salaryStart}
                onChange={handleChange}
                className="input"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Salary End:
              <input
                type="number"
                name="salaryEnd"
                value={newJob.salaryEnd}
                onChange={handleChange}
                className={`input ${errors.salaryEnd ? 'input-error' : ''}`}
              />
              {errors.salaryEnd && <span className="error">{errors.salaryEnd}</span>}
            </label>
          </div>

          <div className="form-group">
            <label>
              Created At:
              <input
                type="date"
                name="createAt"
                value={newJob.createAt}
                onChange={handleChange}
                className="input"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Expired At:
              <input
                type="date"
                name="expiredAt"
                value={newJob.expiredAt}
                onChange={handleChange}
                className="input"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Description:
              <textarea
                name="des"
                value={newJob.des}
                onChange={handleChange}
                className="input"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Experience Start:
              <input
                type="number"
                name="expStart"
                value={newJob.expStart}
                onChange={handleChange}
                className="input"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Experience End:
              <input
                type="number"
                name="expEnd"
                value={newJob.expEnd}
                onChange={handleChange}
                className={`input ${errors.expEnd ? 'input-error' : ''}`}
              />
              {errors.expEnd && <span className="error">{errors.expEnd}</span>}
            </label>
          </div>

          <button type="submit" className="submit-btn">Create Job</button>
        </form>
      </div>
    </div>
  );
}
