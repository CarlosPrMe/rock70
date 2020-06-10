import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class MockService {
    private _avatars: Array<string> = [
        'https://lh3.googleusercontent.com/-d-cldq0iIFQ/WpakxI3OXoI/AAAAAAAAOs0/v7lpT9KuFvMWyYUlcFBvonmUTFcfkbFhACHMYCw/avatar-santi%255B2%255D?imgmax=800',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWAoQ916iRw6xL3xgw8ebhq_XYl6yhiFeq1DMQuQRqLmOR7vv2g&s',
        'https://www.itcsystem.es/wp-content/uploads/2019/01/avatar-372-456324.png',
        'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
        'https://www.sysasesoressas.com/sys/wp-content/uploads/2019/02/avatar-367-456319.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSItZgJYGhLiceCc4CuuAGUgIrr72JvyY4I8ljkmVGMdCeaZd&s',
        'https://image.flaticon.com/icons/png/512/190/190634.png',
        'https://cdn4.iconfinder.com/data/icons/professions-1-2/151/19-512.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcatI3vf8wLOxUtNrTKIgFVYJgqg5bjFm90BMhg_5iISO976p&s'
    ]
    private _covers: Array<string> = [
        'https://losdiscosquecambiarantuvida.files.wordpress.com/2017/03/queen-ii-mick-rock-1974-5.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/51M4VPUxUhL._AC_.jpg',
        'https://cdn.oldskull.net/wp-content/uploads/2015/01/Rock_Covers-ilustracion-oldskull-12.jpg',
        'https://i.pinimg.com/originals/47/24/af/4724af99c668f7bda58a8c5f30642ef0.jpg',
        'https://i.pinimg.com/236x/4a/a6/ec/4aa6ec21fe942c8fa80b65d8cbd88e8c--celebration-day-classic-rock.jpg',
        'https://www.lahiguera.net/musicalia/artistas/queen/disco/9355/queen_bohemian_rhapsody-portada.jpg',
        'https://i.pinimg.com/originals/1f/90/6f/1f906f80e96bcfe2dffae945d94eda83.jpg',
        'https://www.lahiguera.net/musicalia/artistas/the_rolling_stones/disco/8699/the_rolling_stones_on_air-portada.jpg',
        'https://www.guioteca.com/manualidades-y-artesania/files/2012/03/pink-floyd-luna.jpg',
        'https://i.pinimg.com/originals/ab/8f/72/ab8f72252ac76a87679a61108654863a.jpg',
        'https://i.pinimg.com/originals/56/44/54/564454573ecc69c1eaa0a255633f9507.jpg',
        'https://i.pinimg.com/originals/5b/47/61/5b476170001071ee8d3465d942cea74c.jpg',
        'https://i.pinimg.com/originals/f4/3f/f6/f43ff637123a27d304607a200f00d6b7.jpg',
        'https://img.discogs.com/NSOIyffMBX8b34mypx5JutbBCrU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-7274707-1449237862-5435.jpeg.jpg'
    ]

    public setAvatar(): string {
        let num = Math.round(Math.random() * ((this._avatars.length - 1) - 0) + 0);
        return this._avatars[num];
    }
    public setCover(): string {
        let num = Math.round(Math.random() * ((this._covers.length - 1) - 0) + 0);
        return this._covers[num];
    }
}
