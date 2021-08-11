import axios from "axios";
import React, { createContext, useContext, useMemo, useState } from "react";
import IPublicacion from "../models/IPublicacion";

interface PublicacionesContextProps {
    publis: IPublicacion[];
    setPublicaciones: (publis: IPublicacion[]) => void;
    fetchPublicaciones: () => Promise<void>;
}

const PublicacionesContext = createContext<PublicacionesContextProps>({
    publis: [],
    setPublicaciones: () => { },
    fetchPublicaciones: () => Promise.resolve(),
});

export const PublicacionesProvider: React.FC = ({ children }) => {
    const [publis, setPublicaciones] = useState<IPublicacion[]>([]);
    const fetchPublicaciones = async () => {
        try {
            const publicaciones = await axios.get(
                'https://jsonplaceholder.typicode.com/posts',
            );
            setPublicaciones(publicaciones.data);
        } catch (error) {
            console.error(error);
        }
    };

    const val = useMemo(() => {
        return { publis, setPublicaciones, fetchPublicaciones };
    }, [publis, setPublicaciones, fetchPublicaciones]);

    return (
        <PublicacionesContext.Provider value={val}>
            {children}
        </PublicacionesContext.Provider>
    )
}

export const usePublicaciones = () => useContext(PublicacionesContext);