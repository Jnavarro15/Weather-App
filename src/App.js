import React from 'react';
import Search from './components/Search';
import Error from './components/Error';
import WeekContainer from './components/WeekContainer';
import history from './history'
import { Router, Route, Switch } from 'react-router-dom';

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
      <main className='App'>
        <Router history={history}>
          <Switch>
            <Route path='/' render={props => <Search updateWeather={this.updateWeather} />} exact />
            <Route path='/forecast' render={props => <WeekContainer dailyData={this.state.dailyData} />} />
            <Route component={Error} />
          </Switch>
        </Router>
      </main>

    );
  }
}

export default App;
