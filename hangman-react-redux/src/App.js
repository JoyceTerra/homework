import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {Route} from 'react-router-dom'
import WelcomeContainer from './components/WelcomeContainer'
import ShowWelcome from './components/ShowWelcome'
import store from './store'
import './App.css'


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Route exact path="/" component={ WelcomeContainer } />
          <Route  path="/hangman" component={ ShowWelcome } />

        </div>
      </Provider>
    );
  }
}

export default App;
