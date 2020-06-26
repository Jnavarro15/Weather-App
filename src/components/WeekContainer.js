import React from 'react'
import DailyCard from './DailyCard'

const WeekContainer = (props) => {

  const formatDailyCards = () => {
    return props.dailyData.map((reading, index) => <DailyCard reading={reading} key={index} />)
  }

  return (
    <div className='week-container'>
      {formatDailyCards()}
    </div>
  )
}

export default WeekContainer
