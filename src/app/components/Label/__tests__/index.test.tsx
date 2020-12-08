import React from 'react';
import { render } from '@testing-library/react';

import { Label } from '..';

describe('<Label  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Label />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
