import React from 'react'
import { useEffect } from 'react';
import { Text, FlatList, View, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { useAlbums } from '../../../contexts/album-context';
import { IState } from '../../../models/IState';
import { fetchAlbums } from '../../../store/actions/Album';
import AlbumListItem from '../../molecules/AlbumListItem';

const AlbumList: React.FC = () => {
    /*const dispatch = useDispatch();
    const albums = useSelector(
        (state: IState) => state.Albumns.albums,
    );*/

    const { albums, fetchAlbums } = useAlbums();

    useEffect(() => {
        //dispatch(fetchAlbums());
        fetchAlbums();
    }, []);

    return (
        <View>
            {albums.length > 0 ? (
                <FlatList
                    data={albums}
                    renderItem={({ item, index }) => (
                        <AlbumListItem key={item.id} album={item} index={index} />
                    )}
                />
            ) : (
                <ActivityIndicator color="#000" />
            )}
        </View>
    );
};

export default AlbumList;