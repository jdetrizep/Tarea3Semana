import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { IState } from '../../../models/IState';
import AlbumDetails from '../../molecules/AlbumDetails';
import AlbumList from '../../molecules/AlbumList';

const HomeScreen: React.FC = () => {
    const selectedUser = useSelector((state: IState) => state.Albumns.selectedAlbum);

    return <View>{selectedUser ? <AlbumDetails /> : <AlbumList />}</View>;
    //return <View> <AlbumList /> </View>
};

export default HomeScreen;