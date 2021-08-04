
import React from 'react';
import { SafeAreaView, } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import HomeScreen from './src/components/screens/HomeScreen';
import * as reducers from './src/store/reducers';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(compose(thunk)),
);

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>

    </Provider>
  );
};

export default App;
