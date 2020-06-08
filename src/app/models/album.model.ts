export interface AlbumModel {
    id?: number;
    name:string;
    year:number;
    cover?:string;
    songs?:Array<string>;
    id_band?:number;
}