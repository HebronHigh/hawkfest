import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Map from './components/Map'
import About from './components/About'
import Contact from './components/Contact'
import Credit from './components/Credit'

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

