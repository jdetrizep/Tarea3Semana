import styled from "@emotion/native";
import React, { FC } from "react";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { useAlbums } from "../../../contexts/album-context";
import IAlbum from "../../../models/IAlbum";
import { actualizarSelectedAlbum } from "../../../store/actions/Album";

export interface AlbumListItemProps {
    album: IAlbum;
    index: number;
}

const AlbumListItem: FC<AlbumListItemProps> = ({ album, index }) => {
    //const dispatch = useDispatch();
    const { setSelectedAlbum } = useAlbums();
    const onPress = () => {
        //dispatch(actualizarSelectedAlbum(index));
        setSelectedAlbum(index);
    };

    return (
        <ItemContainer onPress={onPress}>
            <Text>
                {++index}. {album.title}
            </Text>
        </ItemContainer>
    );
};

const ItemContainer = styled.TouchableOpacity`
    background-color: #f1f1f1;
    border-radius: 32px;
    padding: 8px 12px;
    margin: 4px 0;
  `;

export default AlbumListItem;