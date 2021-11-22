/* eslint-disable camelcase */
import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatar_url: 'img/avatar-angelina.jpg',
      id: 3,
      is_pro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/room.jpg', 'img/apartment-01.jpg'],
    is_favorite: false,
    is_premium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    max_adults: 4,
    preview_image: 'img/apartment-small-04.jpg',
    price: 150,
    rating: 4.8,
    title: '1 Beautiful & luxurious studio at great location',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'some description',
    goods: ['Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatar_url: 'img/avatar-angelina.jpg',
      id: 3,
      is_pro: true,
      name: 'Natalia',
    },
    id: 2,
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg'],
    is_favorite: true,
    is_premium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    max_adults: 2,
    preview_image: 'img/apartment-small-03.jpg',
    price: 160,
    rating: 4.3,
    title: '2 Cozy hotel',
    type: 'hotel',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'some description of offer',
    goods: ['Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatar_url: 'img/avatar-angelina.jpg',
      id: 3,
      is_pro: true,
      name: 'Natalia',
    },
    id: 3,
    images: ['img/studio-01.jpg', 'img/apartment-01.jpg'],
    is_favorite: true,
    is_premium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    max_adults: 2,
    preview_image: 'img/apartment-small-04.jpg',
    price: 90,
    rating: 3,
    title: '3 some title',
    type: 'house',
  },
];

