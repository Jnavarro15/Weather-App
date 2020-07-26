import React from 'react'
import { FaSun } from 'react-icons/fa'
var moment = require('moment')

const DailyCard = ({ reading, degreeType }) => {
  let newDate = new Date()
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)
  console.log(newDate)

  const fahrenheit = Math.round(reading.main.temp)
  const celsius = Math.round((fahrenheit - 32) * 5 / 9)


  return (
    <div className='card'>
      <h3 className='card-day'>{moment(newDate).format('dddd')}</h3>
      <p className='card-date'>{moment(newDate).format('MMMM Do, h:mm a')}</p>
      <i className='img-icon'><FaSun /></i>
      {/* <h2>{degreeType === "celsius" ? celsius + "°C" : null}</h2> */}
      <h2>{degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h2>
      <div className='card-text'>
        <p className='card-desc'>{reading.weather[0].description}</p>
      </div>
    </div>
  )
}

export default DailyCard
