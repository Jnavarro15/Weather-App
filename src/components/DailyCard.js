import React from 'react'
import { FaSun } from 'react-icons/fa'
var moment = require('moment')

const DailyCard = ({ reading }) => {
  let newDate = new Date()
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)
  console.log(newDate)

  return (
    <div className='card'>
      <h3 className='card-day'>Monday</h3>
      <p className='card-date'>June 22nd, 1:00 PM</p>
      <i className='img-icon'><FaSun /></i>
      <h2>86 °F </h2>
      <div className='card-text'>
        <p className='card-desc'>Sunny</p>
      </div>
    </div>
  )
}

export default DailyCard
