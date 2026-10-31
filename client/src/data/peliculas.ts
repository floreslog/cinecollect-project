export type Genero =
  | 'accion'
  | 'animacion'
  | 'aventura'
  | 'ciencia-ficcion'
  | 'comedia'
  | 'drama'
  | 'fantasia'
  | 'romance'
  | 'suspenso'
  | 'terror';

export type Plataforma = 'netflix' | 'prime-video' | 'hbo' | 'disney-plus';

export interface Pelicula {
  id: number;
  nombre: string;
  duracion: number;
  actores: string;
  descripcion: string;
  genero: Genero;
  plataforma: Plataforma;
}

export const peliculas: Pelicula[] = [
  {
    id: 1,
    nombre: 'The Social Network',
    duracion: 120,
    actores: 'Jesse Eisenberg, Andrew Garfield, Justin Timberlake',
    descripcion:
      'Narra el origen de Facebook y las disputas legales y de amistad que surgieron entre sus fundadores tras su creación en Harvard.',
    genero: 'drama',
    plataforma: 'netflix',
  },
  {
    id: 2,
    nombre: 'Jobs',
    duracion: 128,
    actores: 'Ashton Kutcher, Josh Gad, Dermot Mulroney',
    descripcion:
      'Recorre la vida de Steve Jobs desde sus inicios trabajando en un garage hasta convertir a Apple en una de las compañías más influyentes del mundo.',
    genero: 'drama',
    plataforma: 'prime-video',
  },
  {
    id: 3,
    nombre: 'Código Enigma',
    duracion: 113,
    actores: 'Benedict Cumberbatch, Keira Knightley',
    descripcion:
      'Alan Turing y su equipo de matemáticos se enfrentan a contrarreloj para descifrar el código Enigma nazi durante la Segunda Guerra Mundial.',
    genero: 'drama',
    plataforma: 'hbo',
  },
  {
    id: 4,
    nombre: 'The Disaster Artist',
    duracion: 104,
    actores: 'James Franco, Dave Franco, Seth Rogen',
    descripcion:
      'Basada en hechos reales, sigue la amistad entre Greg Sestero y Tommy Wiseau durante la producción de una de las películas más peculiares del cine.',
    genero: 'comedia',
    plataforma: 'disney-plus',
  },
  {
    id: 5,
    nombre: 'Gladiador',
    duracion: 155,
    actores: 'Russell Crowe, Joaquin Phoenix, Connie Nielsen',
    descripcion:
      'Un general romano traicionado y convertido en esclavo se abre paso como gladiador para vengar la muerte de su familia.',
    genero: 'accion',
    plataforma: 'netflix',
  },
  {
    id: 6,
    nombre: 'Memento',
    duracion: 113,
    actores: 'Guy Pearce, Carrie-Anne Moss, Joe Pantoliano',
    descripcion:
      'Un hombre que no puede formar nuevos recuerdos usa notas, fotos y tatuajes para encontrar al asesino de su esposa.',
    genero: 'suspenso',
    plataforma: 'prime-video',
  },
  {
    id: 7,
    nombre: 'Shrek',
    duracion: 90,
    actores: 'Mike Myers, Eddie Murphy, Cameron Diaz',
    descripcion:
      'Un ogro gruñón acepta rescatar a una princesa para recuperar la tranquilidad de su pantano, acompañado de un burro que no deja de hablar.',
    genero: 'animacion',
    plataforma: 'hbo',
  },
  {
    id: 8,
    nombre: 'Harry Potter y la piedra filosofal',
    duracion: 152,
    actores: 'Daniel Radcliffe, Rupert Grint, Emma Watson',
    descripcion:
      'Un niño descubre en su cumpleaños número once que es mago y comienza sus estudios en el colegio Hogwarts.',
    genero: 'fantasia',
    plataforma: 'disney-plus',
  },
  {
    id: 9,
    nombre: 'El Señor de los Anillos: La comunidad del anillo',
    duracion: 178,
    actores: 'Elijah Wood, Ian McKellen, Viggo Mortensen',
    descripcion:
      'Un joven hobbit emprende un peligroso viaje junto a una comunidad de aliados para destruir un anillo de poder maligno.',
    genero: 'fantasia',
    plataforma: 'netflix',
  },
  {
    id: 10,
    nombre: 'El viaje de Chihiro',
    duracion: 125,
    actores: 'Rumi Hiiragi, Miyu Irino, Mari Natsuki',
    descripcion:
      'Una niña queda atrapada en un mundo de espíritus y debe trabajar en una casa de baños para salvar a sus padres.',
    genero: 'animacion',
    plataforma: 'prime-video',
  },
  {
    id: 11,
    nombre: 'Amélie',
    duracion: 122,
    actores: 'Audrey Tautou, Mathieu Kassovitz, Rufus',
    descripcion:
      'Una joven tímida de París decide cambiar en secreto la vida de las personas a su alrededor mientras busca su propio amor.',
    genero: 'romance',
    plataforma: 'hbo',
  },
  {
    id: 12,
    nombre: 'Ciudad de Dios',
    duracion: 130,
    actores: 'Alexandre Rodrigues, Leandro Firmino, Matheus Nachtergaele',
    descripcion:
      'Un joven fotógrafo retrata el crecimiento del crimen organizado en una favela de Río de Janeiro a lo largo de dos décadas.',
    genero: 'drama',
    plataforma: 'disney-plus',
  },
  {
    id: 13,
    nombre: 'Atrápame si puedes',
    duracion: 141,
    actores: 'Leonardo DiCaprio, Tom Hanks, Christopher Walken',
    descripcion:
      'Un joven estafador se hace pasar por piloto, médico y abogado mientras un agente del FBI lo persigue por todo el mundo.',
    genero: 'drama',
    plataforma: 'netflix',
  },
  {
    id: 14,
    nombre: 'Buscando a Nemo',
    duracion: 100,
    actores: 'Albert Brooks, Ellen DeGeneres, Alexander Gould',
    descripcion:
      'Un pez payaso sobreprotector cruza el océano junto a una amiga muy olvidadiza para encontrar a su hijo.',
    genero: 'animacion',
    plataforma: 'prime-video',
  },
  {
    id: 15,
    nombre: 'El Señor de los Anillos: El retorno del rey',
    duracion: 201,
    actores: 'Elijah Wood, Viggo Mortensen, Ian McKellen',
    descripcion:
      'La batalla final por la Tierra Media se libra mientras Frodo y Sam se acercan al Monte del Destino.',
    genero: 'fantasia',
    plataforma: 'hbo',
  },
  {
    id: 16,
    nombre: 'Piratas del Caribe: La maldición del Perla Negra',
    duracion: 143,
    actores: 'Johnny Depp, Orlando Bloom, Keira Knightley',
    descripcion:
      'Un excéntrico pirata y un herrero se unen para rescatar a una joven secuestrada por una tripulación maldita.',
    genero: 'aventura',
    plataforma: 'disney-plus',
  },
  {
    id: 17,
    nombre: 'Eterno resplandor de una mente sin recuerdos',
    duracion: 108,
    actores: 'Jim Carrey, Kate Winslet, Kirsten Dunst',
    descripcion:
      'Tras una ruptura dolorosa, un hombre se somete a un procedimiento para borrar a su expareja de su memoria.',
    genero: 'romance',
    plataforma: 'netflix',
  },
  {
    id: 18,
    nombre: 'Diario de una pasión',
    duracion: 123,
    actores: 'Ryan Gosling, Rachel McAdams, James Garner',
    descripcion:
      'Un anciano lee a una mujer la historia de amor de dos jóvenes de distintas clases sociales en los años cuarenta.',
    genero: 'romance',
    plataforma: 'prime-video',
  },
  {
    id: 19,
    nombre: 'El laberinto del fauno',
    duracion: 118,
    actores: 'Ivana Baquero, Sergi López, Maribel Verdú',
    descripcion:
      'En la España de la posguerra, una niña descubre un mundo fantástico donde un fauno le encomienda tres pruebas.',
    genero: 'fantasia',
    plataforma: 'hbo',
  },
  {
    id: 20,
    nombre: 'Los infiltrados',
    duracion: 151,
    actores: 'Leonardo DiCaprio, Matt Damon, Jack Nicholson',
    descripcion:
      'Un policía encubierto dentro de la mafia y un topo de la mafia dentro de la policía intentan descubrirse mutuamente.',
    genero: 'suspenso',
    plataforma: 'disney-plus',
  },
  {
    id: 21,
    nombre: 'El gran truco',
    duracion: 130,
    actores: 'Hugh Jackman, Christian Bale, Scarlett Johansson',
    descripcion:
      'Dos magos rivales del Londres victoriano llevan su competencia a extremos peligrosos para crear el truco definitivo.',
    genero: 'suspenso',
    plataforma: 'netflix',
  },
  {
    id: 22,
    nombre: 'Ratatouille',
    duracion: 111,
    actores: "Patton Oswalt, Lou Romano, Peter O'Toole",
    descripcion:
      'Una rata con un talento excepcional para la cocina se alía con un joven torpe para triunfar en un restaurante de París.',
    genero: 'animacion',
    plataforma: 'prime-video',
  },
  {
    id: 23,
    nombre: 'Sin lugar para los débiles',
    duracion: 122,
    actores: 'Tommy Lee Jones, Javier Bardem, Josh Brolin',
    descripcion:
      'Un cazador encuentra un maletín con dinero del narcotráfico y es perseguido por un asesino implacable.',
    genero: 'suspenso',
    plataforma: 'hbo',
  },
  {
    id: 24,
    nombre: 'El caballero de la noche',
    duracion: 152,
    actores: 'Christian Bale, Heath Ledger, Aaron Eckhart',
    descripcion:
      'Batman enfrenta al Guasón, un criminal que quiere sumir a Ciudad Gótica en el caos.',
    genero: 'accion',
    plataforma: 'disney-plus',
  },
  {
    id: 25,
    nombre: 'WALL-E',
    duracion: 98,
    actores: 'Ben Burtt, Elissa Knight, Jeff Garlin',
    descripcion:
      'Un pequeño robot que limpia una Tierra abandonada se enamora de una robot exploradora y la sigue hasta el espacio.',
    genero: 'animacion',
    plataforma: 'netflix',
  },
  {
    id: 26,
    nombre: 'Iron Man',
    duracion: 126,
    actores: 'Robert Downey Jr., Gwyneth Paltrow, Jeff Bridges',
    descripcion:
      'Un millonario fabricante de armas construye una armadura de alta tecnología tras ser secuestrado.',
    genero: 'accion',
    plataforma: 'prime-video',
  },
  {
    id: 27,
    nombre: 'Avatar',
    duracion: 162,
    actores: 'Sam Worthington, Zoe Saldaña, Sigourney Weaver',
    descripcion:
      'Un exmarine parapléjico controla un cuerpo alienígena en el planeta Pandora y termina dividido entre dos mundos.',
    genero: 'ciencia-ficcion',
    plataforma: 'hbo',
  },
  {
    id: 28,
    nombre: 'Bastardos sin gloria',
    duracion: 153,
    actores: 'Brad Pitt, Christoph Waltz, Mélanie Laurent',
    descripcion:
      'En la Francia ocupada, un grupo de soldados judeoestadounidenses y una dueña de cine planean acabar con el alto mando nazi.',
    genero: 'accion',
    plataforma: 'disney-plus',
  },
  {
    id: 29,
    nombre: 'Up: Una aventura de altura',
    duracion: 96,
    actores: 'Ed Asner, Jordan Nagai, Christopher Plummer',
    descripcion:
      'Un anciano ata miles de globos a su casa para viajar a Sudamérica, sin saber que un niño explorador va a bordo.',
    genero: 'animacion',
    plataforma: 'netflix',
  },
  {
    id: 30,
    nombre: '¿Qué pasó ayer?',
    duracion: 100,
    actores: 'Bradley Cooper, Ed Helms, Zach Galifianakis',
    descripcion:
      'Tres amigos despiertan en Las Vegas sin recordar la noche anterior y con el novio desaparecido a días de la boda.',
    genero: 'comedia',
    plataforma: 'prime-video',
  },
  {
    id: 31,
    nombre: 'El origen',
    duracion: 148,
    actores: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
    descripcion:
      'Un ladrón que roba secretos a través de los sueños recibe la misión de implantar una idea en la mente de alguien.',
    genero: 'ciencia-ficcion',
    plataforma: 'hbo',
  },
  {
    id: 32,
    nombre: 'Amigos intocables',
    duracion: 112,
    actores: 'François Cluzet, Omar Sy, Anne Le Ny',
    descripcion:
      'Un aristócrata tetrapléjico contrata como cuidador a un joven de los suburbios y entre ambos nace una gran amistad.',
    genero: 'comedia',
    plataforma: 'disney-plus',
  },
  {
    id: 33,
    nombre: 'Los Vengadores',
    duracion: 143,
    actores: 'Robert Downey Jr., Chris Evans, Scarlett Johansson',
    descripcion:
      'Un grupo de superhéroes debe aprender a trabajar en equipo para detener una invasión alienígena liderada por Loki.',
    genero: 'accion',
    plataforma: 'netflix',
  },
  {
    id: 34,
    nombre: 'El lobo de Wall Street',
    duracion: 180,
    actores: 'Leonardo DiCaprio, Jonah Hill, Margot Robbie',
    descripcion:
      'El ascenso y la caída de un corredor de bolsa que amasó una fortuna a base de fraudes y excesos.',
    genero: 'comedia',
    plataforma: 'prime-video',
  },
  {
    id: 35,
    nombre: 'Frozen: Una aventura congelada',
    duracion: 102,
    actores: 'Kristen Bell, Idina Menzel, Josh Gad',
    descripcion:
      'Una princesa emprende un viaje para encontrar a su hermana, cuyos poderes de hielo han sumido al reino en un invierno eterno.',
    genero: 'animacion',
    plataforma: 'hbo',
  },
  {
    id: 36,
    nombre: 'Gravedad',
    duracion: 91,
    actores: 'Sandra Bullock, George Clooney',
    descripcion:
      'Dos astronautas quedan a la deriva en el espacio después de que una lluvia de escombros destruye su transbordador.',
    genero: 'ciencia-ficcion',
    plataforma: 'disney-plus',
  },
  {
    id: 37,
    nombre: 'Interestelar',
    duracion: 169,
    actores: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
    descripcion:
      'Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.',
    genero: 'ciencia-ficcion',
    plataforma: 'netflix',
  },
  {
    id: 38,
    nombre: 'Whiplash',
    duracion: 106,
    actores: 'Miles Teller, J.K. Simmons, Paul Reiser',
    descripcion:
      'Un joven baterista de jazz es llevado al límite por un profesor tan exigente como cruel.',
    genero: 'drama',
    plataforma: 'prime-video',
  },
  {
    id: 39,
    nombre: 'El Gran Hotel Budapest',
    duracion: 99,
    actores: 'Ralph Fiennes, Tony Revolori, Saoirse Ronan',
    descripcion:
      'El conserje de un famoso hotel europeo y su joven botones se ven envueltos en el robo de una pintura invaluable.',
    genero: 'comedia',
    plataforma: 'hbo',
  },
  {
    id: 40,
    nombre: 'Mad Max: Furia en el camino',
    duracion: 120,
    actores: 'Tom Hardy, Charlize Theron, Nicholas Hoult',
    descripcion:
      'En un desierto postapocalíptico, una guerrera huye de un tirano junto a un grupo de mujeres y un vagabundo solitario.',
    genero: 'accion',
    plataforma: 'disney-plus',
  },
  {
    id: 41,
    nombre: 'Intensa-Mente',
    duracion: 95,
    actores: 'Amy Poehler, Phyllis Smith, Bill Hader',
    descripcion:
      'Las emociones dentro de la mente de una niña intentan guiarla durante una difícil mudanza a una nueva ciudad.',
    genero: 'animacion',
    plataforma: 'netflix',
  },
  {
    id: 42,
    nombre: 'La La Land',
    duracion: 128,
    actores: 'Ryan Gosling, Emma Stone, John Legend',
    descripcion:
      'Un pianista de jazz y una aspirante a actriz se enamoran en Los Ángeles mientras persiguen sus sueños.',
    genero: 'romance',
    plataforma: 'prime-video',
  },
  {
    id: 43,
    nombre: '¡Huye!',
    duracion: 104,
    actores: 'Daniel Kaluuya, Allison Williams, Catherine Keener',
    descripcion:
      'Un joven visita por primera vez a la familia de su novia y descubre que algo muy inquietante ocurre en esa casa.',
    genero: 'terror',
    plataforma: 'hbo',
  },
  {
    id: 44,
    nombre: 'Coco',
    duracion: 105,
    actores: 'Anthony Gonzalez, Gael García Bernal, Benjamin Bratt',
    descripcion:
      'Un niño que sueña con ser músico viaja a la Tierra de los Muertos en pleno Día de Muertos para descubrir la historia de su familia.',
    genero: 'animacion',
    plataforma: 'disney-plus',
  },
  {
    id: 45,
    nombre: 'Eso',
    duracion: 135,
    actores: 'Bill Skarsgård, Jaeden Martell, Finn Wolfhard',
    descripcion:
      'Un grupo de niños de un pequeño pueblo se enfrenta a un ser maligno que toma la forma de un payaso.',
    genero: 'terror',
    plataforma: 'netflix',
  },
  {
    id: 46,
    nombre: 'Un lugar en silencio',
    duracion: 90,
    actores: 'Emily Blunt, John Krasinski, Millicent Simmonds',
    descripcion:
      'Una familia sobrevive en silencio absoluto en un mundo invadido por criaturas que cazan guiadas por el sonido.',
    genero: 'terror',
    plataforma: 'prime-video',
  },
  {
    id: 47,
    nombre: 'El conjuro',
    duracion: 112,
    actores: 'Vera Farmiga, Patrick Wilson, Lili Taylor',
    descripcion:
      'Una pareja de investigadores de lo paranormal ayuda a una familia aterrorizada por una presencia en su granja.',
    genero: 'terror',
    plataforma: 'hbo',
  },
  {
    id: 48,
    nombre: 'Avengers: Endgame',
    duracion: 181,
    actores: 'Robert Downey Jr., Chris Evans, Mark Ruffalo',
    descripcion:
      'Los Vengadores que sobrevivieron se reúnen para intentar revertir las consecuencias del chasquido de Thanos.',
    genero: 'accion',
    plataforma: 'disney-plus',
  },
  {
    id: 49,
    nombre: 'Parásitos',
    duracion: 132,
    actores: 'Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong',
    descripcion:
      'Una familia pobre se infiltra poco a poco en la vida de una familia adinerada, hasta que un secreto lo cambia todo.',
    genero: 'suspenso',
    plataforma: 'netflix',
  },
  {
    id: 50,
    nombre: 'Guasón',
    duracion: 122,
    actores: 'Joaquin Phoenix, Robert De Niro, Zazie Beetz',
    descripcion:
      'Un comediante fracasado y marginado por la sociedad de Ciudad Gótica cae poco a poco en la locura y la violencia.',
    genero: 'drama',
    plataforma: 'prime-video',
  },
  {
    id: 51,
    nombre: 'Dune',
    duracion: 155,
    actores: 'Timothée Chalamet, Rebecca Ferguson, Oscar Isaac',
    descripcion:
      'El heredero de una familia noble llega al planeta desértico Arrakis, la única fuente de la sustancia más valiosa del universo.',
    genero: 'ciencia-ficcion',
    plataforma: 'hbo',
  },
  {
    id: 52,
    nombre: 'Top Gun: Maverick',
    duracion: 130,
    actores: 'Tom Cruise, Miles Teller, Jennifer Connelly',
    descripcion:
      'Tras más de treinta años de servicio, un piloto veterano entrena a una nueva generación para una misión casi imposible.',
    genero: 'accion',
    plataforma: 'disney-plus',
  },
  {
    id: 53,
    nombre: 'Oppenheimer',
    duracion: 180,
    actores: 'Cillian Murphy, Emily Blunt, Robert Downey Jr.',
    descripcion:
      'La historia del físico J. Robert Oppenheimer y su papel en el desarrollo de la primera bomba atómica.',
    genero: 'drama',
    plataforma: 'netflix',
  },
  {
    id: 54,
    nombre: 'Barbie',
    duracion: 114,
    actores: 'Margot Robbie, Ryan Gosling, America Ferrera',
    descripcion:
      'Barbie empieza a cuestionar su mundo perfecto y viaja al mundo real junto a Ken para descubrir quién es realmente.',
    genero: 'comedia',
    plataforma: 'prime-video',
  },
];
