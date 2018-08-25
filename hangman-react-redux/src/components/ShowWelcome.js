import * as React from 'react'
import {Link} from 'react-router-dom'


export default function WelcomeDisplay() {
  return (
    <div>
      <h1>Start playing</h1>
        <Link to={ `/hangman` }><button>PLAY</button></Link>
    </div>
  )
}