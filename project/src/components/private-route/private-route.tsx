import { Route, Redirect } from 'react-router';
import { RouteProps } from 'react-router';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = RouteProps & {
    render: () => JSX.Element;
    authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRouteProps) : JSX.Element {
  const {exact, path, render, authorizationStatus} = props;

  return (
    <Route
      exact = {exact}
      path = {path}
      render = {() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}

export default PrivateRoute;
