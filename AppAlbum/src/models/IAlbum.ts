import IPhoto from "./IPhoto";

export default interface IAlbum {
    userId: number;
    id: number;
    title: string;
    photos?: IPhoto[];
}