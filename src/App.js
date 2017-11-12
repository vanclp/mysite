import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Profile from './containers/ProfileContainer'
import Resume from './containers/ResumeContainer'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/resume" component={Resume} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}
export default App
