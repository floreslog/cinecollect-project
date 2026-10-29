export interface Pelicula {
  id: number;
  nombre: string;
  duracion: number;
  actores: string;
  descripcion: string;
}

export const peliculas: Pelicula[] = [
  {
    id: 1,
    nombre: 'The Social Network',
    duracion: 120,
    actores: 'Jesse Eisenberg, Andrew Garfield, Justin Timberlake',
    descripcion:
      'Narra el origen de Facebook y las disputas legales y de amistad que surgieron entre sus fundadores tras su creación en Harvard.',
  },
  {
    id: 2,
    nombre: 'Jobs',
    duracion: 128,
    actores: 'Ashton Kutcher, Josh Gad, Dermot Mulroney',
    descripcion:
      'Recorre la vida de Steve Jobs desde sus inicios trabajando en un garage hasta convertir a Apple en una de las compañías más influyentes del mundo.',
  },
  {
    id: 3,
    nombre: 'Código Enigma',
    duracion: 113,
    actores: 'Benedict Cumberbatch, Keira Knightley',
    descripcion:
      'Alan Turing y su equipo de matemáticos se enfrentan a contrarreloj para descifrar el código Enigma nazi durante la Segunda Guerra Mundial.',
  },
  {
    id: 4,
    nombre: 'The Disaster Artist',
    duracion: 104,
    actores: 'James Franco, Dave Franco, Seth Rogen',
    descripcion:
      'Basada en hechos reales, sigue la amistad entre Greg Sestero y Tommy Wiseau durante la producción de una de las películas más peculiares del cine.',
  },
];
