import styled from "@emotion/native";
import React, { FC } from "react";
import { Text } from "react-native";
import { usePublicaciones } from "../../../contexts/publicaciones-context";
import IPublicacion from "../../../models/IPublicacion";

export interface PublisListItemProps {
    publicacion: IPublicacion;
    index: number;
}

const PublisListItem: FC<PublisListItemProps> = ({ publicacion, index }) => {
    const { setPublicaciones } = usePublicaciones();

    return (
        <ItemContainer>
            <Text>
                {++index}. {publicacion.title}
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

export default PublisListItem;