import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/createStore';
import Router from './router';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
