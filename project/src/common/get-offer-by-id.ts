import { Offer } from '../types/offer';
import { offers } from '../mocks/offers';

export default function getOfferById(id: number) : Offer {
  let result : Offer = offers[0];

  for (const offer of offers) {
    if (offer.id === id) {
      result =  offer;
    }
  }
  return result;
}
