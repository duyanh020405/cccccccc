import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Job.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { FaSortUp, FaSortDown, FaDollarSign, FaCalendarAlt } from 'react-icons/fa';
import { RxReset } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<any[]>([]);  // State to store jobs
  const [loading, setLoading] = useState<boolean>(true);  // Loading state
  const [error, setError] = useState<string | null>(null);  // Error state
  const [searchQuery, setSearchQuery] = useState<string>('');  // Search query for filtering jobs
  const [currentPage, setCurrentPage] = useState<number>(1);  // Current page for pagination
  const [jobsPerPage] = useState<number>(5);  // Number of jobs to show per page
  const navigate = useNavigate();  // For navigation

  useEffect(() => {
    localStorage.setItem('bussinessOnl','4')
    const businessId = localStorage.getItem('bussinessOnl');
    if (businessId) {
      axios
        .get(`http://localhost:8080/bussiness/${businessId}`)
        .then((response) => {
          // Assuming the response structure is { jobs: [...] }
          setJobs(response.data.jobs || []);  // Extract jobs from the response
          setLoading(false);
        })
        .catch((err) => {
          setError('Failed to fetch jobs');
          setLoading(false);
        });
    } else {
      setError('Business ID not found');
    }
  }, []);

  const handleDelete = (jobId: string) => {
    const businessId = localStorage.getItem('bussinessOnl');  // Get the business ID from localStorage

    if (!businessId) {
      setError('Business ID not found');
      return;
    }

    const confirmDelete = window.confirm('Are you sure you want to delete this job?');

    if (confirmDelete) {
      // Send DELETE request to remove the job from the business
      axios
        .delete(`http://localhost:8080/bussiness/${businessId}/jobs/${jobId}`)
        .then(() => {
          // If deletion is successful, update the state to remove the job
          setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
        })
        .catch((err) => {
          setError('Failed to delete the job');
          console.error(err);
        });
    }
  };

  const handleAdd = () => {
    navigate('/business/addJob');
  };

  const handleEdit = (id: string) => {
    console.log('Editing job with ID:', id);
  };

  const sortByDate = (order: 'asc' | 'desc') => {
    const sortedJobs = [...jobs].sort((a, b) => {
      const dateA = new Date(a.createAt).getTime();
      const dateB = new Date(b.createAt).getTime();
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
    setJobs(sortedJobs);
  };

  const sortBySalary = (order: 'asc' | 'desc') => {
    const sortedJobs = [...jobs].sort((a, b) => {
      const salaryA = parseFloat(a.salaryStart);
      const salaryB = parseFloat(b.salaryStart);
      return order === 'asc' ? salaryA - salaryB : salaryB - salaryA;
    });
    setJobs(sortedJobs);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const handleReset = () => {
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="job-list">
      <h2>Job Opportunities</h2>
      <input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={handleReset} className="btn-reset">
        <RxReset /> Reset
      </button>
      <button onClick={handleAdd} className="btn-add">
        Add Job
      </button>

      {loading && <p>Loading jobs...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="sort-options">
        <button onClick={() => sortByDate('asc')} className="sort-btn">
          <FaCalendarAlt /> Sort by Date (Asc) <FaSortUp />
        </button>
        <button onClick={() => sortByDate('desc')} className="sort-btn">
          <FaCalendarAlt /> Sort by Date (Desc) <FaSortDown />
        </button>
        <button onClick={() => sortBySalary('asc')} className="sort-btn">
          <FaDollarSign /> Sort by Salary (Asc) <FaSortUp />
        </button>
        <button onClick={() => sortBySalary('desc')} className="sort-btn">
          <FaDollarSign /> Sort by Salary (Desc) <FaSortDown />
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Enterprise ID</th>
              <th>Title</th>
              <th>Salary</th>
              <th>Experience</th>
              <th>Created At</th>
              <th>Expired At</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.map((job) => (
              <tr key={job.id}>
                <td>{job.enterpriseId}</td>
                <td>{job.title}</td>
                <td>{job.salaryStart}-{job.salaryEnd}$</td>
                <td>{job.expStart}-{job.expEnd} Months</td>
                <td>{job.createAt}</td>
                <td>{job.expiredAt}</td>
                <td>{job.des}</td>
                <td>{job.status ? 'Active' : 'Pending...'}</td>
                <td>
                  <button onClick={() => handleEdit(job.id)} className="btn-edit">
                    <FaEdit /> Edit
                  </button>
                  <button onClick={() => handleDelete(job.id)} className="btn-delete">
                    <FaTrashAlt /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default JobList;
