import matheusSilva from '../../media/images/speakers/matheus-silva.jpg';

/**
 * Retorna um array com os palestrantes, exemplo:
 *
 * {
 *    id: 1, //ID de controle
 *    name: '', //Nome do Palestrante
 *    talk: '', //Link da talk
 *    theme: '', //Tema da palestra
 *    videoId: '', //ID do vídeo do Youtube
 *    avatar: '', //Foto do palestrante
 *    worksIn: '', //Nome do local de trabalho
 *    worksLink: '', //URL do local de trabalho
 *    github: '' //URL do github
 * }
 */
export default [
  {
    id: 1,
    name: 'Gabriel Rubens',
    theme: 'ECMAScript 2077 (ReasonML)',
    avatar: 'https://avatars3.githubusercontent.com/u/1283200',
    worksIn: 'Astrocoders',
    worksLink: 'https://astrocoders.com',
    videoId: 'DIjRZLQ2uZ4',
    github: 'https://github.com/fakenickels',
    isYou: false,
  },
  {
    id: 2,
    name: 'Matheus Silva',
    theme: 'Webpack and the state of bundlers',
    avatar: matheusSilva,
    worksIn: 'Daitan Group',
    worksLink: 'https://www.daitan.com/',
    videoId: '-Z4jDSUVSTU',
    github: 'https://github.com/fakenickels',
    isYou: false,
  },
  // {
  //   id: 99,
  //   name: 'Palestrante Surpresa!',
  //   theme: 'Envie sua talk',
  //   avatar: you,
  //   worksIn: 'React Brasil',
  //   worksLink: globals.contacts.github,
  //   talk: globals.contacts.c4p,
  //   github: globals.contacts.github,
  //   isYou: true,
  // },
];
