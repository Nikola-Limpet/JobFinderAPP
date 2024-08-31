import JobsList from '../components/JobsList'

const JobsPage = () => {
  return (
      <div className='container-xl lg:container mt-28'>
        <h2 className='text-5xl font-bold text-indigo-500 mb-6 pt-0 text-center'>
          Broswer All Jobs avialable
        </h2>
          <JobsList />
      </div>
  )
};

export default JobsPage;