import React, { Component } from 'react'
import { GoSearch } from "react-icons/go"
import apiConfig from '../apiKeys'

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: 'no_error'
    }

    this.cityInput = React.createRef()

    this.startSearch = this.startSearch.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  startSearch(e) {
    console.log("Search! " + this.cityInput.current.value)
    this.props.updateZip(this.cityInput.current.value)
    if (this.cityInput.current.value !== "") {
      this.fetchData();

      this.setState({
        error: 'no_error'
      })
    }
    e.preventDefault()
  }

  fetchData() {
    let cityZip = this.cityInput.current.value

    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${cityZip},us&appid=${apiConfig.omwKey}&units=imperial`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response
      })
      .then(response => response.json())
      .then(data => {
        const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        this.props.updateWeather(data, dailyData)
      })
      .catch(error => {
        this.setState({
          error: 'yes_error'
        })
        console.log(error)
      })

  }


  render() {
    return (
      <div className={'searchMain ' + this.state.error}>
        <h1>How's the weather this week? </h1>
        <form onSubmit={this.startSearch}>
          <input
            className='citySearch'
            placeholder='enter city zipcode'
            ref={this.cityInput}
            type='text'
          />
          <button className='searchButton'><GoSearch /></button>
        </form>
      </div>
    )
  }
}
