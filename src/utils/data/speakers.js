import matheusSilva from '../../media/images/speakers/matheus-silva.jpg';
import prestonSo from '../../media/images/speakers/preston-so.png';
import larissaFarias from '../../media/images/speakers/larissa-farias.jpg';
import noOne from '../../media/images/speakers/no-one.jpeg';

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
    github: 'https://github.com/PlayMa256',
    isYou: false,
  },
  {
    id: 3,
    name: 'Preston So',
    theme: 'Gatsby hoje em dia e no futuro',
    avatar: prestonSo,
    worksIn: 'Gatsby',
    worksLink: 'https://www.gatsbyjs.org/',
    videoId: 'Zu1nrkNEkqc',
    github: 'https://github.com/prestonso',
    isYou: false,
  },
  {
    id: 4,
    name: 'Larissa Farias',
    theme: 'Performance com React',
    avatar: larissaFarias,
    worksIn: '',
    worksLink: '',
    videoId: 'yXFtzrwzmyU',
    github: 'https://github.com/larissathasdefar',
    isYou: false,
  },
  {
    id: 6,
    name: 'Em breve!',
    theme: '',
    avatar: noOne,
    worksIn: '',
    worksLink: '',
    isYou: false,
  },
  {
    id: 7,
    name: 'Em breve!',
    theme: '',
    avatar: noOne,
    worksIn: '',
    worksLink: '',
    isYou: false,
  },
  {
    id: 8,
    name: 'Em breve!',
    theme: '',
    avatar: noOne,
    worksIn: '',
    worksLink: '',
    isYou: false,
  },
  {
    id: 5,
    name: 'Em breve!',
    theme: '',
    avatar: noOne,
    worksIn: '',
    worksLink: '',
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
