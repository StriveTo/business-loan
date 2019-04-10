import React, {Component} from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from './asyncComponent'
const Hello = asyncComponent(() => import('@/views/helloWorld/index'))

export default class Basicroute extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/hello" exact component= {Hello}/>
          <Redirect exact from='/' to='/hello'/>
          <Route component= {Hello}/>
        </Switch>
      </HashRouter>
    )
  }
}