import React from 'react'

const Cards = ({children, bg= 'bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg bg-gradient-to-tr from-cyan-200 via-slate-100 to-indigo-200 shadow-md`}>
      {children}
    </div>
  )
}

export default Cards