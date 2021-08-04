import { IAction } from "../../../models/IAction";
import IAlbum from "../../../models/IAlbum";
import { ACTUALIZAR_ALBUMS, ACTUALIZAR_SELECTED_ALBUM } from "../../actions";

export interface IAlbumState {
    albums: IAlbum[];
    selectedAlbum: number | null;
}

const initialState: IAlbumState = {
    albums: [],
    selectedAlbum: null,
};

export default (state = initialState, { type, payload }: IAction) => {
    switch (type) {
        case ACTUALIZAR_ALBUMS:
            return { ...state, users: payload as IAlbum[] };

        case ACTUALIZAR_SELECTED_ALBUM:
            return { ...state, selectedUser: payload as number | null };

        default:
            return state;
    }
};