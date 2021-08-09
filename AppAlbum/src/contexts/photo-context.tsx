import axios from "axios";
import React, { createContext, useContext, useMemo, useState } from "react";
import IPhoto from "../models/IPhoto";


interface PhotosContexProps {
    photos: IPhoto[];
    setPhotos: (photos: IPhoto[]) => void;
    fetchPhotos: () => Promise<void>;
}

const PhotosContext = createContext<PhotosContexProps>({
    photos: [],
    setPhotos: () => { },
    fetchPhotos: () => Promise.resolve(),
});

export const PhotosProvider: React.FC = ({ children }) => {
    const [photos, setPhotos] = useState<IPhoto[]>([]);

    const fetchPhotos = async () => {
        try {
            const photos = await axios.get('https://jsonplaceholder.typicode.com/photos',);
            setPhotos(photos.data);
        } catch (error) {
            console.error(error);
        }
    };

    const val = useMemo(() => {
        return { photos, setPhotos, fetchPhotos };
    }, [photos, setPhotos, fetchPhotos]);

    return (
        <PhotosContext.Provider value={val}>
            {children}
        </PhotosContext.Provider>
    )
}

export const usePhotos = () => useContext(PhotosContext);