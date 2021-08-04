import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { ACTUALIZAR_ALBUMS, ACTUALIZAR_SELECTED_ALBUM } from "..";
import { IAction } from "../../../models/IAction";
import IAlbum from "../../../models/IAlbum";
import { IState } from "../../../models/IState";


export const actualizarAlbums = (payload: IAlbum[]): IAction => ({
    type: ACTUALIZAR_ALBUMS,
    payload,
});

export const actualizarSelectedAlbum = (payload: number | null) => ({
    type: ACTUALIZAR_SELECTED_ALBUM,
    payload,
});

export function fetchAlbums() {
    return async function (dispatch: ThunkDispatch<IState, null, IAction>) {
        try {
            const albums = await axios.get(
                'https://jsonplaceholder.typicode.com/albums',
            );

            dispatch(actualizarAlbums(albums.data));
        } catch (error) {
            console.error(error);
        }
    };
}