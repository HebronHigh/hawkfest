import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Map from './components/Map'
import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history';

function App() {
  const history = createBrowserHistory();
  history.listen(location => {
    ReactGA.initialize('UA-193267831-1');
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  })
  return (
    <BrowserRouter history={history}>
      <Map />
      <Route exact path='/hawkfest/pages/Lesotho/General%20Info.html' render={() => { window.location.href = "/hawkfest/pages/Lesotho/General%20Info.html" }} />
    </BrowserRouter>

  );
}

export default App;
