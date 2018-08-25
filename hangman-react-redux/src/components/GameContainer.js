import * as React from 'react'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'
import { randomWord } from '../lib/game'

class GameContainer extends React.PureComponent{
    componentDidMount() {
       // console.log(randomWord())

       this.props.newGame(randomWord())

      }
      render(){
          return (
              <div>
              <h1>Game Container</h1>
          
              </div>
          )
      }
}

const mapStateToProps = (state) => {
    //console.log(state)
    return{
        game: state.game
    }
}

export default connect(mapStateToProps, {newGame})(GameContainer) 
