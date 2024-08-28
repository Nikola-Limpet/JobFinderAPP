import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobsLists from "../components/JobsList"
import ViewAllJobs from "../components/ViewAllJobs"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <>
      <Hero 
        title="Find Your Most suitable job with Nick's portal"
        subtitle= "We provides a wide range of opportunity for developers to get a job in tech with the high paying salary" />
      <HomeCards />
      <JobsLists />
      <ViewAllJobs />
      <Footer />
    </>
  )
};

export default HomePage;