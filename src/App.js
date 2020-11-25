import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Catalog from './components/sidebar/Catalog'

// Redux
import { Provider } from 'react-redux';
import store from '../src/redux/store';


function App() {



  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={Catalog}></Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
