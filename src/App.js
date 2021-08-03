import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Header from './components/Header/Header';
import AircraftList from './components/AircraftList/AircraftList';
import RotationList from './components/RotationList/RotationList';
import FlightList from './components/FlightList/FlightList';
import Timeline from './components/Timeline/Timeline';
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <div class='app-body'>
          <AircraftList />
          <RotationList />
          <FlightList />
        </div>
        <Timeline />
      </div>
    </Provider>
  )
}

export default App;
