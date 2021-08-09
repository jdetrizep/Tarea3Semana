import styled from "@emotion/native";
import React from "react";
import { Image, ImageBackgroundBase, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IPhoto from "../../../models/IPhoto";
import { IState } from "../../../models/IState";


export interface PhotoListItemProps {
    photo: IPhoto;
}

const PhotoListItem: React.FC<PhotoListItemProps> = ({ photo }) => {
    const dispatch = useDispatch();
    const photos = useSelector((state: IState) => state.Photos.photos);
    const { albumId, id, title, url, thumbnailUrl } = photo;

    return (
        <Container>
            <CustomText>
                {id}-{title}{"\n"}
                <Image style={stylesImage.image} source={{ uri: thumbnailUrl }} />
            </CustomText>
        </Container>
    );
};

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CustomText = styled.Text`
  width: 85%;
`;

const stylesImage = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    }
});

export default PhotoListItem;