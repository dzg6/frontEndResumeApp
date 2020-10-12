/**
 *
 * Asynchronously loads the component for Lambda
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Lambda = lazyLoad(
  () => import('./index'),
  module => module.Lambda,
);
