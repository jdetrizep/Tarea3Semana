import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { useAlbums } from '../../../contexts/album-context';
import { IState } from '../../../models/IState';
import AlbumDetails from '../../molecules/AlbumDetails';
import AlbumList from '../../molecules/AlbumList';
import ListaAlbums from '../../organisms/ListaAlbums';

const HomeScreen: React.FC = () => {
    //const selectedUser = useSelector((state: IState) => state.Albumns.selectedAlbum);
    const { selectedAlbum } = useAlbums();

    //return <View>{selectedUser ? <AlbumDetails /> : <AlbumList />}</View>;
    //return <View> <AlbumList /> </View>
    return <View>{selectedAlbum ? <AlbumDetails /> : <ListaAlbums />}</View>;
};

export default HomeScreen;