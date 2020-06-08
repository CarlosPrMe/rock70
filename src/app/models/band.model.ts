import { AlbumModel } from './album.model';
import { MusicianModel } from './musician.model';

export interface BandModel {
    id:number;
    name:string;
    image?:string;
    logo?:string;
    bio:string;
    discography?:Array<AlbumModel>;
    members?: Array<MusicianModel>;
}
