/**
 *
 * Asynchronously loads the component for Users
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Users = lazyLoad(
  () => import('./index'),
  module => module.Users,
);
