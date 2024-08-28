import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-blue-300 text-
      white text-center p-4 text-2xl ">
        <p>&copy; {currentYear} Nick</p>
      </footer>
  )
}

export default Footer