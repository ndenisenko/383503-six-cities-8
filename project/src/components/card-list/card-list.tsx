import { useState } from 'react';
import Card from '../card/card';
import { Offers } from '../../types/offer';

type CardListProps = {
  offers: Offers;
}

function CardList({offers} : CardListProps) : JSX.Element {
  const [activeOffer, setActiveOffer] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => {
          const {id} = offer;
          const keyValue = `id-${id}`;
          return (
            <Card
              isActive={activeOffer === id}
              key={keyValue}
              offer={offer}
              onFocus={() => setActiveOffer(id)}
              onBlur={() => setActiveOffer(0)}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
