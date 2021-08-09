import styled from "@emotion/native";
import React, { useEffect, useMemo } from "react";
import { Button, FlatList, Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useAlbums } from "../../../contexts/album-context";
import { usePhotos } from "../../../contexts/photo-context";
import IPhoto from "../../../models/IPhoto";
import { IState } from "../../../models/IState";
import { actualizarSelectedAlbum, fetchAlbums } from "../../../store/actions/Album";
import { fetchPhotos } from "../../../store/actions/Photo";
import PhotoListItem from "../PhotoListItem";

const AlbumDetails: React.FC = () => {
    //const dispatch = useDispatch();
    //const selectedAlbum = useSelector((state: IState) => state.Albumns.selectedAlbum);
    //const albums = useSelector((state: IState) => state.Albumns.albums);
    //const photos = useSelector((state: IState) => state.Photos.photos);

    const { photos, fetchPhotos } = usePhotos();
    const { albums, setSelectedAlbum, selectedAlbum } = useAlbums();
    const { userId, id, title } = albums[selectedAlbum || 0];
    /*const filteredPhotos = useMemo(
        () => photos.filter(photo => photo.albumId === id),
        [photos, id],
    );*/
    const filteredPhotos = photos.filter(photo => photo.albumId === id);

    const onBackPress = () => {
        //dispatch(actualizarSelectedAlbum(null));
        setSelectedAlbum(null);
    };

    useEffect(() => {
        //dispatch(fetchPhotos());
        fetchPhotos();
    }, []);

    return (
        <Container>
            <CustomText>ID Usuario: {userId}</CustomText>
            <CustomText>ID Album: {id}</CustomText>
            <CustomText>Titulo: {title}</CustomText>
            <CustomText>{"\n"}</CustomText>
            {filteredPhotos.length > 0 && (
                <PhotoList
                    data={filteredPhotos}
                    renderItem={({ item }) => <PhotoListItem photo={item as IPhoto} />}
                />
            )}
            <Button title="Back" onPress={onBackPress} />
        </Container>
    );
};

export default AlbumDetails;

const Container = styled.View`
    padding: 16px;
    height: 100%;
  `;

const CustomText = styled.Text`
    font-size: 18px;
  `;

const PhotoList = styled.FlatList`
    padding: 8px;
  `;
