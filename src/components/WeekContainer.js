import React from 'react'
import DailyCard from './DailyCard'
import DegreeType from './DegreeType'

class WeekContainer extends React.Component {
  state = {
    degreeType: "fahrenheit"
  }

  render() {

    const updateDegree = e => {
      this.setState({
        degreeType: e.target.value
      }, () => console.log(this.state))
    }

    if (this.props.dailyData !== []) {
      let weather = this.props.dailyData
      const formatDailyCards = () => {
        return weather.map((reading, index) => <DailyCard degreeType={this.state.degreeType} reading={reading} key={index} />)
      }

      return (
        <div className='week-container'>
          <div className="degree-toggle">
            <DegreeType updateDegree={updateDegree} degreeType={this.state.degreeType} />  
          </div>
          <div className='cards-container'>
            {formatDailyCards()}
          </div>
        </div>
      )

    } else {
      return (
        null
      )
    }

  }
}



export default WeekContainer
