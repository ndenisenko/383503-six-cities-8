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

const DEFAULT_CUSTOM_ICON = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export {AppRoute, AuthorizationStatus, DEFAULT_CUSTOM_ICON};
