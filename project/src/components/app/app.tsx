import Main from '../main/main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Favorites from '../favorites/favorites';
import NotFound from '../404-page/404-page';
import Login from '../login/login';
import Property from '../property/property';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import { Offers } from '../../types/offer';
import { Reviews } from '../../types/review';

const Data = {
  CARDS_COUNT: 5,
};

type AppScreenProps = {
  offers: Offers,
  reviews: Reviews,
};

function App({offers, reviews} : AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main
            cardsCount={Data.CARDS_COUNT}
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.Login}>
          <Login />
        </Route>
        <Route exact path={AppRoute.Property}>
          <Property
            offers={offers}
            reviews={reviews}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offers} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
