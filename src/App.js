import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Map from './components/Map'

function App() {
  return (
    <BrowserRouter>
      <Map />
      <Route exact path='/hawkfest2021/pages/Lesotho/General%20Info.html' render={() => { window.location.href = "/hawkfest2021/pages/Lesotho/General%20Info.html" }} />
    </BrowserRouter>

  );
}

export default App;
