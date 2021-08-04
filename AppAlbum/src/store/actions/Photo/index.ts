import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { ACTUALIZAR_PHOTOS } from "..";
import { IAction } from "../../../models/IAction";
import IPhoto from "../../../models/IPhoto";
import { IState } from "../../../models/IState";


export const actualizarPhotos = (payload: IPhoto[]): IAction => ({
    type: ACTUALIZAR_PHOTOS,
    payload,
});

export function fetchPhotos() {
    return async function (dispatch: ThunkDispatch<IState, null, IAction>) {
        try {
            const photos = await axios.get(
                'https://jsonplaceholder.typicode.com/photos',
            );

            dispatch(actualizarPhotos(photos.data));
        } catch (error) {
            console.error(error);
        }
    };
}