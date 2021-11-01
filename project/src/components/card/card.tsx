import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import { Offer } from '../../types/offer';
import capitalizeFirstLetter from '../../common/uc-firts';
import toPercent from '../../common/to-percentage';
import {AppRoute} from '../../const';

const propertyRoot = '/offer/';

type CardProps = {
  offer : Offer;
  onFocus: () => void;
  isActive: boolean;
  onBlur: () => void;
};

function Card({offer, onFocus, isActive, onBlur}: CardProps): JSX.Element {
  const {price, type, title, rating, id} = offer;
  const history = useHistory();

  return (
    <article onMouseEnter={onFocus} onMouseLeave={onBlur} className="cities__place-card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={propertyRoot + id.toString()}>
          <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value" style={{color: `${isActive ? 'red' : 'black'}`}}>&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: `${toPercent(rating)}%`}}
            />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name"
          onClick={() => history.push(AppRoute.Property)}
        >
          <Link to={propertyRoot + id.toString()}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

export default Card;
