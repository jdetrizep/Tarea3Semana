import React from 'react'
import { useEffect } from 'react';
import { Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../models/IState';
import { fetchAlbums } from '../../../store/actions/Album';

const ListaAlbums = () => {
    const dispatch = useDispatch();
    const albums = useSelector(
        (state: IState) => state.Albumns.albums,
    );

    useEffect(() => {
        dispatch(fetchAlbums());
    }, []);

    return (
        <FlatList data={albums} renderItem={({ item }) => <Text>{item.title}</Text>} />
    )
}

export default ListaAlbums