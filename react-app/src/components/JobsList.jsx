import { useState, useEffect } from 'react';
import JobListing from './JobListing'



const JobsList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => { 
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:3001/jobs');
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

const displayJobsNew = jobs.slice(0,3); // Display only the first 3 jobs
const displayJobsRecent = jobs.slice(3,6); // Display only the next 3 jobs



  return (
  <>
    <div className='container-xl lg:container m-auto'>
      <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
        Broswer Jobs 
      </h2>
      <p className='text-center font-bold text-2xl text-gray-600 mb-6'>
        Browse through the latest job listings on Nick's Job Portal.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        { loading ? (
          <div className='flex justify-center items-center h-full w-full'>
            <div className='text-center text-7xl font-bold text-indigo-500'>
              🌀
            </div>
          </div>
        ) : ( 
          <>
            {displayJobsNew.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </>
        )}
      </div>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 mt-6 text-center'>
          Recent Jobs
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {displayJobsRecent.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  </>
  )
}


export default JobsList;