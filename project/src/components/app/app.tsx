import Main from '../main/main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Favorites from '../favorites/favorites';
import NotFound from '../404-page/404-page';
import Login from '../login/login';
import Property from '../property/property';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';

const Data = {
  CARDS_COUNT: 5,
};

function App(): JSX.Element {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main
            cardsCount = {Data.CARDS_COUNT}
          />
        </Route>
        <Route exact path={AppRoute.Login}>
          <Login />
        </Route>
        <Route exact path={AppRoute.Property}>
          <Property />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
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
