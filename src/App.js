import React from 'react';
import WeekContainer from './components/WeekContainer';
import Search from './components/Search';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dailyData: []
    }

    this.updateWeather = this.updateWeather.bind(this)
  }

  updateWeather(data) {
    console.log(data)

    this.setState({
      dailyData: data
    })
  }

  render() {
    return (
      <div className="App">
        <Search updateWeather={this.updateWeather} />
        <WeekContainer />
      </div>
    );
  }
}

export default App;
