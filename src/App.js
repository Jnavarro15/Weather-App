import React from 'react';
import Search from './components/Search';
import WeekContainer from './components/WeekContainer';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dailyData: [],
      data: [],
      isLoaded: false
    }

    this.updateWeather = this.updateWeather.bind(this)
    this.updateZip = this.updateZip.bind(this)

  }

  updateZip(newZip) {
    this.setState({
      isLoaded: !this.state.isLoaded
    })
  }

  updateWeather(data, dailyData) {
    console.log(dailyData)

    this.setState({
      dailyData: dailyData,
      data: data,
      isLoaded: true
    })
  }


  render() {
    const isLoaded = this.state.isLoaded
    return (
      <div className='App'>
        <Search updateZip={this.updateZip} updateWeather={this.updateWeather} />
        {isLoaded ? <WeekContainer dailyData={this.state.dailyData} /> : null}
      </div>

    );
  }
}

export default App;
