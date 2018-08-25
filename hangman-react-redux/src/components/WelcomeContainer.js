import * as React from 'react'
import ShowWelcome from './ShowWelcome'

class WelcomeContainer extends React.PureComponent {
    
    componentDidMount(){

    }

    render(){
        return(
          <div>
            <h1>Welcome to Hangman</h1>
            <ShowWelcome />
          </div>
        )
    }
}

export default  WelcomeContainer 