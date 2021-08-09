
import React from 'react';
import { SafeAreaView, } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import HomeScreen from './src/components/screens/HomeScreen';
import * as reducers from './src/store/reducers';
import thunk from 'redux-thunk';
import { AlbumProvider } from './src/contexts/album-context';
import ListaAlbums from './src/components/organisms/ListaAlbums';
import { PhotosProvider } from './src/contexts/photo-context';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(compose(thunk)),
);

const App = () => {
  return (
    <Provider store={store}>
      <AlbumProvider>
        <PhotosProvider>
          <SafeAreaView>
            <HomeScreen />
            {/*<ListaAlbums />*/}
          </SafeAreaView>
        </PhotosProvider>
      </AlbumProvider>
    </Provider>
  );
};

export default App;
