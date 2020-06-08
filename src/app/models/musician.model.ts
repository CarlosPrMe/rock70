export interface MusicianModel {
    id?: number;
    name:string;
    sur_name:string;
    year?:number;
    instruments?:Array<string>;
    image?:string;
}