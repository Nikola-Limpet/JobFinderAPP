import React from 'react';
import NavBar from './components/NavBar'; // Adjust the path as necessary
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';

function App() {
  return (
    <>
      <NavBar />
      <Hero  
        title= 'Find your most suitable job here!'
        subtitle = "With Nick's Job Portal, you can find a wide range of job opportunities, from temporary work to permanent positions. For employers, we offer a range of services to help you find the right candidate for your company."
      />
      
      <HomeCards />
    </>
  );
}

export default App;