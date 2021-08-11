
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
import Home from './src/components/screens/Home';
import BottomTabNav from './src/navigators/BottomTabNav';
import { NavigationContainer } from '@react-navigation/native';
import { PublicacionesProvider } from './src/contexts/publicaciones-context';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(compose(thunk)),
);

const App = () => {
  return (
    <Provider store={store}>
      <PublicacionesProvider>
        <AlbumProvider>
          <PhotosProvider>
            {<NavigationContainer>
              <BottomTabNav />
            </NavigationContainer>}
            {/*<HomeScreen />*/}
            {/*<ListaAlbums />*/}
          </PhotosProvider>
        </AlbumProvider>
      </PublicacionesProvider>
    </Provider>
  );
};

export default App;
