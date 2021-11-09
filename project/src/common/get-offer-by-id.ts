import { Offer, Offers } from '../types/offer';

export default function getDataById(id: number, array: Offers) : Offer {
  let result : Offer = array[0];

  for (const offer of array) {
    if (offer.id === id) {
      result =  offer;
    }
  }
  return result;
}
