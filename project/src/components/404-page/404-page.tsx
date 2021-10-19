import {Fragment} from 'react';
import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <Fragment>
      <h1>404</h1>
      <p>404 Not Found</p>
      <Link to="/">Вернуться на главную</Link>
    </Fragment>
  );
}

export default NotFound;
