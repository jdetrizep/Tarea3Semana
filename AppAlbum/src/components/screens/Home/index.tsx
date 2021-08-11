import React from 'react';
import { View } from 'react-native';
import { useAlbums } from '../../../contexts/album-context';
import AlbumDetails from '../../molecules/AlbumDetails';
import ListaAlbums from '../../organisms/ListaAlbums';
import ListaPublicaciones from '../../organisms/ListaPublicaciones';

const Home: React.FC = () => {

    return <View><ListaPublicaciones /></View>;
};

export default Home;