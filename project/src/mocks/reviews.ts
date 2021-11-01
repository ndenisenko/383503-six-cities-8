/* eslint-disable camelcase */
import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    comment:  'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatar_url: 'img/1.png',
      id: 1,
      is_pro: false,
      name: 'Max',
    },
  },
  {
    comment:  'not bad',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 3,
    user: {
      avatar_url: 'img/3.png',
      id: 2,
      is_pro: true,
      name: 'Dima',
    },
  },
];
