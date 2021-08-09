import axios from 'axios';
import React, { createContext, useContext, useMemo, useState } from 'react'
import { View, Text } from 'react-native'
import IAlbum from '../models/IAlbum';

interface AlbumContextProps {
    albums: IAlbum[];
    setAlbums: (albums: IAlbum[]) => void;
    selectedAlbum: number | null;
    setSelectedAlbum: (album: number | null) => void;
    fetchAlbums: () => Promise<void>;
}

const AlbumContext = createContext<AlbumContextProps>({
    albums: [],
    setAlbums: () => { },
    selectedAlbum: null,
    setSelectedAlbum: () => { },
    fetchAlbums: () => Promise.resolve(),
});

export const AlbumProvider: React.FC = ({ children }) => {
    const [albums, setAlbums] = useState<IAlbum[]>([]);
    const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);

    const fetchAlbums = async () => {
        try {
            const albums = await axios.get(
                'https://jsonplaceholder.typicode.com/albums',
            );
            setAlbums(albums.data);
        } catch (error) {
            console.error(error);
        }
    };

    const val = useMemo(() => {
        return { albums, setAlbums, selectedAlbum, setSelectedAlbum, fetchAlbums };
    }, [albums, setAlbums, selectedAlbum, setSelectedAlbum, fetchAlbums]);

    return <AlbumContext.Provider value={val}>{children}</AlbumContext.Provider>;
};

export const useAlbums = () => useContext(AlbumContext);
