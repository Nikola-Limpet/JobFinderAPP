import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-white-600 text-
      white text-center p-4">
        <p>&copy; {currentYear} Nick</p>
      </footer>
  )
}

export default Footer