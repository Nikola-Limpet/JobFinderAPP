import { Link } from 'react-router-dom'

const ViewAllJobs = () => {
  return (
    <button className='bg-blue-50 px-4 py-10'>
      <Link
        to='/jobs'
        className='text-3xl font-bold text-indigo-500 mb-6 text-center'
      >
        View All Jobs
      </Link>
    </button>
  )
}

export default ViewAllJobs