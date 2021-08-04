import { IAction } from "../../../models/IAction";
import IPhoto from "../../../models/IPhoto";
import { ACTUALIZAR_PHOTOS } from "../../actions";


export interface IPhotoReducerState {
    photos: IPhoto[];
}

const initialState: IPhotoReducerState = {
    photos: [],
};

export default (
    state = initialState,
    { type, payload }: IAction,
): IPhotoReducerState => {
    switch (type) {
        case ACTUALIZAR_PHOTOS:
            return { ...state, photos: payload as IPhoto[] };
        default:
            return state;
    }
};