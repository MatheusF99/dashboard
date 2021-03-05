import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Landing from './pages/landing/landing';
import Users from './pages/Users/Users';
//pages



function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/dashboard" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/users" component={Users} />

    </BrowserRouter>
  )
}
export default Routes;