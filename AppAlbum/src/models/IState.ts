import { IAlbumState } from "../store/reducers/Album";
import { IPhotoReducerState } from "../store/reducers/Photo";

export interface IState {
    Albumns: IAlbumState;
    Photos: IPhotoReducerState;
}