import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Roster from './Roster.jsx'

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/roster' component={Roster}/>
    </Switch>
  </div>
)

export default Routes
