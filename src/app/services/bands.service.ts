import { Injectable } from '@angular/core';
import { BandModel } from '../models/band.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandsService {

  private bands: Array<BandModel> = [
    {
      id: 1,
      name: 'The Rolling Stones',
      image: 'https://www.nacionrock.com/wp-content/uploads/the-rolling-stones_2.jpg',
      logo: 'http://www.brandemia.org/wp-content/uploads/2012/07/logo_rolling_stones_principal.jpg',
      bio: 'Grupo de rock británico integrado por Mick Jagger (Dartford, Reino Unido, 1943), Brian Jones (Cheltenham, Reino Unido, 1944 - Londres, 1969), Keith Richards (Dartford, Reino Unido, 1943), Bill Wyman (Londres, 1936) y Charlie Watts (Londres, 1941). Formado en 1962, a los Rolling Stones se les ha presentado siempre como los rivales históricos de The Beatles. Dentro de esta comparación, los Stones representaron la corriente más agresiva de la música rock, aun cuando alcanzaron el estrellato de mano de la canción I wanna be your man, compuesta por los beatles John Lennon y Paul McCartney. Los Rolling Stones destacan por ser un grupo de una extraordinaria longevidad, pues en 1964 iniciaron su primera gira de conciertos por Estados Unidos y todavía en 1997 llevaban a cabo giras mundiales tan relevantes como la de presentación del disco Bridges to Babylon. En 2016 seguían grabando álbumes de estudio (los últimos de la banda son A Bigger Bang, de 2005, y Blue & Lonesome, lanzado en 2016) y ofreciendo recitales en directo. Este hecho, unido a su calidad musical, los ha convertido en verdaderos mitos de la música popular.',
      members: [{ name: 'Mick', sur_name: 'Jagger' }, { name: 'Keith', sur_name: 'Richards' }, { name: 'Ronnie', sur_name: 'Wood' }, { name: 'Charlie', sur_name: 'Watts' }],
      discography: [
        {
          name: '12 X 5',
          year: 1964
        },
        {
          name: 'The Rolling Stones(1st LP)',
          year: 1964
        },
        {
          name: 'Out Of Our Heads',
          year: 1965
        },
        {
          name: 'The Rolling Stones, Now!',
          year: 1965
        },
        {
          name: "December's Children",
          year: 1966
        },
        {
          name: 'Aftermath',
          year: 1966
        },
        {
          name: 'Got Live If You Want It!',
          year: 1966
        },
      ]
    },
    {
      id: 2,
      name: 'Led Zeppelin',
      image: 'https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/G3T3AWAMMBCQNDZUKJO5N7IC7I.jpg',
      logo: 'https://f0.pngfuel.com/png/160/215/black-and-white-i-m-a-little-man-text-led-zeppelin-iv-led-zeppelin-iii-logo-cenefas-png-clip-art.png',
      bio: 'Led Zeppelin fue un grupo británico de hard rock fundado en 1968 por el guitarrista Jimmy Page, quien había pertenecido a The Yardbirds. La banda estuvo integrada por John Paul Jones como bajista y teclista, el vocalista Robert Plant y John Bonham a la batería (que había coincidido con Plant en The Band of Joy).',
      members: [{ name: 'Robert', sur_name: 'Plant' }, { name: 'Jimmy', sur_name: 'Page' }, { name: 'John', sur_name: 'Bonham' }, { name: 'John', sur_name: 'Paul Jones' }],
      discography: [
        {
          name: 'Led Zeppelin',
          year: 1969
        },
        {
          name: 'Led Zeppelin II',
          year: 1969
        },
        {
          name: 'Led Zeppelin III',
          year: 1970
        },
        {
          name: 'Led Zeppelin IV',
          year: 1971
        },
        {
          name: "Houses of the Holy",
          year: 1973
        },
        {
          name: 'Physical Graffiti',
          year: 1975
        },
        {
          name: 'In Through the Out Door',
          year: 1979
        },
      ]
    },
    {
      id: 3,
      name: 'Queen',
      image: 'https://fondosmil.com/fondo/5919.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Queen_logo.svg/588px-Queen_logo.svg.png',
      bio: 'Banda de rock británica que gozó de gran fama desde mediados de los setenta y durante toda la década de los ochenta; la espectacularidad y dinamismo de sus actuaciones y la asimilación al rock de tendencias jazzísticas, sinfónicas y operísticas fueron algunas de las claves de su éxito, tan abrumador que sus discos fueron superventas incluso después del fallecimiento en 1991 de su líder, el cantante Freddie Mercury. Creado en 1970, el grupo estuvo formado por Freddie Mercury (voz), Brian May (guitarra), Roger Taylor (batería) y John Deacon (bajo). Los orígenes de Queen se remontan al inicio de los sesenta, cuando el joven guitarrista Brian Harold May (nacido en 1947) comenzó a tocar en un grupo semiprofesional llamado 1984. Experto conocedor de varios instrumentos de cuerda, May diseñaba incluso sus propias guitarras, conocidas posteriormente como el modelo May. Brian May pasó después a formar parte de otra banda, llamada Smile, con la que editó un single. Inesperadamente, Tim Stafell, el cantante de Smile, abandonó la formación; para buscar su sustituto, los miembros de Smile decidieron hacer una prueba al cantante del grupo Sour Milk Sea, que no era otro que Freddie Mercury, y fue rápidamente admitido.',
      members: [{ name: 'Freddie', sur_name: 'Mercury' }, { name: 'Brian', sur_name: 'May' }, { name: 'Roger', sur_name: 'Taylor' }, { name: 'John', sur_name: 'Deacon' }],
      discography: [
        {
          name: 'Queen',
          year: 1973
        },
        {
          name: 'Queen II',
          year: 1974
        },
        {
          name: 'Sheer Heart Attack',
          year: 1974
        },
        {
          name: 'A night at the opera',
          year: 1975
        },
        {
          name: "A day at the races",
          year: 1976
        },
        {
          name: 'News of the world',
          year: 1977
        },
        {
          name: 'Jazz',
          year: 1978
        },
      ]
    },
    {
      id: 4,
      name: 'Pink Floyd',
      image: 'https://stereocien.com.mx/system/storage/serve/3441/Pink-Floyd-resize-2.jpg',
      logo: 'https://1000marcas.net/wp-content/uploads/2020/01/Pink-Floyd-emblema.jpg',
      bio: 'Banda de rock británica que gozó de gran fama desde mediados de los setenta y durante toda la década de los ochenta; la espectacularidad y dinamismo de sus actuaciones y la asimilación al rock de tendencias jazzísticas, sinfónicas y operísticas fueron algunas de las claves de su éxito, tan abrumador que sus discos fueron superventas incluso después del fallecimiento en 1991 de su líder, el cantante Freddie Mercury. Creado en 1970, el grupo estuvo formado por Freddie Mercury (voz), Brian May (guitarra), Roger Taylor (batería) y John Deacon (bajo). Los orígenes de Queen se remontan al inicio de los sesenta, cuando el joven guitarrista Brian Harold May (nacido en 1947) comenzó a tocar en un grupo semiprofesional llamado 1984. Experto conocedor de varios instrumentos de cuerda, May diseñaba incluso sus propias guitarras, conocidas posteriormente como el modelo May. Brian May pasó después a formar parte de otra banda, llamada Smile, con la que editó un single. Inesperadamente, Tim Stafell, el cantante de Smile, abandonó la formación; para buscar su sustituto, los miembros de Smile decidieron hacer una prueba al cantante del grupo Sour Milk Sea, que no era otro que Freddie Mercury, y fue rápidamente admitido.',
      members: [{ name: 'David', sur_name: 'Gilmour' }, { name: 'Roger', sur_name: 'Waters' }, { name: 'Richard', sur_name: 'Wright' }, { name: 'Nick', sur_name: 'Mason' }],
      discography: [
        {
          name: 'The Piper at the Gates of Dawn',
          year: 1967
        },
        {
          name: 'A saucerful of secrets',
          year: 1968
        },
        {
          name: 'More',
          year: 1969
        },
        {
          name: 'Ummagumma',
          year: 1969
        },
        {
          name: "Atom heart mother",
          year: 1970
        },
        {
          name: 'Meddle',
          year: 1970
        },
        {
          name: 'RElics',
          year: 1971
        },
      ]
    },
    {
      id: 5,
      name: 'Deep Purple',
      image: 'https://endorfinacultural.com/wp-content/uploads/2018/06/DEEPPURPLE.jpg',
      logo: 'https://i7.pngflow.com/pngimage/996/402/png-deep-purple-concert-music-woman-from-tokyo-infinite-others-purple-text-logo-monochrome-clipart.png',
      bio: 'Deep Purple es una agrupación de Hard Rock que se formó a inicios de 1968 en Londres, Inglaterra. Al principio el grupo adoptó el nombre de "Roundabout". La banda estaba formada por Chris Curtis, Jon Lord, Ritchie Blackmore, Dave Curtis y Bobby Woodman. Al poco tiempo de su creación, una serie de problemas internos comenzaron a darse, y la banda se desintegra, quedando como únicos integrantes Lord y Blackmore. Posteriormente se incorpora el bajista Nick Simper, el vocalista Rod Evans, y el batería Ian Paice. Es así como la nueva alineación se divide de la siguiente manera: Rod Evans en la primera voz, Ritchie Blackmore en la guitarra, Jon Lord en los teclados, Nick Simper en el bajo e Ian Paice en batería.',
      members: [{ name: 'Ian', sur_name: 'Gillan' }, { name: 'Ritchie', sur_name: 'Blackmore' }, { name: 'Jon', sur_name: 'Lord' }, { name: 'Ian', sur_name: 'Paice' }, { name: 'Roger', sur_name: ' Glover' }],
      discography: [
        {
          name: '	Shades of Deep Purple',
          year: 1968
        },
        {
          name: 'THe book of Taliesyn',
          year: 1968
        },
        {
          name: 'Deep Purple',
          year: 1969
        },
        {
          name: '	Concerto for Group and Orchestra',
          year: 1969
        },
        {
          name: "Deep Purple in Rock",
          year: 1970
        },
        {
          name: 'Fireball',
          year: 1971
        },
        {
          name: 'Machine Head',
          year: 1972
        },
      ]
    },
    {
      id: 6,
      name: 'AC/DC',
      image: 'https://imagenes.milenio.com/snZi6qt4KfHAw9vjEsIiALubnsE=/958x596/smart/https://www.milenio.com/uploads/media/2019/07/28/fama-ac-dc-llevado-vender_0_146_828_515.jpg',
      logo: 'https://1000marcas.net/wp-content/uploads/2020/01/ACDC-Logo.png',
      bio: 'El grupo australiano AC/DC se formó en 1973, gracias a dos hermanos escoceses, Malcolm y Angus Young. El nombre del grupo, con connotaciones eléctricas, son las iniciales en inglés de Corriente alterna/ Corriente continua. Cuando el grupo se formó Angus apenas tenía 15 años, por lo que alguien le sugirió que se subiera al escenario vestido con el uniforme colegial. A partir de ese momento, aquella fue la enseña de la banda. En 1974 los hermanos Young se trasladan a Melbourne, donde se unen al batería Phil Rudd y al bajista Mark Evans. Como cantante se les unió Bon Scott, quien ya había participado anteriormente en algunas bandas de pop. Además, Scott aportó a la banda un estilo agresivo de chicos inadaptados que les acompañó a lo largo de su carrera. De esta forma, con la banda ya formada, realizan una gira por Australia, comenzando a trabajar en lo que sería su primer álbum.',
      members: [{ name: 'Malcolm', sur_name: 'Young' }, { name: 'Angus', sur_name: 'Young' }, { name: 'Bon', sur_name: 'Scott' }, { name: 'Phil', sur_name: 'Rudd' }],
      discography: [
        {
          name: 'T.N.T',
          year: 1975
        },
        {
          name: 'High Voltage [Australia]',
          year: 1975
        },
        {
          name: 'Dirty Deeds Done Dirt Cheap',
          year: 1976
        },
        {
          name: 'High Voltage',
          year: 1976
        },
        {
          name: "Let There Be Rock",
          year: 1977
        },
        {
          name: "If You Want Blood You've Got It",
          year: 1978
        },
        {
          name: 'Powerage',
          year: 1978
        },
      ]
    },
    {
      id: 7,
      name: 'The Ramones',
      image: 'https://7wallpapers.net/wp-content/uploads/8_Ramones.jpg',
      logo: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/6144.png',
      bio: 'Durante la década de los 70, la ciudad de Nueva York vio nacer a un sinfín de bandas que buscaban montarse en la ola del rock. Sin embargo, ninguna de estas agrupaciones logró alcanzar el éxito masivo de los Ramones, recordada por ser una de las precursoras del punk a nivel mundial. Prepárate para saltar al ritmo de Blitzkrieg Bop mientras disfrutas de la biografía de los Ramones, un repaso por la historia del cuarteto más anárquico del siglo XX. Durante comienzos de los 70, el guitarrista John Cummings y el baterista Thomas Erdelyi, amigos desde la secundaria, conocieron al bajista alemán Douglas Colvin en Queens, Nueva York. Poco después, el trío se haría amigo de Jeffrey Hyman, un antiguo baterista que había empezado a cantar. Creyendo firmemente en que tenían algo que aportar a la escena musical de la época, los cuatro decidieron formar una banda que se saliera de los estándares convencionales. Poco después de ensamblar el cuartero, Douglas Colvin adoptó el nombre artístico Dee Dee Ramone, basado en un apodo que utilizaba Paul McCartney durante sus primeros años. Dee Dee convenció al resto de los integrantes, y John Cummings pasó a ser Johnny Ramone, Jeffrey Hyman se convirtió en Joey Ramone y Thomas Erdelyi adoptó el nombre de Tommy Ramone. Partiendo de estos pseudónimos, la idea de llamar a la banda los Ramones no tardó en llegar.',
      members: [{ name: 'Joey', sur_name: 'Ramone' }, { name: 'Johnny', sur_name: 'Ramone' }, { name: 'Dee Dee', sur_name: 'Ramone' }, { name: 'Tommy', sur_name: 'Ramone' }],
      discography: [
        {
          name: 'Ramones',
          year: 1976
        },
        {
          name: 'Rocket to Russia',
          year: 1977
        },
        {
          name: 'Leave Home',
          year: 1977
        },
        {
          name: 'Rodad to Ruin',
          year: 1978
        },
        {
          name: "End of the Century",
          year: 1980
        },
        {
          name: "PLeasant Dreams",
          year: 1981
        },
        {
          name: 'Subterranean Jungle',
          year: 1983
        },
      ]
    },
    {
      id: 8,
      name: 'Kiss',
      image: 'https://blog.ticketmaster.com/wp-content/uploads/b6bb7f66-191e-41e2-a6a1-6591e00a13cb_1041021_TABLET_LANDSCAPE_LARGE_16_9.jpg',
      logo: 'https://1000marcas.net/wp-content/uploads/2020/02/Kiss-Logo.png',
      bio: 'Kiss es una banda de rock y heavy metal que se formó en 1973 en Nueva York, Estados Unidos. La historia del grupo Kiss data de 1971, cuando Gene Simmons y Paul Stanley conformaban el grupo Wicked Lester, con el que ya habían grabado un album para Epic Records. Pero deciden que necesitaban una nueva dirección musical, por lo que se proponen formar una nueva agrupación. A fines de 1972, Simmons pone un aviso en la revista Rolling Stone buscando miembros para conformar la banda. Peter Criss fue uno de los que audicionó y se quedó. Ya conformado el trío comienzan a experimentar con su imagen, usando maquillaje y llamativos atuendos. Posteriormente, en Enero de 1973, se une Paul Frehley y conforman la banda de la siguiente manera: Paul Stanley, llamado también "The Starchild" (Voz y Guitarra Rítmica), Gene Simmons, apodado "The Demon" (Voz y Bajo), Ace Frehley, conocido como "The Space-Ace" (Voz y Guitarra Líder) y Peter Criss, denominado "The Cat" (Voz y Batería).',
      members: [{ name: 'Gene', sur_name: 'Simmons' }, { name: 'Paul', sur_name: 'Stanley' }, { name: 'Peter', sur_name: 'Criss' }, { name: 'Ace', sur_name: 'Frehley' }],
      discography: [
        {
          name: 'Kiss',
          year: 1974
        },
        {
          name: 'Hotter than hell',
          year: 1974
        },
        {
          name: 'Dressed to Kill',
          year: 1975
        },
        {
          name: 'Alive!',
          year: 1975
        },
        {
          name: "Destroyer",
          year: 1976
        },
        {
          name: "Rock and Roll Over",
          year: 1976
        },
        {
          name: 'ALive II',
          year: 1977
        },
      ]
    }
  ]

  constructor() { }


  public getBands(): Observable<BandModel[]> {
    return of(this.bands);
  }

  public getBandById(id: number): Observable<BandModel> {
    let band = this.bands.find(b => b.id === id)
    return of(band);
  }

}
