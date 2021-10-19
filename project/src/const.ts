enum AppRoute {
    Login = '/login',
    Favorites = '/favorites',
    Property = '/offer/:id',
    Root = '/',
  }

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export {AppRoute, AuthorizationStatus};
