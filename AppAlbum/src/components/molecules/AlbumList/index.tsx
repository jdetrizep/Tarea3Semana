import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../models/IState";
import { fetchAlbums } from "../../../store/actions/Album";
import AlbumListItem from "../AlbumListItem";


const AlbumList: React.FC = () => {
    const albums = useSelector((state: IState) => state.Albumns.albums);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAlbums());
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