import React from 'react'
import './styles/Orderstat.scss'
function Orderstat({title,value}) {
  return (
    <div className='orders'>
     <h4>{title}</h4>
     <p>{value}</p>
    </div>
  )
}

export default Orderstat