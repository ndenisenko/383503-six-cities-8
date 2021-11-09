/* eslint-disable camelcase */
import ReviewForm from '../review/review';
import {Reviews} from '../../types/review';
import {Offer} from '../../types/offer';
import toPercent from '../../common/to-percentage';

type ReviewListProps = {
    reviews: Reviews,
    offer: Offer,
}

export default function ReviewList({reviews, offer} : ReviewListProps) : JSX.Element {
  let reviewsCount = 0;

  for (const review of reviews) {
    if (review.id === offer.id) {
      reviewsCount++;
    }
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsCount}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => {
            if(offer.id === review.id) {
              const {user, rating, comment} = review;
              const {name, avatar_url} = user;

              return (
                <li className="reviews__item" key={review.date}>
                  <div className="reviews__user user">
                    <div className="reviews__avatar-wrapper user__avatar-wrapper">
                      <img className="reviews__avatar user__avatar" src={avatar_url} width="54" height="54" alt="Reviews avatar" />
                    </div>
                    <span className="reviews__user-name">
                      {name}
                    </span>
                  </div>
                  <div className="reviews__info">
                    <div className="reviews__rating rating">
                      <div className="reviews__stars rating__stars">
                        <span style={{
                          width: `${toPercent(rating)}%`}}
                        />
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <p className="reviews__text">
                      {comment}
                    </p>
                    <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                  </div>
                </li>
              );
            }
          })
        }
      </ul>
      <ReviewForm />
    </section>
  );
}

