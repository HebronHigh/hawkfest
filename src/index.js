import React from 'react';
import Analytics from 'react-router-ga';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './fonts/Ultrathins.ttf'
import './fonts/leaves_and_ground.ttf'

ReactDOM.render(
  <React.StrictMode>
    <Analytics id='UA-193267831-1' debug>
      <App />
    </Analytics>

  </React.StrictMode>,
  document.getElementById('root')
);