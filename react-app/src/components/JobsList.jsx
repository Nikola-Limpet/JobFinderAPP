import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'



const JobsList = () => {

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
      {displayJobsNew.map((job) => (
        <JobListing key={job.id} job={job} />
      ))}
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