import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss'
import { Navbar } from './navbar/navbar'

function NotFound() {
  return <div>Not found</div>
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <h1>Hello World</h1>} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
