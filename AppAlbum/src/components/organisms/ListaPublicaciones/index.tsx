import styled from '@emotion/native';
import React from 'react'
import { useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from "react-native";
import { usePublicaciones } from "../../../contexts/publicaciones-context";
import PublisListItem from "../../molecules/PublisListItem";


const ListaPublicaciones: React.FC = () => {
    const { publis, fetchPublicaciones } = usePublicaciones();

    useEffect(() => {
        fetchPublicaciones();
    }, []);

    return (
        <View>
            {publis.length > 0 ? (
                <FlatList
                    data={publis}
                    renderItem={({ item, index }) => (
                        <PublisListItem key={item.id} publicacion={item} index={index} />
                    )}
                />
            ) : (
                <ActivityIndicator color="#000" />
            )}
        </View>
    );
};

export default ListaPublicaciones;