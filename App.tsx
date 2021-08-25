import React from 'react';
import {Provider} from 'react-redux';
import AppNavContainer from './src/navigations';
import 'react-native-gesture-handler';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavContainer />
    </Provider>
  );
};

export default App;

//1:58:00
