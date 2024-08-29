import jobs from '../jobs.json'
import JobListing from '../components/JobListing'

const JobPage = () => {
  return (
      <div className='container-xl lg:container mt-28'>
        <h2 className='text-5xl font-bold text-indigo-500 mb-6 pt-0 text-center'>
          Broswer All Jobs avialable
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
  )
};

export default JobPage