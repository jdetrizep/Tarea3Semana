import styled from "@emotion/native";
import React, { useEffect, useMemo } from "react";
import { Button, FlatList, Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../models/IState";
import { actualizarSelectedAlbum, fetchAlbums } from "../../../store/actions/Album";
import { fetchPhotos } from "../../../store/actions/Photo";

const AlbumDetails: React.FC = () => {
    const dispatch = useDispatch();
    const selectedAlbum = useSelector((state: IState) => state.Albumns.selectedAlbum);
    const albums = useSelector((state: IState) => state.Albumns.albums);
    const { userId, id, title } = albums[selectedAlbum || 0];
    const photos = useSelector((state: IState) => state.Photos.photos);
    const filteredPhotos = useMemo(
        () => photos.filter(photo => photo.albumId === id),
        [photos, id],
    );

    const onBackPress = () => {
        dispatch(actualizarSelectedAlbum(null));
    };

    useEffect(() => {
        dispatch(fetchPhotos());
    }, []);

    return (
        <Container>
            <CustomText>Usuario: {userId}</CustomText>
            <CustomText>Id Album: {id}</CustomText>
            <CustomText>Title Album: {title}</CustomText>

            {filteredPhotos.length > 0 && (
                <FlatList data={filteredPhotos} renderItem={({ item }) => <Image style={styles.image} source={{ uri: item.thumbnailUrl }} />} />
            )}
            <Button title="Back" onPress={onBackPress} />
        </Container>
    );
};

const Container = styled.View`
    padding: 16px;
    height: 100%;
  `;

const CustomText = styled.Text`
    font-size: 18px;
  `;

const TodoList = styled.FlatList`
    padding: 8px;
  `;

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        margin: 10,
        marginLeft: 30,
    },
});

export default AlbumDetails;