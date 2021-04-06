import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Map from './components/Map'
import React from 'react'
import ReactGA from 'react-ga';
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Credit from './components/Credit'

ReactGA.initialize('UA-193267831-1')

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/hawkfest' component={Map} />
            <Route exact path='/hawkfest/about' component={About} />
            <Route exact path='/hawkfest/contact' component={Contact} />
            <Route exact path='/hawkfest/credit' component={Credit} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

