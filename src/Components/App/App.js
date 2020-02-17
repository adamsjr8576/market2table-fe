import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import ZipCodeForm from '../../Containers/ZipCodeForm/ZipCodeForm';
import MarketContainer from '../../Containers/MarketContainer/MarketContainer';
import MapsContainer from '../../Containers/MapsContainer/MapsContainer';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <main className="app-main">
      <Route path='/' render={() => {
        return <Header />
        }}
      />
      <Route exact path='/' render={() => {
        return <ZipCodeForm />
        }}
      />
      <Route exact path='/markets' render={() => {
        return (
          <div className='market-map-container'>
            <MarketContainer />
            <MapsContainer />
          </div>
        )
        }}
      />
    </main>
  );
}

export default App;
