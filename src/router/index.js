import React, {Component} from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from './asyncComponent'
const Hello = asyncComponent(() => import('@/views/helloWorld/index'))
const Test = asyncComponent(() => import('@/views/test/index'))

export default class Basicroute extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/hello" exact component= {Hello}/>
          <Route path="/test/:test" component= {Test}/>
          <Redirect exact from='/' to='/hello'/>
          <Route component= {Hello}/>
        </Switch>
      </HashRouter>
    )
  }
}