import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';

import '../../App.css';
import Routes from "./Routes";
import configureStore from '../../store/configureStore';

const store = configureStore(createHistory())
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
