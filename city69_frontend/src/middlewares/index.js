import { applyMiddleware } from 'redux';

import * as user from './user';
import * as city from './city';

export default () => applyMiddleware(
  ...Object.values(user),
  ...Object.values(city),
);
