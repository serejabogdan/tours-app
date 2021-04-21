import React from 'react';
import './App.css';
import Header from '../Header';
import Cards from '../../shared/Cards';
import Welcome from '../Welcome';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Welcome />
      </div>
      <Cards title="Кращі країни для відпустки" />
      <Cards title="Акції" />
      <Cards title="Хіти" />
    </div>
  );
}

export default App;
