import React, { Component } from 'react'
import DailyCard from './DailyCard'

export class WeekContainer extends Component {
  state = {
    fullData: [],
    dailyData: []
  }

  // componentDidMount = () => {
  //   const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=60506,us&appid=${apiConfig.omwKey}`

  //   fetch(weatherURL)
  //     .then(res => res.json())
  //     .then(data => {
  //       const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
  //       this.setState({
  //         fullData: data.list,
  //         dailyData
  //       }, () => console.log(this.state))
  //     })
  // }

  formatDailyCards = () => {
    return this.state.dailyData.map((reading, index) => <DailyCard reading={reading} key={index} />)
  }
  render() {
    return (
      <div className='week-container'>
        {/* {this.formatDailyCards()} */}
      </div>
    )
  }
}

export default WeekContainer
